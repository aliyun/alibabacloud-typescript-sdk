// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallInTransferRecordResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The called number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCalled?: string;
  /**
   * @remarks
   * The calling number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCaller?: string;
  /**
   * @remarks
   * The time when the call was initiated.
   * 
   * @example
   * 2020-10-03 10:21:21
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The recording URL.
   * 
   * @example
   * http://alicom-fc-media.cn-hangzhou.oss.aliyun-inc.com/dayuBizVoiceMrg/4238c230-9e74-41be-90b8-2fbe7684****.wav?Expires=1627538265&OSSAccessKeyId=bypFNbGJVk73****&Signature=****mUqkPqIQ%3D
   */
  recordUrl?: string;
  /**
   * @remarks
   * The phone number to which the call was transferred.
   * 
   * @example
   * 151****0000
   */
  transferCalled?: string;
  /**
   * @remarks
   * The calling number that transferred the call.
   * 
   * @example
   * 151****0000
   */
  transferCaller?: string;
  static names(): { [key: string]: string } {
    return {
      callInCalled: 'CallInCalled',
      callInCaller: 'CallInCaller',
      gmtCreate: 'GmtCreate',
      recordUrl: 'RecordUrl',
      transferCalled: 'TransferCalled',
      transferCaller: 'TransferCaller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCalled: 'string',
      callInCaller: 'string',
      gmtCreate: 'number',
      recordUrl: 'string',
      transferCalled: 'string',
      transferCaller: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  total?: number;
  /**
   * @remarks
   * The call transfer records.
   */
  values?: QueryCallInTransferRecordResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': QueryCallInTransferRecordResponseBodyDataValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryCallInTransferRecordResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCallInTransferRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
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

