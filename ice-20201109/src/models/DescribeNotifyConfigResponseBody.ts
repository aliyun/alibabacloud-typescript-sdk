// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotifyConfigResponseBody extends $dara.Model {
  audioOssPath?: string;
  /**
   * @example
   * http://customer.com/callback
   */
  callbackUrl?: string;
  enableAudioRecording?: boolean;
  /**
   * @example
   * true
   */
  enableNotify?: boolean;
  /**
   * @remarks
   * The event types. If this parameter is empty, all event types are selected.
   * 
   * *   agent_start: The agent is started.
   * *   agent_stop: The agent is stopped.
   * *   error: An error occurred.
   * 
   * @example
   * agent_start,agent_stop,error
   */
  eventTypes?: string;
  /**
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  /**
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      audioOssPath: 'AudioOssPath',
      callbackUrl: 'CallbackUrl',
      enableAudioRecording: 'EnableAudioRecording',
      enableNotify: 'EnableNotify',
      eventTypes: 'EventTypes',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioOssPath: 'string',
      callbackUrl: 'string',
      enableAudioRecording: 'boolean',
      enableNotify: 'boolean',
      eventTypes: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

