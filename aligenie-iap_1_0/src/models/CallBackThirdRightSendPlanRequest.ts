// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallBackThirdRightSendPlanRequest extends $dara.Model {
  /**
   * @example
   * cc
   */
  bizGroup?: string;
  /**
   * @example
   * ailabs
   */
  bizType?: string;
  /**
   * @example
   * 1001
   */
  cardType?: number;
  /**
   * @example
   * 领取异常
   */
  errorMsg?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * 1dsds2FzCXFGVA1ADS
   */
  genieOpenId?: string;
  /**
   * @example
   * 1
   */
  receiveStatus?: number;
  /**
   * @example
   * 01000019100307010000600
   */
  sn?: string;
  /**
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

