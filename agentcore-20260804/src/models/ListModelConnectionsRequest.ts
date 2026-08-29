// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  includeModels?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWwtY29ubmVjdGlvbjoxMA
   */
  nextToken?: string;
  /**
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @example
   * blur
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      includeModels: 'includeModels',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      protocol: 'protocol',
      providerType: 'providerType',
      searchType: 'searchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeModels: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      protocol: 'string',
      providerType: 'string',
      searchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

