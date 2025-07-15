// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBookResponseBodyData extends $dara.Model {
  docIds?: string[];
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

export class UploadBookResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: UploadBookResponseBodyData;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
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
      data: UploadBookResponseBodyData,
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

