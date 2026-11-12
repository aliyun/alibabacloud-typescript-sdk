// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataI18nValue extends $dara.Model {
  /**
   * @remarks
   * The description of the MCP service in the language.
   * 
   * @example
   * MCP service for querying knowledge bases
   */
  description?: string;
  /**
   * @remarks
   * The name of the MCP marketplace template in the language.
   * 
   * @example
   * Knowledge base
   */
  name?: string;
  /**
   * @remarks
   * The instructions for the MCP marketplace template in the language.
   * 
   * @example
   * # Knowledge base\\nKnowledge base query service
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

