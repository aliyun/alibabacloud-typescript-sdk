// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretParameterVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. The decrypted parameter value is returned only if this parameter is set to true. Otherwise, null is returned.
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      withDecryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

