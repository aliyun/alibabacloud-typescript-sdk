// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolarClawBindingsResponseBodyBindings extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * default
   */
  channelAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      channel: 'Channel',
      channelAccountId: 'ChannelAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      channel: 'string',
      channelAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolarClawBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of bindings.
   */
  bindings?: ListPolarClawBindingsResponseBodyBindings[];
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F2007D3-7E74-4ECB-89A8-BF130D******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      bindings: 'Bindings',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      bindings: { 'type': 'array', 'itemType': ListPolarClawBindingsResponseBodyBindings },
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

