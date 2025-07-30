// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncStatusByAliUidResponseBodyData extends $dara.Model {
  /**
   * @example
   * 131239236086****
   */
  aliUid?: number;
  /**
   * @example
   * cdrs948144195608****
   */
  corpId?: string;
  /**
   * @example
   * 2020-06-30 07:50:42
   */
  gmtCreated?: string;
  /**
   * @example
   * 2022-03-02 14:27:39
   */
  gmtModified?: string;
  /**
   * @example
   * 18500
   */
  id?: number;
  /**
   * @example
   * 2022-03-02 14:31:39
   */
  latestBeginTime?: string;
  /**
   * @example
   * 2022-03-02 16:13:12
   */
  latestEndTime?: string;
  /**
   * @example
   * 2022-03-02 18:24:01
   */
  latestSuccessTime?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: QuerySyncStatusByAliUidResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

