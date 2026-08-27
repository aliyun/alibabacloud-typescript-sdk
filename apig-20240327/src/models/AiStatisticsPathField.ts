// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiStatisticsPathField extends $dara.Model {
  /**
   * @remarks
   * The secondary business category of the field. Optional. Valid values: conversation (conversation content), config (configuration parameters), tools (tool calling), usage (usage statistics), metadata (metadata), choices (candidate results), identity (identity identifier), cache (cache information), media (multimedia content), logprobs (log probabilities), and custom (custom field). Set custom fields to custom.
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
   * The question content entered by the user
   */
  description?: string;
  /**
   * @remarks
   * The log key (field name).
   * 
   * @example
   * question
   */
  fieldKey?: string;
  /**
   * @remarks
   * The request or response attribution. The backend normalizes this to request or response based on source.
   * 
   * @example
   * request
   */
  io?: string;
  /**
   * @remarks
   * The corresponding jsonPath (gjson syntax).
   * 
   * @example
   * messages.#.content
   */
  jsonPath?: string;
  /**
   * @remarks
   * The annotation for the field key name.
   * 
   * @example
   * Question content
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether collection is enabled to create a log record for the corresponding field in AI request logs.
   * 
   * @example
   * true
   */
  recordEnabled?: boolean;
  /**
   * @remarks
   * The aggregation rule for streaming response fields. Valid values: append, first, and replace. append: appends the matched values from each streaming chunk in sequence. first: retains the first matched value. replace: uses the last matched value. When source is response_streaming_body and rule is not specified, first is used by default. This field is not required for non-streaming scenarios.
   * 
   * @example
   * append
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the field is sensitive.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The source of the field value. Valid values: fixed_value (fixed value), request_body (request body), request_header (request header), response_header (response header), response_body (non-streaming response body), and response_streaming_body (streaming response body).
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

