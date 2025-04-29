// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiDocRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6
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
  /**
   * @remarks
   * The environment name. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * If this parameter is not specified, the default value RELEASE is used.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

