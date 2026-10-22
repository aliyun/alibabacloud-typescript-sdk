// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagGroupRequest extends $dara.Model {
  /**
   * @remarks
   * AgentKey
   * 
   * @example
   * xxx
   */
  agentKey?: string;
  /**
   * @remarks
   * The idempotence parameter.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the label group.
   * 
   * This parameter is required.
   * 
   * @example
   * Label group 1
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the label group.
   * 
   * This parameter is required.
   * 
   * @example
   * 839232
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      groupName: 'GroupName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupName: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

