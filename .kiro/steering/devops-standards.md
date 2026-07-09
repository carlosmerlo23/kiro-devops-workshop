# Estándares DevOps del Equipo

## Pipelines CI/CD

- Todos los pipelines deben implementarse usando **GitHub Actions**.
- Los workflows deben tener nombres descriptivos en español (ejemplo: `name: "Integración Continua - API Principal"`).
- Cada workflow debe incluir como mínimo los siguientes steps:
  1. **Lint** - Validación de estilo y calidad de código.
  2. **Test** - Ejecución de pruebas unitarias y/o de integración.
  3. **Build** - Compilación o empaquetado del artefacto.

## Runtime y Versiones

- Usar **Node.js 20** como versión por defecto en todos los workflows.
- Ejemplo de configuración:
  ```yaml
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
  ```

## Gestión de Secrets

- Todos los secrets deben referenciarse con el prefijo `CARVAJAL_`.
- Ejemplo: `${{ secrets.CARVAJAL_NPM_TOKEN }}`, `${{ secrets.CARVAJAL_SLACK_WEBHOOK }}`.
- No usar nombres genéricos sin prefijo.

## Notificaciones

- Siempre incluir un step de notificación a **Slack** cuando el workflow falle.
- Usar una condición `if: failure()` para enviar la alerta únicamente en caso de error.
- Ejemplo:
  ```yaml
  - name: Notificar fallo a Slack
    if: failure()
    uses: slackapi/slack-github-action@v1
    with:
      payload: |
        {
          "text": "El workflow '${{ github.workflow }}' falló en ${{ github.repository }} (rama: ${{ github.ref_name }})"
        }
    env:
      SLACK_WEBHOOK_URL: ${{ secrets.CARVAJAL_SLACK_WEBHOOK }}
  ```
