// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserAutomationStream extends $dara.Model {
  /**
   * @example
   * wss://browser-automation.cn-hangzhou.agentrun.aliyuncs.com/stream/bs-1234567890abcdef
   */
  streamEndpoint?: string;
  /**
   * @example
   * ACTIVE
   */
  streamStatus?: string;
  static names(): { [key: string]: string } {
    return {
      streamEndpoint: 'streamEndpoint',
      streamStatus: 'streamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamEndpoint: 'string',
      streamStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

