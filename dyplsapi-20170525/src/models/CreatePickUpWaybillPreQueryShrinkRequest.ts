// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The consignee information.
   * 
   * This parameter is required.
   */
  consigneeInfoShrink?: string;
  /**
   * @remarks
   * The code of the courier company. If no courier company is specified, the system allocates a courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The identifier of the external channel source. It cannot contain underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  orderChannels?: string;
  /**
   * @remarks
   * The order number of the access system.
   * 
   * @example
   * 787DFHHDS989****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The estimated weight. Unit: gram.
   * 
   * >  If you need to query the estimated price, this parameter is required.
   * 
   * @example
   * 2000
   */
  preWeight?: string;
  /**
   * @remarks
   * The sender information.
   * 
   * This parameter is required.
   */
  senderInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      consigneeInfoShrink: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfoShrink: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfoShrink: 'string',
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

