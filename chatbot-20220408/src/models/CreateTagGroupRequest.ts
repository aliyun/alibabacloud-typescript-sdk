// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagGroupRequest extends $dara.Model {
  /**
   * @remarks
   * AgentKey
   * 
   * @example
   * xxxxx
   */
  agentKey?: string;
  /**
   * @remarks
   * The client token for idempotence.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * TagGroup1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

