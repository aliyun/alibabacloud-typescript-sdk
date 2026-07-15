// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemovalProResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the result image. This parameter is returned in synchronous mode.
   * 
   * @example
   * https://aib-image.oss-ap-southeast-1.aliyuncs.com/ai_desc%2F250cc947-9cd5-4df0-9c23-44eba5d0dfc30.jpg?OSSAccessKeyId=LTAI5tSEGjGp5wixZgHLc3bV&Expires=4999655814&Signature=shvGNDmkyv9MLTw4%2BOxYglJCpAE%3D
   */
  imageUrl?: string;
  /**
   * @remarks
   * The asynchronous task ID. This parameter is returned in asynchronous mode and is used to query the task result.
   * 
   * @example
   * ed9d8504-6141-9fbb-8345-4fa36433483f
   */
  taskId?: string;
  /**
   * @remarks
   * The usage details. This parameter is returned in synchronous mode.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageRemovalProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The intelligent removal Pro result.
   */
  data?: ImageRemovalProResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      code: 'string',
      data: ImageRemovalProResponseBodyData,
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

