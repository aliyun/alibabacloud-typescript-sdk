// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos } from "./DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos";


export class DescribeDtsEtlJobVersionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of ETL tasks.
   */
  dtsEtlJobVersionInfos?: DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message.
   * 
   * @example
   * present environment is not support,so skip
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code. This example indicates that the specified ETL task ID is invalid.
   * 
   * @example
   * InvalidJobId
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. This example indicates that the specified ETL task ID does not exist. In this case, the ETL task may have been deleted.
   * 
   * @example
   * The specified dts job id %s is not exists.
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
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned on the current page.
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
   * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. If the call failed, false is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dtsEtlJobVersionInfos: 'DtsEtlJobVersionInfos',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
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
      dtsEtlJobVersionInfos: { 'type': 'array', 'itemType': DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dtsEtlJobVersionInfos)) {
      $dara.Model.validateArray(this.dtsEtlJobVersionInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

