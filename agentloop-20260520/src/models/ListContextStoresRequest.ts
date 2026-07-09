// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresRequest extends $dara.Model {
  /**
   * @remarks
   * Filters context stores by name. Exact match is supported. If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * Filters context stores by type, such as experience or memory. If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The maximum number of context stores to return. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the nextToken value returned in the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextStoreName: 'string',
      contextType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

