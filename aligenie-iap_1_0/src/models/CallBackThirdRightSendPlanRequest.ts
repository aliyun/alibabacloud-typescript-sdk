// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallBackThirdRightSendPlanRequest extends $dara.Model {
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
  extendInfo?: { [key: string]: any };
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
      extendInfo: 'ExtendInfo',
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
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      genieOpenId: 'string',
      receiveStatus: 'number',
      sn: 'string',
      supplierId: 'number',
    };
  }

  validate() {
    if(this.extendInfo) {
      $dara.Model.validateMap(this.extendInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

