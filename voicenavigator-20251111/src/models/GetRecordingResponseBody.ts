// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 61f7f225-3a2e-4b6e-8a1d-888f1862590f.wav
   */
  fileName?: string;
  /**
   * @example
   * https://bgc-us-east.oss-accelerate.aliyuncs.com/intellidocs/2025-08-27/bc84ce11-f110-436d-af70-382ce7c5690a.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * f814f3ae-b2a7-44fb-883c-771221274673
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetRecordingResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F132DDBA-66C4-5BD3-BF7E-9642FE877158
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRecordingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

