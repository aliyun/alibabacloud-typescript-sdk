// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyPageResultProjectList extends $dara.Model {
  /**
   * @example
   * 162112
   */
  bizUnitId?: number;
  /**
   * @example
   * 1121
   */
  dataSourceId?: number;
  /**
   * @example
   * ds1
   */
  dataSourceName?: string;
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 30012112
   */
  owner?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 1122
   */
  realtimeDataSourceId?: number;
  /**
   * @example
   * ds2
   */
  realtimeDataSourceName?: string;
  /**
   * @example
   * GENERAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      realtimeDataSourceId: 'RealtimeDataSourceId',
      realtimeDataSourceName: 'RealtimeDataSourceName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      dataSourceId: 'number',
      dataSourceName: 'string',
      description: 'string',
      displayName: 'string',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mode: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      realtimeDataSourceId: 'number',
      realtimeDataSourceName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPageResult extends $dara.Model {
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectList: 'ProjectList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectList: { 'type': 'array', 'itemType': ListProjectsResponseBodyPageResultProjectList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
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
  pageResult?: ListProjectsResponseBodyPageResult;
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
      pageResult: ListProjectsResponseBodyPageResult,
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

