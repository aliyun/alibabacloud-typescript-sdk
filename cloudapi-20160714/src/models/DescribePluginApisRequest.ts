// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * c6b0dd188b0e4e408e12f926********
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * API
   */
  apiName?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * API description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 231a4bb81ee94da785733c29********
   */
  groupId?: string;
  /**
   * @remarks
   * The request HTTP method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * Default value:10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /sendVerifyCode
   */
  path?: string;
  /**
   * @remarks
   * The ID of the gateway plug-in.
   * 
   * This parameter is required.
   * 
   * @example
   * bf6583efcef44c51adb00c4e********
   */
  pluginId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      method: 'Method',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      pluginId: 'PluginId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      method: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      pluginId: 'string',
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

