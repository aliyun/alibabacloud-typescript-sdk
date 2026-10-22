// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagRequest extends $dara.Model {
  /**
   * @remarks
   * AgentKey
   * 
   * @example
   * xxxx
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
   * The tag group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 43435
   */
  groupId?: number;
  /**
   * @remarks
   * The tag ID.
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
      groupId: 'GroupId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupId: 'number',
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

