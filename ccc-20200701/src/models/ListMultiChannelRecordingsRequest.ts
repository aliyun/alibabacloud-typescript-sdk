// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiChannelRecordingsRequest extends $dara.Model {
  /**
   * @remarks
   * Agent call channel ID.
   * 
   * @example
   * ch-user-****-****-1772180844645-job-******
   */
  agentChannelId?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentChannelId: 'AgentChannelId',
      agentId: 'AgentId',
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentChannelId: 'string',
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

