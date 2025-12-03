// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  enableTools?: string;
  /**
   * @remarks
   * AgentId。
   * 
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  systemPrompt?: string;
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      enableTools: 'EnableTools',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTools: 'string',
      id: 'string',
      name: 'string',
      requestId: 'string',
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

