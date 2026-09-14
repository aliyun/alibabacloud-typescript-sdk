// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file name, including the file name extension.
   * 
   * @example
   * test_waveform.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the call recording file.
   */
  fileUrl?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * job-0b84bf6f-73dc-4462-bd8f-916e3a34c419
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRecordingResponseBodyData;
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
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

