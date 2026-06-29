// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyPageResultProjectList extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 162112
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The compute source ID.
   * 
   * @example
   * 1121
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The name of the compute source.
   * 
   * @example
   * ds1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The display name of the project.
   * 
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The time when the project was created, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the project was last modified, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * The project mode.
   * 
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 30012112
   */
  owner?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The real-time compute source ID.
   * 
   * @example
   * 1122
   */
  realtimeDataSourceId?: number;
  /**
   * @remarks
   * The name of the real-time compute source.
   * 
   * @example
   * ds2
   */
  realtimeDataSourceName?: string;
  /**
   * @remarks
   * The project type.
   * 
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
  /**
   * @remarks
   * The paginated list of projects.
   */
  projectList?: ListProjectsResponseBodyPageResultProjectList[];
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListProjectsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

