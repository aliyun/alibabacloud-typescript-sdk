// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return associated model summaries for each model connection. By default, model summaries are not returned.
   * 
   * @example
   * false
   */
  includeModels?: boolean;
  /**
   * @remarks
   * The number of records per page. Valid values: 0 to 100. If this parameter is not set or is set to 0, the default value 10 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model connection name. The name must be 1 to 128 non-whitespace characters in length.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Pass the token returned in the previous query. An empty response indicates that no more pages are available.
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
   * The name matching mode. Takes effect only when Name is set. Valid values: accurate (exact match), blur (fuzzy match). Default value: blur.
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

