describe('Test de santé basique', () => {

    test('La vérité doit être vraie', () => {
        expect(true).toBe(true);
    });

    test('Calcul mathématique de base', () => {
        const somme = 2 + 2;
        expect(somme).toBe(4);
    });

    test('Vérification d’un objet', () => {
        const user = { name: 'Docker User', active: true };
        expect(user.name).toBe('Docker User');
        expect(user.active).toBe(true);
    });
});
