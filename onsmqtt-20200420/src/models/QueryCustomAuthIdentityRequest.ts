// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device. You can specify this parameter when the identity type is CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the current query. You can pass this token as a parameter in the next call to continue paginating. If this is the first call or the last page is returned, the value is an empty string.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTM4MTcxODk3NDQzMjQ1OSIsImV2ZW50SWQiOiJGMkUxOUE3QS1FM0Q0LTVCOEYtQkU4OS1CNkMyM0RBM0UyRjIiLCJsb2dJZCI6IjY2LTEzODE3MTg5NzQ0MzI0NTkiLCJydyI6IlciLCJ0aW1lIjoxNjc4MzI2MTI1MDAwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to query. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

