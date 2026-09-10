// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBwmMigrationSubmitInstanceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the conversion failure.
   * 
   * @example
   * None
   */
  detail?: string;
  /**
   * @remarks
   * The conversion execution time.
   * 
   * @example
   * 2023-01-01 00:00:00
   */
  gmtConvert?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instance-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The time when the source metadata was last updated.
   * 
   * @example
   * 2023-01-01 00:00:00
   */
  srcMetaGmtUpdate?: string;
  /**
   * @remarks
   * The scheduling information of the source.
   * 
   * @example
   * source-info
   */
  srcMetaInfo?: string;
  /**
   * @remarks
   * The execution status of the instance. Valid values:
   * - NOT_START: Not started.
   * - READY: Pending execution.
   * - RUNNING: Running.
   * - ALL_SUCCESS: All succeeded.
   * - PARTIAL_SUCCESS: Partially succeeded.
   * - FAILURE: Failed.
   * - MANUAL: Manually uploaded.
   * 
   * If the status code cannot be recognized, the value defaults to NOT_START.
   * 
   * @example
   * NOT_START
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      gmtConvert: 'gmtConvert',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      srcMetaGmtUpdate: 'srcMetaGmtUpdate',
      srcMetaInfo: 'srcMetaInfo',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      gmtConvert: 'string',
      instanceId: 'string',
      instanceName: 'string',
      srcMetaGmtUpdate: 'string',
      srcMetaInfo: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBwmMigrationSubmitInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetBwmMigrationSubmitInstanceListResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the result is empty.
   */
  empty?: boolean;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * Indicates whether the result is not empty.
   */
  notEmpty?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, use errCode and errMessage to troubleshoot the issue.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      empty: 'empty',
      errCode: 'errCode',
      errMessage: 'errMessage',
      notEmpty: 'notEmpty',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      totalPages: 'totalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBwmMigrationSubmitInstanceListResponseBodyData },
      empty: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      notEmpty: 'boolean',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

