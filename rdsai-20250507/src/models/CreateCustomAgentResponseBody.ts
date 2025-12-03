// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentResponseBody extends $dara.Model {
  /**
   * @example
   * 2020-11-27 16:01:28
   */
  createdAt?: string;
  /**
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * AgentId
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
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
      createdAt: 'CreatedAt',
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
      createdAt: 'string',
      enableTools: 'boolean',
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

