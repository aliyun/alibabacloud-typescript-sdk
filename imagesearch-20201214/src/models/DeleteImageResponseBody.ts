// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deleted PicName.
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
   * The error code. Valid values:
   * - 0: success.
   * - Non-zero value: failure.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The deletion result.
   */
  data?: DeleteImageResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0703956F-9BCC-48FA-99F7-96C0BF449C69
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

