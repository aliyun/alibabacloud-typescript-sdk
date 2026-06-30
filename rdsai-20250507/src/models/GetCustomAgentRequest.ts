// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom agent.
   * 
   * @example
   * ebe44453-3b41-4c74-94d1-01d088d7****
   */
  customAgentId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

