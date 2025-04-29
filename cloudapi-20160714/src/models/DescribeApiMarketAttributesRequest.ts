// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiMarketAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1f9b5e9ba80943099cac52e040b7e160
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * b693252f3f19445e9a01dac177c4454c
   */
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

