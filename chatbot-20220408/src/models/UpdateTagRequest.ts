// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagRequest extends $dara.Model {
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
   * 455745
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 839232
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 标签组1
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      id: 'Id',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupId: 'number',
      id: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

