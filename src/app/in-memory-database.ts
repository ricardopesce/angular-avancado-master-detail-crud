import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
	createDb() {
		const categories: Category[] = [
			{ id: 1, name: "Moradia", description: "Pagamentos de contas da casa"},
			{ id: 2, name: "Saúde", description: "Plano de Saúde e remédios"},
			{ id: 3, name: "Lazer", description: "Cinema, parques, praia, etc"},
			{ id: 4, name: "Salário", description: "Recebimento de salário"},
			{ id: 5, name: "Freelas", description: "trabalhos com freelancer"},
			{id: 6, name: "Alimentação", description: "comidas e bebidas"},
			{id: 7, name: "Transporte", description: "gasolina, gastos carros"}
		];

		const entries: Entry[] = [
			{id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2020', amount: '80,60', type: 'expense', description: 'consumo de gás' } as Entry,
			{id: 2, name: 'Remédios sr Luiz', categoryId: categories[1].id, category: categories[1], paid: false, date: '14/10/2020', amount: '15,00', type: 'expense', description: 'cialis' } as Entry,
			{id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: '15/10/2020', amount: '8697,00', type: 'revenue', description: 'salário' } as Entry,
			{id: 4, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2], paid: true, date: '16/10/2020', amount: '6,90', type: 'expense', description: 'Esqueceram de Mim' } as Entry,
			{id: 5, name: 'Remédios Maria', categoryId: categories[1].id, category: categories[1], paid: true, date: '17/10/2020', amount: '51,35', type: 'expense', description: 'dipirona' } as Entry,
			{id: 6, name: 'Video Game do João', categoryId: categories[2].id, category: categories[2], paid: false, date: '17/10/2020', amount: '15,60', type: 'expense', description: 'Mario Kart' } as Entry,
			{id: 11, name: 'Gasolina', categoryId: categories[6].id, category: categories[6], paid: true, date: '17/10/2020', amount: '150,00', type: 'expense', description: 'gasolina Gol' } as Entry,
			{id: 12, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: false, date: '23/10/2020', amount: '2800,00', type: 'expense', description: 'aluguel' } as Entry,
			{id: 13, name: 'Água', categoryId: categories[1].id, category: categories[1], paid: true, date: '25/10/2020', amount: '42,00', type: 'expense', description: 'galões de água mineral' } as Entry,
			{id: 14, name: 'Pagamento Projeto XYZ', categoryId: categories[4].id, category: categories[4], paid: true, date: '25/10/2020', amount: '1250,00', type: 'revenue', description: 'projeto' } as Entry,
			{id: 19, name: 'Aluguel de filme', categoryId: categories[2].id, category: categories[2], paid: false, date: '07/11/2020', amount: '10,90', type: 'expense', description: 'Homem Aranha - Aranhaverso' } as Entry,
			{id: 21, name: 'Supermercado', categoryId: categories[5].id, category: categories[5], paid: true, date: '06/11/2020', amount: '870,45', type: 'expense', description: 'comida e limpeza' } as Entry,
			{id: 22, name: 'Gasolina', categoryId: categories[6].id, category: categories[6], paid: true, date: '18/11/2020', amount: '201,30', type: 'expense', description: 'gasolina Kombi' } as Entry,
			{id: 23, name: 'Yoga', categoryId: categories[1].id, category: categories[1], paid: false, date: '21/11/2020', amount: '120,00', type: 'expense', description: 'Yoga - Maria' } as Entry,
			{id: 44, name: 'Padaria', categoryId: categories[5].id, category: categories[5], paid: true, date: '28/11/2020', amount: '20,10', type: 'expense', description: 'pães e massa pizza' } as Entry,
			{id: 55, name: 'NET-Claro', categoryId: categories[0].id, category: categories[0], paid: true, date: '10/11/2020', amount: '239,80', type: 'expense', description: 'Internet, NET e cel Ri' } as Entry
		]

		return { categories, entries }
	}
}