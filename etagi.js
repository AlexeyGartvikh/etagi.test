describe('Тестирование Etagi', function () {
    it('Проверка фильтра Etagi', function () {
        cy.visit('https://www.etagi.com/');
        cy.get('[style="width: 100%; flex: 1 0.94 auto; min-width: 200px; max-width: 310px;"] > .form-row > [style="display: flex;"] > :nth-child(1) > ._2jkGT > input').click();
        cy.get('[style="width: 100%; flex: 1 0.94 auto; min-width: 200px; max-width: 310px;"] > .form-row > [style="display: flex;"] > :nth-child(1) > ._2jkGT > input').type('1000000');
    cy.get('[style="width: 100%; flex: 1 0.94 auto; min-width: 200px; max-width: 310px;"] > .form-row > [style="display: flex;"] > :nth-child(2) > ._2jkGT > input').click();
    cy.get('[style="width: 100%; flex: 1 0.94 auto; min-width: 200px; max-width: 310px;"] > .form-row > [style="display: flex;"] > :nth-child(2) > ._2jkGT > input').type('3000000');
    cy.get('._34dAj > :nth-child(3)').click();
    cy.get('._3pES8').click();
    cy.get(':nth-child(2) > ._1ItKI').click();
    cy.get(':nth-child(29) > .templates-object-card__body').click();
    cy.get(':nth-child(4) > ._1ItKI').click();
    
    
    
    
    })
})