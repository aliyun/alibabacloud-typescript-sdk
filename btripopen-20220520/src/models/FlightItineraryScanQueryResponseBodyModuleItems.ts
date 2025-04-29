// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightItineraryScanQueryResponseBodyModuleItemsFlights } from "./FlightItineraryScanQueryResponseBodyModuleItemsFlights";


export class FlightItineraryScanQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * 销售单位代号
   * 
   * @example
   * SIA25608336893
   */
  agentCode?: string;
  applyId?: string;
  /**
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @example
   * 50
   */
  build?: string;
  costCenter?: string;
  department?: string;
  /**
   * @remarks
   * 机票行程明细
   */
  flights?: FlightItineraryScanQueryResponseBodyModuleItemsFlights[];
  /**
   * @example
   * 120
   */
  fuelSurcharge?: string;
  /**
   * @remarks
   * UK
   * 
   * @example
   * 30
   */
  id?: string;
  /**
   * @example
   * 0
   */
  insurance?: string;
  invoiceTitle?: string;
  invoiceType?: number;
  /**
   * @remarks
   * 填开单位
   */
  issueCompany?: string;
  /**
   * @remarks
   * 填开日期
   * 
   * @example
   * 2019-02-28
   */
  issueDate?: string;
  /**
   * @example
   * 6666666666
   */
  itineraryNum?: string;
  ofdOssUrl?: string;
  /**
   * @example
   * 4801105714092
   */
  orderId?: number;
  /**
   * @example
   * https://www.testurl.com
   */
  ossUrl?: string;
  passengerName?: string;
  pdfOssUrl?: string;
  project?: string;
  /**
   * @remarks
   * 提示信息
   */
  promptMessage?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  purchaserType?: number;
  /**
   * @example
   * 108.17
   */
  taxAmount?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @example
   * 784-1111111111
   */
  ticketNo?: string;
  /**
   * @example
   * 1190
   */
  ticketPrice?: string;
  /**
   * @example
   * 1360
   */
  totalPrice?: string;
  /**
   * @remarks
   * 验证码
   * 
   * @example
   * 9817
   */
  validationCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentCode: 'agent_code',
      applyId: 'apply_id',
      billDate: 'bill_date',
      build: 'build',
      costCenter: 'cost_center',
      department: 'department',
      flights: 'flights',
      fuelSurcharge: 'fuel_surcharge',
      id: 'id',
      insurance: 'insurance',
      invoiceTitle: 'invoice_title',
      invoiceType: 'invoice_type',
      issueCompany: 'issue_company',
      issueDate: 'issue_date',
      itineraryNum: 'itinerary_num',
      ofdOssUrl: 'ofd_oss_url',
      orderId: 'order_id',
      ossUrl: 'oss_url',
      passengerName: 'passenger_name',
      pdfOssUrl: 'pdf_oss_url',
      project: 'project',
      promptMessage: 'prompt_message',
      purchaserName: 'purchaser_name',
      purchaserTaxNo: 'purchaser_tax_no',
      purchaserType: 'purchaser_type',
      taxAmount: 'tax_amount',
      taxRate: 'tax_rate',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
      validationCode: 'validation_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCode: 'string',
      applyId: 'string',
      billDate: 'string',
      build: 'string',
      costCenter: 'string',
      department: 'string',
      flights: { 'type': 'array', 'itemType': FlightItineraryScanQueryResponseBodyModuleItemsFlights },
      fuelSurcharge: 'string',
      id: 'string',
      insurance: 'string',
      invoiceTitle: 'string',
      invoiceType: 'number',
      issueCompany: 'string',
      issueDate: 'string',
      itineraryNum: 'string',
      ofdOssUrl: 'string',
      orderId: 'number',
      ossUrl: 'string',
      passengerName: 'string',
      pdfOssUrl: 'string',
      project: 'string',
      promptMessage: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      purchaserType: 'number',
      taxAmount: 'string',
      taxRate: 'string',
      ticketNo: 'string',
      ticketPrice: 'string',
      totalPrice: 'string',
      validationCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flights)) {
      $dara.Model.validateArray(this.flights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

