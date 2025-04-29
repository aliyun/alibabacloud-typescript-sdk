// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  billingMoney?: number;
  /**
   * @example
   * demo
   */
  buyerAdd?: string;
  /**
   * @example
   * demo
   */
  buyerBankAcc?: string;
  /**
   * @example
   * demo
   */
  buyerBankAdd?: string;
  /**
   * @example
   * 0571-82321777
   */
  buyerPhone?: string;
  /**
   * @example
   * 1
   */
  buyerTaxNum?: string;
  deliveryAddress?: string;
  deliveryArea?: string;
  deliveryCity?: string;
  deliveryProvince?: string;
  deliveryStreet?: string;
  /**
   * @example
   * demo
   */
  email?: string;
  /**
   * @example
   * 1
   */
  invoiceMaterial?: number;
  /**
   * @example
   * demo
   */
  invoiceTitle?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  /**
   * @example
   * 100
   */
  postage?: number;
  receiverName?: string;
  /**
   * @example
   * 0571-82321777
   */
  receiverPhone?: string;
  /**
   * @example
   * tmf closeCloneTask
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      billingMoney: 'billing_money',
      buyerAdd: 'buyer_add',
      buyerBankAcc: 'buyer_bank_acc',
      buyerBankAdd: 'buyer_bank_add',
      buyerPhone: 'buyer_phone',
      buyerTaxNum: 'buyer_tax_num',
      deliveryAddress: 'delivery_address',
      deliveryArea: 'delivery_area',
      deliveryCity: 'delivery_city',
      deliveryProvince: 'delivery_province',
      deliveryStreet: 'delivery_street',
      email: 'email',
      invoiceMaterial: 'invoice_material',
      invoiceTitle: 'invoice_title',
      invoiceType: 'invoice_type',
      postage: 'postage',
      receiverName: 'receiver_name',
      receiverPhone: 'receiver_phone',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMoney: 'number',
      buyerAdd: 'string',
      buyerBankAcc: 'string',
      buyerBankAdd: 'string',
      buyerPhone: 'string',
      buyerTaxNum: 'string',
      deliveryAddress: 'string',
      deliveryArea: 'string',
      deliveryCity: 'string',
      deliveryProvince: 'string',
      deliveryStreet: 'string',
      email: 'string',
      invoiceMaterial: 'number',
      invoiceTitle: 'string',
      invoiceType: 'number',
      postage: 'number',
      receiverName: 'string',
      receiverPhone: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

