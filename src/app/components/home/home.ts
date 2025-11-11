import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
services = [
    {
      id: '01',
      title: 'Financial Consultancy',
      description: 'Financial services ranging from creation of budgets, cash flow management, cash flow projections, project appraisals, market research on loans and sound financial advice on working capital management.'
    },
    {
      id: '02',
      title: 'Tax Consultancy',
      description: 'We ensure our clients pay the minimum possible amount of tax within the confines of the law, while ensuring no penalties are incurred. We provide information on taxes and we are also actively involved in submitting tax returns for companies and individuals ensuring that our clients are fully compliant.'
    },
    {
      id: '03',
      title: 'Accounting & Bookkeeping Servces',
      description: 'We offer bookkeeping services to small and medium sized organizations that need accountancy services so as to enable organizations make informed decisions, create better strategies and grow at an optimum rate. In this category we also offer i.e Accounting, finance management, financial analysis, projections and budgeting.Payroll processing and Taxes: Calculation and payment of statutory deductions. I.e. NHIF, NSSF, PAYE and VAT.'
    },
    {
      id: '04',
      title: 'Internal Audit Services',
      description: 'These include; checking on organizations’ internal control systems, their overall effect towards achievement of organizations’ goals and their effectiveness, I offer recommendations and also implementation of these recommendations.'
    },
      {
      id: '05',
      title: 'Management Consultancy',
      description: 'We offer various management services including actual management monitoring functions, supervisory functions, business process analysis, and subsequent business process engineering.'
    },
      {
      id: '06',
      title: 'Project Management',
      description: 'Project management services including; actual on site project management, project appraisals, project budgets, and project cost benefit analysis. We also do operational project supervisory services.'
    },
      {
      id: '07',
      title: 'Commercial Services',
      description: 'commercial services range from; strategic planning, market research, and providing industry information e.g. industry size, penetration, growth, target market and industry rate of return on investment. We have specialized in the soft drinks, mineral water and pharmaceuticals industries.'
    },
      {
      id: '08',
      title: 'Strategic planning and internal control design services',
      description: ''
    },
      {
      id: '09',
      title: 'Asset and Fund management',
      description: ''
    }
  ];
}
