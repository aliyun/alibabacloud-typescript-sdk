// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagRequest extends $dara.Model {
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
   * xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the label group.
   * 
   * This parameter is required.
   * 
   * @example
   * 4132342
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the label group.
   * 
   * This parameter is required.
   * 
   * @example
   * LabelGroup1
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
      groupId: 'number',
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

