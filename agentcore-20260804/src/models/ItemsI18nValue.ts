// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ItemsI18nValue extends $dara.Model {
  /**
   * @remarks
   * The MCP service description in the corresponding language.
   * 
   * @example
   * An MCP service for querying knowledge bases
   */
  description?: string;
  /**
   * @remarks
   * The MCP marketplace template name in the corresponding language.
   * 
   * @example
   * Knowledge Base
   */
  name?: string;
  /**
   * @remarks
   * The MCP marketplace template usage instructions in the corresponding language.
   * 
   * @example
   * # Knowledge Base\\nKnowledge base query service
   */
  readme?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      readme: 'readme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      readme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

