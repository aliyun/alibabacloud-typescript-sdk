// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationDetailRequest extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-25884193037652****
   */
  contactId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      contactId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

