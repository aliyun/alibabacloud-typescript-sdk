// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentRequest extends $dara.Model {
  /**
   * @example
   * app-iBuGU1VxEY42zrQRQfNA****
   */
  apiId?: string;
  /**
   * @example
   * true
   */
  enableTools?: boolean;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  systemPrompt?: string;
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      enableTools: 'EnableTools',
      name: 'Name',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      enableTools: 'boolean',
      name: 'string',
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

