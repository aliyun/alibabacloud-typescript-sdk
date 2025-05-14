// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TakeoverAIAgentCallRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the human agent that will take over the AI agent (UserId in ARTC). If you do not specify this parameter, it is automatically generated and returned.
   * 
   * @example
   * uid2
   */
  humanAgentUserId?: string;
  /**
   * @remarks
   * The ID of the AI agent that will be taken over.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to return the ARTC token. Default value: false.
   * 
   * @example
   * false
   */
  requireToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      humanAgentUserId: 'HumanAgentUserId',
      instanceId: 'InstanceId',
      requireToken: 'RequireToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      humanAgentUserId: 'string',
      instanceId: 'string',
      requireToken: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

