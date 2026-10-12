// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataPathConfigsFieldPathsValue extends $dara.Model {
  /**
   * @remarks
   * The identity key of the field, which is unique within the same request path, such as input_token.
   * 
   * @example
   * input_token
   */
  fieldKey?: string;
  /**
   * @remarks
   * The JSONPath expression of the field in the request or response message, such as usage.prompt_tokens.
   * 
   * @example
   * usage.prompt_tokens
   */
  jsonPath?: string;
  /**
   * @remarks
   * The value extraction rule for the field.
   * 
   * @example
   * first
   */
  rule?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * Input token
   */
  name?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * Input token statistics
   */
  description?: string;
  /**
   * @remarks
   * The source of the field value, indicating which part of the message the field is read from, such as response_body.
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
  /**
   * @remarks
   * The message direction to which the field belongs, indicating whether it is extracted from the request or the response.
   * 
   * @example
   * response
   */
  io?: string;
  /**
   * @remarks
   * Indicates whether the field contains sensitive information.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * Indicates whether collection is enabled for the field.
   * 
   * @example
   * true
   */
  recordEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the collection status of the field can be toggled.
   * 
   * @example
   * true
   */
  toggleAllowed?: boolean;
  /**
   * @remarks
   * Indicates whether the JSONPath of the field can be rewritten.
   * 
   * @example
   * true
   */
  jsonPathRewriteAllowed?: boolean;
  /**
   * @remarks
   * Indicates whether the field configuration is derived from a field template.
   * 
   * @example
   * true
   */
  fromTemplate?: boolean;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      jsonPath: 'jsonPath',
      rule: 'rule',
      name: 'name',
      description: 'description',
      source: 'source',
      category: 'category',
      io: 'io',
      sensitive: 'sensitive',
      recordEnabled: 'recordEnabled',
      toggleAllowed: 'toggleAllowed',
      jsonPathRewriteAllowed: 'jsonPathRewriteAllowed',
      fromTemplate: 'fromTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      jsonPath: 'string',
      rule: 'string',
      name: 'string',
      description: 'string',
      source: 'string',
      category: 'string',
      io: 'string',
      sensitive: 'boolean',
      recordEnabled: 'boolean',
      toggleAllowed: 'boolean',
      jsonPathRewriteAllowed: 'boolean',
      fromTemplate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

