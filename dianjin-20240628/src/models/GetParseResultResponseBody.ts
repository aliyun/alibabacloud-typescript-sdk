// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The provider type.
   * 
   * @example
   * null
   */
  providerType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b0a202e2-5031-4589-a6d7-39185f0d8d01
   */
  requestId?: string;
  /**
   * @remarks
   * The parsing result.
   * 
   * @example
   * {
   *           "Status": "Success",
   *           "Data": {},
   *           "Message": null,
   *           "TaskId": "docmind-20240601-123abc"
   *         }
   */
  result?: { [key: string]: any };
  /**
   * @remarks
   * The parsing result returned as a URL. You can download it directly. Note: Only PDF, DOC, DOCX, PPT, and PPTX file types have parsing results.
   * 
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/library/3mjeoywx7z/1826661605606129665.json
   */
  resultUrl?: string;
  /**
   * @remarks
   * The document parsing status.
   * 
   * @example
   * WaitRefresh
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'fileType',
      providerType: 'providerType',
      requestId: 'requestId',
      result: 'result',
      resultUrl: 'resultUrl',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      providerType: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetParseResultResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0abb793617204049360065953ec6dd
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
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetParseResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

