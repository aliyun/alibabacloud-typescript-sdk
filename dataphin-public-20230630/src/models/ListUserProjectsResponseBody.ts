// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserProjectsResponseBodyPageResultProjectList extends $dara.Model {
  /**
   * @remarks
   * The ID of the business unit.
   * 
   * @example
   * 162112
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the compute source.
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
   * The ID of the project.
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
   * The name of the project.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The owner of the project.
   * 
   * @example
   * 30012112
   */
  owner?: string;
  /**
   * @remarks
   * The owner of the project.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the real-time compute source.
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

export class ListUserProjectsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of projects that the user participates in.
   */
  projectList?: ListUserProjectsResponseBodyPageResultProjectList[];
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
      projectList: { 'type': 'array', 'itemType': ListUserProjectsResponseBodyPageResultProjectList },
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

export class ListUserProjectsResponseBody extends $dara.Model {
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
   * The paged query result.
   */
  pageResult?: ListUserProjectsResponseBodyPageResult;
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
      pageResult: ListUserProjectsResponseBodyPageResult,
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

