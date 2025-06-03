// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * xxxxxxxx
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

