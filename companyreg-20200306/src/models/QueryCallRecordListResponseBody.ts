// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallRecordListResponseBodyData extends $dara.Model {
  contactDisposition?: string;
  /**
   * @example
   * 40140
   */
  duration?: number;
  /**
   * @example
   * UPLOADED/SCRIPT/74974566-2b69-4389-9bf9-5d7b432f06ad/fa92ce53-6b5f-4b3d-807c-a46417c08f66_a4cc3a16-e365-42cb-87d8-7776f8b110a1.json
   */
  signatureUrl?: string;
  /**
   * @example
   * 2025-06-07T02:08:00Z
   */
  startTime?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      contactDisposition: 'ContactDisposition',
      duration: 'Duration',
      signatureUrl: 'SignatureUrl',
      startTime: 'StartTime',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDisposition: 'string',
      duration: 'number',
      signatureUrl: 'string',
      startTime: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallRecordListResponseBody extends $dara.Model {
  data?: QueryCallRecordListResponseBodyData[];
  /**
   * @example
   * NoPermission
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * 6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryCallRecordListResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
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

