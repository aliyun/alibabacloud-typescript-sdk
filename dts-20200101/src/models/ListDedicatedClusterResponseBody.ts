// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDedicatedClusterResponseBodyDedicatedClusterStatusList } from "./ListDedicatedClusterResponseBodyDedicatedClusterStatusList";


export class ListDedicatedClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statuses of all clusters.
   */
  dedicatedClusterStatusList?: ListDedicatedClusterResponseBodyDedicatedClusterStatusList;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The page number of the returned page. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of clusters that meet the query condition.
   * 
   * @example
   * 15
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatusList: 'DedicatedClusterStatusList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatusList: ListDedicatedClusterResponseBodyDedicatedClusterStatusList,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.dedicatedClusterStatusList && typeof (this.dedicatedClusterStatusList as any).validate === 'function') {
      (this.dedicatedClusterStatusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

