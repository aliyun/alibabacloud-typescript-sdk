// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParametersByPathRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the encryption parameter. The path must be 1 to 200 characters in length. For example, if the name of an encryption parameter is /secretParameter/mySecretParameter, the path of the encryption parameter is /secretParameter.
   * 
   * This parameter is required.
   * 
   * @example
   * /secretParameter
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to recursively query encryption parameters from all levels of directories in the specified path. Valid values: true and false. For example, if you want to query the /secretParameter/mySecretParameter and /secretParameter/secretParameter 1/mySecretParameter parameters, the valid values specify the parameters to be returned.
   * 
   * *   true: returns both of the /secretParameter/mySecretParameter and /secretParameter/secretParameter1/mySecretParameter parameters.
   * *   false: returns only the /secretParameter/mySecretParameter parameter.
   * 
   * @example
   * false
   */
  recursive?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
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

