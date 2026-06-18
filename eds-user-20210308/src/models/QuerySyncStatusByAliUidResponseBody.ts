// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncStatusByAliUidResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 131239236086****
   */
  aliUid?: number;
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * cdrs948144195608****
   */
  corpId?: string;
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2020-06-30 07:50:42
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The updated at time.
   * 
   * @example
   * 2022-03-02 14:27:39
   */
  gmtModified?: string;
  /**
   * @remarks
   * Auto increment ID.
   * 
   * @example
   * 18500
   */
  id?: number;
  /**
   * @remarks
   * The latest start time.
   * 
   * @example
   * 2022-03-02 14:31:39
   */
  latestBeginTime?: string;
  /**
   * @remarks
   * The latest end time, regardless of whether the operation succeeded or failed.
   * 
   * @example
   * 2022-03-02 16:13:12
   */
  latestEndTime?: string;
  /**
   * @remarks
   * The latest success time.
   * 
   * @example
   * 2022-03-02 18:24:01
   */
  latestSuccessTime?: string;
  /**
   * @remarks
   * The user synchronization status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      corpId: 'CorpId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      latestBeginTime: 'LatestBeginTime',
      latestEndTime: 'LatestEndTime',
      latestSuccessTime: 'LatestSuccessTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      corpId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      latestBeginTime: 'string',
      latestEndTime: 'string',
      latestSuccessTime: 'string',
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

export class QuerySyncStatusByAliUidResponseBody extends $dara.Model {
  /**
   * @remarks
   * System status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QuerySyncStatusByAliUidResponseBodyData;
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
   * The error message returned when the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySyncStatusByAliUidResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

