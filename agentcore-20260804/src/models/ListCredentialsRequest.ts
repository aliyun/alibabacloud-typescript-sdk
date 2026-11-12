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
   * The keyword used to perform fuzzy matching on credential names.
   * 
   * @example
   * model
   */
  nameLike?: string;
  /**
   * @remarks
   * The cursor used to query the next page. Leave this parameter empty in the first call. In subsequent calls, specify the nextToken value returned in the previous response.
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

