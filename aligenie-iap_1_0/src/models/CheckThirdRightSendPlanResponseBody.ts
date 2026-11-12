// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckThirdRightSendPlanResponseBodyRetValue extends $dara.Model {
  /**
   * @remarks
   * Activation time
   * 
   * @example
   * "1713262192005"
   */
  activateDate?: string;
  /**
   * @remarks
   * Card type
   * 
   * @example
   * 1001 日卡 1002 月卡 1003 季卡 1004 年卡
   */
  cardType?: number;
  /**
   * @remarks
   * Channel code
   * 
   * @example
   * TB
   */
  channelCode?: string;
  /**
   * @remarks
   * Channel Name
   * 
   * @example
   * 淘宝
   */
  channelName?: string;
  /**
   * @remarks
   * Extension field
   * 
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 908FA068-529C-0C20-8DB5-63B0EF7CFF1F
   */
  requestId?: string;
  /**
   * @remarks
   * Rights expiration time
   * 
   * @example
   * "1713262192005"
   */
  rightsExpiredDate?: string;
  static names(): { [key: string]: string } {
    return {
      activateDate: 'ActivateDate',
      cardType: 'CardType',
      channelCode: 'ChannelCode',
      channelName: 'ChannelName',
      extendInfo: 'ExtendInfo',
      requestId: 'RequestId',
      rightsExpiredDate: 'RightsExpiredDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateDate: 'string',
      cardType: 'number',
      channelCode: 'string',
      channelName: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      rightsExpiredDate: 'string',
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

export class CheckThirdRightSendPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 系统异常
   */
  retMsg?: string;
  /**
   * @remarks
   * Result of invoking the API
   */
  retValue?: CheckThirdRightSendPlanResponseBodyRetValue;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: CheckThirdRightSendPlanResponseBodyRetValue,
    };
  }

  validate() {
    if(this.retValue && typeof (this.retValue as any).validate === 'function') {
      (this.retValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

