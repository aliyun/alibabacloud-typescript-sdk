// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotifyConfigResponseBody extends $dara.Model {
  audioOssPath?: string;
  /**
   * @remarks
   * The URL where event callbacks are sent.
   * 
   * @example
   * http://customer.com/callback
   */
  callbackUrl?: string;
  enableAudioRecording?: boolean;
  /**
   * @remarks
   * Indicates whether notifications are enabled.
   * 
   * @example
   * true
   */
  enableNotify?: boolean;
  /**
   * @remarks
   * The event types. If you do not specify this parameter, all event types are selected by default.
   * 
   * - `agent_start`: The agent is ready.
   * 
   * - `agent_stop`: The agent is stopped.
   * 
   * - `error`: The task encountered an error.
   * 
   * @example
   * agent_start,agent_stop,error
   */
  eventTypes?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  /**
   * @remarks
   * The authentication token used to verify the callback. This token is included in the `Authorization` field of the request header for each event callback.
   * 
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

