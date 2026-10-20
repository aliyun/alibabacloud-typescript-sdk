// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the context store used for filtering. Exact match is supported. If this parameter is not specified, no filtering is performed.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store used for filtering, such as experience or memory. If this parameter is not specified, no filtering is performed.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The maximum number of context stores to return in the current request. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. To retrieve the next page, pass the nextToken value from the previous response. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The memory data source type used for filtering, such as manual, trajectory, or dataset. If this parameter is not specified, no filtering is performed.
   * 
   * @example
   * trajectory
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextStoreName: 'string',
      contextType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

