// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataFieldPathsValue extends $dara.Model {
  /**
   * @remarks
   * The identifier key of the template field, such as input_token.
   * 
   * @example
   * input_token
   */
  fieldKey?: string;
  /**
   * @remarks
   * The JSONPath expression of the template field in the request or response message, such as usage.prompt_tokens.
   * 
   * @example
   * usage.prompt_tokens
   */
  jsonPath?: string;
  /**
   * @remarks
   * The value source of the field, which indicates the part of the message from which the field is read, such as response_body.
   * 
   * @example
   * response_body
   */
  source?: string;
  /**
   * @remarks
   * The statistical category to which the field belongs.
   * 
   * @example
   * usage
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      jsonPath: 'jsonPath',
      source: 'source',
      category: 'category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      jsonPath: 'string',
      source: 'string',
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

