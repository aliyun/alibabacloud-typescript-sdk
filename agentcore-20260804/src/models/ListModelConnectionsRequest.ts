// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the summary of associated models in each model connection. Default value: false.
   * 
   * @example
   * false
   */
  includeModels?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 0 to 100. Default value: 10. If this parameter is not specified or is set to 0, the default value is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the model connection. The name must be 1 to 128 characters in length and cannot contain whitespace characters.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Pass the token returned in the previous query for the current request. An empty response indicates that no more pages are available.
   * 
   * @example
   * bW9kZWwtbWFuYWdlbWVudC1vZmZzZXQ6bW9kZWwtY29ubmVjdGlvbjoxMA
   */
  nextToken?: string;
  /**
   * @remarks
   * The invocation protocol used to filter model connections.
   * 
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * The model provider type used to filter model connections.
   * 
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @remarks
   * The name matching mode. This parameter takes effect only when Name is specified. Valid values:
   * - accurate: exact match
   * - blur: fuzzy match
   * Default value: blur.
   * 
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

