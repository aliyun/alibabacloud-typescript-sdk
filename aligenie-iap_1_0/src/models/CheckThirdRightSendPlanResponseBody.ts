// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckThirdRightSendPlanResponseBodyRetValue extends $dara.Model {
  /**
   * @example
   * "1713262192005"
   */
  activateDate?: string;
  /**
   * @example
   * 1001 日卡 1002 月卡 1003 季卡 1004 年卡
   */
  cardType?: number;
  /**
   * @example
   * TB
   */
  channelCode?: string;
  /**
   * @example
   * 淘宝
   */
  channelName?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: { [key: string]: any };
  /**
   * @example
   * 908FA068-529C-0C20-8DB5-63B0EF7CFF1F
   */
  requestId?: string;
  /**
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
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @example
   * 系统异常
   */
  retMsg?: string;
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

