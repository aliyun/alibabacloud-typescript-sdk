// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallBackThirdRightSendPlanResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  retCode?: string;
  /**
   * @example
   * 系统异常
   */
  retMsg?: string;
  retValue?: boolean;
  /**
   * @example
   * 908FA068-529C-0C20-8DB5-63B0EF7CFF1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'string',
      retMsg: 'string',
      retValue: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

