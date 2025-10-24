// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagGroupRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  agentKey?: string;
  /**
   * @example
   * xxxx
   */
  clientToken?: string;
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

