// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Array of successfully uploaded document IDs
   */
  docIds?: string[];
  /**
   * @remarks
   * Document IDs that could not be uploaded because they already exist
   */
  existedIds?: string[];
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      existedIds: 'ExistedIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      existedIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    if(Array.isArray(this.existedIds)) {
      $dara.Model.validateArray(this.existedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Document information
   */
  data?: UploadDocResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
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
      data: UploadDocResponseBodyData,
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

