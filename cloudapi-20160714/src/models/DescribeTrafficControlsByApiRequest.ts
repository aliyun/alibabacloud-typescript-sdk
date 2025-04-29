// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficControlsByApiRequest extends $dara.Model {
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
   * The ID of the group to which the API to be queried belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * 7c51b234-48d3-44e1-9b36-e2ddccc738e3
   */
  securityToken?: string;
  /**
   * @remarks
   * The runtime environment of the API. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * This parameter is required.
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

