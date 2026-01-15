// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name (PicName) of the deleted image.
   * 
   * @example
   * 5555.jpg
   */
  picNames?: string[];
  static names(): { [key: string]: string } {
    return {
      picNames: 'PicNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.picNames)) {
      $dara.Model.validateArray(this.picNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the deleted images.
   */
  data?: DeleteImageResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0703956F-9BCC-48FA-99F7-96C0BF449C69
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DeleteImageResponseBodyData,
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

