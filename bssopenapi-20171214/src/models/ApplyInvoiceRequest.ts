// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyInvoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address to which the invoice is delivered. This parameter is required if the invoice is a paper invoice. Set the ID to the value of the AddressId parameter returned by calling the QueryCustomerAddressList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 237958367
   */
  addressId?: number;
  /**
   * @remarks
   * The nickname of the applicant. The system does not verify the nickname.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  applyUserNick?: string;
  /**
   * @remarks
   * The ID of the customer. Set the ID to the value of the CustomerId parameter returned by calling the QueryInvoicingCustomerList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 124132423
   */
  customerId?: number;
  /**
   * @remarks
   * The amount of the invoice. Unit: Cent.
   * 
   * This parameter is required.
   * 
   * @example
   * 124132
   */
  invoiceAmount?: number;
  /**
   * @remarks
   * Specifies whether to invoice by amount. A value of true indicates that the user applies for the invoice based on the InvoiceAmount parameter. A value of false indicates that the user applies for the invoice based on the total amount of the invoicing items.
   * 
   * @example
   * true
   */
  invoiceByAmount?: boolean;
  /**
   * @remarks
   * The type of the invoice. Valid values:
   * 
   * *   0: paper invoice
   * *   1: electronic invoice
   * 
   * @example
   * 1
   */
  invoicingType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The channel that is used to process the invoice. A value of 0 indicates that the invoice is processed by Alibaba Cloud. A value of 1 indicates that the invoice is processed by the tax platform. Set the value to 1.
   * 
   * @example
   * 1
   */
  processWay?: number;
  /**
   * @remarks
   * The IDs of the selected invoicing items. Set the IDs to the IDs returned by calling the QueryEvaluateList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 384752367
   */
  selectedIds?: number[];
  /**
   * @remarks
   * The remarks made by the user.
   * 
   * @example
   * test
   */
  userRemark?: string;
  emails?: string;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      applyUserNick: 'ApplyUserNick',
      customerId: 'CustomerId',
      invoiceAmount: 'InvoiceAmount',
      invoiceByAmount: 'InvoiceByAmount',
      invoicingType: 'InvoicingType',
      ownerId: 'OwnerId',
      processWay: 'ProcessWay',
      selectedIds: 'SelectedIds',
      userRemark: 'UserRemark',
      emails: 'emails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'number',
      applyUserNick: 'string',
      customerId: 'number',
      invoiceAmount: 'number',
      invoiceByAmount: 'boolean',
      invoicingType: 'number',
      ownerId: 'number',
      processWay: 'number',
      selectedIds: { 'type': 'array', 'itemType': 'number' },
      userRemark: 'string',
      emails: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.selectedIds)) {
      $dara.Model.validateArray(this.selectedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

