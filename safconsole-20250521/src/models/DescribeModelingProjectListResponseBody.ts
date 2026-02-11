// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelingProjectListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * End time of the secure modeling project.
   * 
   * @example
   * 2025-12-29T02:15:10Z
   */
  endTime?: number;
  /**
   * @remarks
   * Secure environment status.
   * 
   * @example
   * PREPARING
   */
  envStatus?: string;
  /**
   * @remarks
   * Login account.
   * 
   * @example
   * xxx
   */
  loginAccount?: string;
  /**
   * @remarks
   * Modeling project status.
   * 
   * @example
   * PREPARING
   */
  modelingStatus?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 01
   */
  projectId?: string;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * project
   */
  projectName?: string;
  /**
   * @remarks
   * Start time of the secure modeling project.
   * 
   * @example
   * 2025-03-23T01:20:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      envStatus: 'EnvStatus',
      loginAccount: 'LoginAccount',
      modelingStatus: 'ModelingStatus',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      envStatus: 'string',
      loginAccount: 'string',
      modelingStatus: 'string',
      projectId: 'string',
      projectName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelingProjectListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  resultObject?: DescribeModelingProjectListResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeModelingProjectListResponseBodyResultObject },
      success: 'boolean',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

