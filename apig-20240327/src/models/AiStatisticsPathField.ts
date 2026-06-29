// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiStatisticsPathField extends $dara.Model {
  /**
   * @remarks
   * The secondary category.
   * 
   * @example
   * conversation
   */
  category?: string;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * 用户输入的问题内容
   */
  description?: string;
  /**
   * @remarks
   * The log key.
   * 
   * @example
   * question
   */
  fieldKey?: string;
  /**
   * @remarks
   * The request or response direction.
   * 
   * @example
   * request
   */
  io?: string;
  /**
   * @remarks
   * The corresponding JSON path (GJSON syntax).
   * 
   * @example
   * messages.#.content
   */
  jsonPath?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * 问题内容
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether collection is enabled.
   * 
   * @example
   * true
   */
  recordEnabled?: boolean;
  /**
   * @remarks
   * The rule used for streaming response extraction. Valid values:
   * - append: appends content
   * - first: retrieves the first value
   * - replace: retrieves the last value
   * 
   * @example
   * append
   */
  rule?: string;
  /**
   * @remarks
   * Indicates whether the field is sensitive.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * request_body
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      fieldKey: 'fieldKey',
      io: 'io',
      jsonPath: 'jsonPath',
      name: 'name',
      recordEnabled: 'recordEnabled',
      rule: 'rule',
      sensitive: 'sensitive',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      fieldKey: 'string',
      io: 'string',
      jsonPath: 'string',
      name: 'string',
      recordEnabled: 'boolean',
      rule: 'string',
      sensitive: 'boolean',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

