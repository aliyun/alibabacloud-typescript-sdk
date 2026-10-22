// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagGroupRequest extends $dara.Model {
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
   * The ID of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * 443434
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      clientToken: 'ClientToken',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      clientToken: 'string',
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

