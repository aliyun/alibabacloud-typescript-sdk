// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TakeoverAIAgentCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ARTC channel.
   * 
   * @example
   * 70f22d5784194938a7e387052f2b3208
   */
  channelId?: string;
  /**
   * @remarks
   * The ID of the human agent.
   * 
   * @example
   * uid2
   */
  humanAgentUserId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The ARTC token.
   * 
   * @example
   * eyJhcHBpZCI6ICIxMjM0MTIzNxxxxx
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      humanAgentUserId: 'HumanAgentUserId',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      humanAgentUserId: 'string',
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

