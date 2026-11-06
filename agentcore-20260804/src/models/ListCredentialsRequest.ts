// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The credential type used for filtering. Valid values: apiKey and mcpHeader.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. If this parameter is not specified, 10 records are returned by default.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The credential name used for filtering.
   * 
   * @example
   * credentialxxx
   */
  name?: string;
  /**
   * @remarks
   * The filter condition for fuzzy matching by credential name.
   * 
   * @example
   * model
   */
  nameLike?: string;
  /**
   * @remarks
   * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned in the previous response.
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

