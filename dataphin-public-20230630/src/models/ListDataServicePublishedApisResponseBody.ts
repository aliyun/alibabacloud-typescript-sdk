// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList extends $dara.Model {
  /**
   * @example
   * 10211
   */
  appId?: number;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 1201
   */
  appKey?: number;
  /**
   * @example
   * test
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appKey: 'number',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyPageResultApiList extends $dara.Model {
  /**
   * @example
   * 1022
   */
  apiId?: number;
  /**
   * @example
   * test
   */
  apiName?: string;
  /**
   * @example
   * 1
   */
  appCount?: number;
  appInfoList?: ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList[];
  /**
   * @example
   * 1
   */
  applyStatus?: number;
  /**
   * @example
   * 21
   */
  callCount?: number;
  /**
   * @example
   * 1
   */
  createType?: number;
  /**
   * @example
   * 0 0 0/1 * * *
   */
  customUpdateRate?: string;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  deployTime?: string;
  /**
   * @example
   * test xx
   */
  description?: string;
  /**
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @example
   * 102131
   */
  groupId?: number;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 1022
   */
  logicUnitNo?: number;
  /**
   * @example
   * 1
   */
  mode?: number;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * 张三
   */
  ownerUserName?: string;
  /**
   * @example
   * 102101
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCount: 'AppCount',
      appInfoList: 'AppInfoList',
      applyStatus: 'ApplyStatus',
      callCount: 'CallCount',
      createType: 'CreateType',
      customUpdateRate: 'CustomUpdateRate',
      deployTime: 'DeployTime',
      description: 'Description',
      executeMode: 'ExecuteMode',
      groupId: 'GroupId',
      groupName: 'GroupName',
      logicUnitNo: 'LogicUnitNo',
      mode: 'Mode',
      owner: 'Owner',
      ownerUserName: 'OwnerUserName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      updateRate: 'UpdateRate',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appCount: 'number',
      appInfoList: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList },
      applyStatus: 'number',
      callCount: 'number',
      createType: 'number',
      customUpdateRate: 'string',
      deployTime: 'string',
      description: 'string',
      executeMode: 'number',
      groupId: 'number',
      groupName: 'string',
      logicUnitNo: 'number',
      mode: 'number',
      owner: 'string',
      ownerUserName: 'string',
      projectId: 'number',
      projectName: 'string',
      updateRate: 'number',
      updateTime: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyPageResult extends $dara.Model {
  apiList?: ListDataServicePublishedApisResponseBodyPageResultApiList[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyPageResultApiList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiList)) {
      $dara.Model.validateArray(this.apiList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListDataServicePublishedApisResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataServicePublishedApisResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

