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
   * The compute source name.
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
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the project.
   * 
   * @example
   * Test
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
   * The creation time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time. Format: yyyy-MM-dd HH:mm:ss.
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
   * Zhang San
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
   * The real-time compute source name.
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
   * The paginated project list.
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
   * The backend exception details.
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
   * Indicates whether the request is successful.
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

