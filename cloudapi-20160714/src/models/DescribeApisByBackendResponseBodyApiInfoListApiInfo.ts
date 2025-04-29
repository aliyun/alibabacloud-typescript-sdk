// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByBackendResponseBodyApiInfoListApiInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 20bcdc9453524b78a8beb1f6de21edb7
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testApi
   */
  apiName?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 15bcdc9453524b7gs8beb1f6de21edb7
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * testApiGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The request method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

