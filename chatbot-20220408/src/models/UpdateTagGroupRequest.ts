// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagGroupRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  agentKey?: string;
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 标签组1
   */
  groupName?: string;
  /**
   * @remarks
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

