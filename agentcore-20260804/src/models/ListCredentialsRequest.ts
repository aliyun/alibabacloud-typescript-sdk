// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by credential type. Currently, only apiKey is supported.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The maximum number of records per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Filters by credential name.
   * 
   * @example
   * credentialxxx
   */
  name?: string;
  /**
   * @remarks
   * The filter condition for fuzzy match by credential name.
   * 
   * @example
   * model
   */
  nameLike?: string;
  /**
   * @remarks
   * The pagination token for the next page. Do not specify this parameter for the first request. For subsequent requests, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'credentialType',
      maxResults: 'maxResults',
      name: 'name',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      maxResults: 'number',
      name: 'string',
      nameLike: 'string',
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

