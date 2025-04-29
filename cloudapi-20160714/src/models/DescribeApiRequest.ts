// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 8afff6c8c4c6447abb035812e4d66b65
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 123
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

