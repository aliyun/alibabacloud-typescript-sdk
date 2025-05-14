// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  audioOssPath?: string;
  /**
   * @remarks
   * The URL for receiving callback notifications. By default, this parameter is left empty.
   * 
   * @example
   * http://customer.com/callback
   */
  callbackUrl?: string;
  enableAudioRecording?: boolean;
  /**
   * @remarks
   * Specifies whether to enable event notifications.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableNotify?: boolean;
  /**
   * @remarks
   * The event types. If you do not specify this parameter, all event types are selected.
   * 
   * *   agent_start
   * *   agent_stop
   * *   error
   * 
   * @example
   * agent_start,agent_stop,error
   */
  eventTypes?: string;
  /**
   * @remarks
   * The authentication token for callback. The token is carried in the Authorization header of a callback request. By default, this parameter is left empty.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      audioOssPath: 'AudioOssPath',
      callbackUrl: 'CallbackUrl',
      enableAudioRecording: 'EnableAudioRecording',
      enableNotify: 'EnableNotify',
      eventTypes: 'EventTypes',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      audioOssPath: 'string',
      callbackUrl: 'string',
      enableAudioRecording: 'boolean',
      enableNotify: 'boolean',
      eventTypes: 'string',
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

