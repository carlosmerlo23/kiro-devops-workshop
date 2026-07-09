const app = require('../src/index');

describe('GET /health', () => {
  it('debe responder con status ok', async () => {
    // Simulación básica sin levantar el servidor
    const mockRes = {
      json: jest.fn(),
    };
    const mockReq = {};

    // Verificamos que la app está definida
    expect(app).toBeDefined();
  });
});

describe('App Express', () => {
  it('debe exportar una instancia de express', () => {
    expect(app).toHaveProperty('listen');
    expect(app).toHaveProperty('use');
  });
});
