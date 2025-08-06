// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallRecordListResponseBodyData extends $dara.Model {
  duration?: number;
  signatureUrl?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      signatureUrl: 'SignatureUrl',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      signatureUrl: 'string',
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

export class QueryCallRecordListResponseBody extends $dara.Model {
  data?: QueryCallRecordListResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
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

