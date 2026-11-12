// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallBackThirdRightSendPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * device group
   * 
   * @example
   * cc
   */
  bizGroup?: string;
  /**
   * @remarks
   * device Type
   * 
   * @example
   * ailabs
   */
  bizType?: string;
  /**
   * @remarks
   * 1001 daily card, 1002 monthly card, 1003 quarterly card, 1004 annual card
   * 
   * @example
   * 1001
   */
  cardType?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 领取异常
   */
  errorMsg?: string;
  /**
   * @remarks
   * Extension fields
   * 
   * @example
   * {}
   */
  extendInfoShrink?: string;
  /**
   * @remarks
   * Genie ID
   * 
   * @example
   * 1dsds2FzCXFGVA1ADS
   */
  genieOpenId?: string;
  /**
   * @remarks
   * redemption status
   * 
   * @example
   * 1
   */
  receiveStatus?: number;
  /**
   * @remarks
   * SN of the device
   * 
   * @example
   * 01000019100307010000600
   */
  sn?: string;
  /**
   * @remarks
   * Supplier ID
   * 
   * @example
   * 1
   */
  supplierId?: number;
  static names(): { [key: string]: string } {
    return {
      bizGroup: 'BizGroup',
      bizType: 'BizType',
      cardType: 'CardType',
      errorMsg: 'ErrorMsg',
      extendInfoShrink: 'ExtendInfo',
      genieOpenId: 'GenieOpenId',
      receiveStatus: 'ReceiveStatus',
      sn: 'Sn',
      supplierId: 'SupplierId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroup: 'string',
      bizType: 'string',
      cardType: 'number',
      errorMsg: 'string',
      extendInfoShrink: 'string',
      genieOpenId: 'string',
      receiveStatus: 'number',
      sn: 'string',
      supplierId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

