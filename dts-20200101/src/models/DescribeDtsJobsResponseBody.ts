// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobsResponseBodyDtsJobList } from "./DescribeDtsJobsResponseBodyDtsJobList";
import { DescribeDtsJobsResponseBodyEtlDemoList } from "./DescribeDtsJobsResponseBodyEtlDemoList";


export class DescribeDtsJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Data Transmission Service (DTS) tasks and the details of each task.
   */
  dtsJobList?: DescribeDtsJobsResponseBodyDtsJobList[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be removed in the future.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. The value of this parameter is used to replace the **%s** variable in the value of the **ErrMessage** parameter.
   * 
   * >  For example, if the value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the value of the **DynamicMessage** parameter is **Type**, the specified **Type** parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The DTS tasks and the details of each task.
   */
  etlDemoList?: DescribeDtsJobsResponseBodyEtlDemoList[];
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
   * The page number of the returned page.
   * 
   * @example
   * 2
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
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of DTS tasks that meet the query condition.
   * 
   * @example
   * 15
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dtsJobList: 'DtsJobList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      etlDemoList: 'EtlDemoList',
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
      dtsJobList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      etlDemoList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoList },
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dtsJobList)) {
      $dara.Model.validateArray(this.dtsJobList);
    }
    if(Array.isArray(this.etlDemoList)) {
      $dara.Model.validateArray(this.etlDemoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

