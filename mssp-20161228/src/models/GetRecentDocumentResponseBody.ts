// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecentDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 360491
   */
  id?: number;
  /**
   * @remarks
   * Document name
   * 
   * @example
   * 文档名称测试
   */
  name?: string;
  /**
   * @remarks
   * Upload time.
   * 
   * @example
   * 2023-03-20 14:30:38
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecentDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetRecentDocumentResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4916FA8D-F294-518D-B373-8B59D63CAB19
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRecentDocumentResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
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

