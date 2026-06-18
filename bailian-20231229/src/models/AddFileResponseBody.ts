// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the file. Save this ID for use in subsequent API calls involving this file.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_xxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The parser that was used for the file. A possible value is:
   * 
   * - `DASHSCOPE_DOCMIND`: Alibaba Cloud Document Intelligence
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      parser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: AddFileResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
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

