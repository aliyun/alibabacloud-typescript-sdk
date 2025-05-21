// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAICoachTaskSessionResponseBodyScriptInfo } from "./CreateAicoachTaskSessionResponseBodyScriptInfo";


export class CreateAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * rtctoken
   * 
   * @example
   * 11
   */
  channelToken?: string;
  /**
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
   */
  requestId?: string;
  scriptInfo?: CreateAICoachTaskSessionResponseBodyScriptInfo;
  /**
   * @example
   * 111
   */
  sessionId?: string;
  sessionStatus?: number;
  /**
   * @remarks
   * Token
   * 
   * @example
   * 11
   */
  token?: string;
  /**
   * @example
   * 11
   */
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      scriptInfo: 'scriptInfo',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      scriptInfo: CreateAICoachTaskSessionResponseBodyScriptInfo,
      sessionId: 'string',
      sessionStatus: 'number',
      token: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    if(this.scriptInfo && typeof (this.scriptInfo as any).validate === 'function') {
      (this.scriptInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

