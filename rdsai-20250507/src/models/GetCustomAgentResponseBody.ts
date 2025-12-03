// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentResponseBody extends $dara.Model {
  /**
   * @example
   * 2025-06-04T02:25:43Z
   */
  createdAt?: string;
  /**
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @example
   * 17053
   */
  id?: string;
  name?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  systemPrompt?: string;
  tools?: string[];
  /**
   * @example
   * 2020-11-27 16:02:28
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      enableTools: 'EnableTools',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      updatedAt: 'UpdatedAt',
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
      updatedAt: 'string',
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

