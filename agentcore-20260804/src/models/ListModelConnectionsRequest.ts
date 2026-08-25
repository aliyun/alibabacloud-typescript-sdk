// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      includeModels: 'includeModels',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      protocol: 'protocol',
      providerType: 'providerType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

