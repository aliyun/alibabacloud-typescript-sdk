// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GoodsShippingNoticeCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SF
   */
  cpCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SF145****4351
   */
  logisticsNo?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'cpCode',
      disputeId: 'disputeId',
      logisticsNo: 'logisticsNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      disputeId: 'string',
      logisticsNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

