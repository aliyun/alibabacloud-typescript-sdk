// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTaskResultResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The `ObjectKey` of the image in OSS. You can use this value in subsequent API calls.
   * 
   * @example
   * deepsign/123456789/image-generation/abc12345-def6-7890-abcd-ef1234567890.png
   */
  objectKey?: string;
  /**
   * @remarks
   * The pre-signed download URL of the image. The URL is valid for 1 hour.
   * 
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com/deepsign/123456789/image-generation/abc12345.png?Expires=1718700000&OSSAccessKeyId=...
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      objectKey: 'ObjectKey',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectKey: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. The value `OK` is returned if the request succeeds.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when the task status is `failed`.
   * 
   * @example
   * Instance access forbidden.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. The value `200` is returned if the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of generated images. This parameter is returned only when `Status` is `succeeded`.
   */
  images?: GetImageTaskResultResponseBodyImages[];
  /**
   * @remarks
   * The additional information. The value `success` is returned if the request succeeds. An error message is returned if the task fails. This parameter is returned only when `Status` is `failed`.
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
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values: `pending` (waiting), `running` (in progress), `succeeded` (completed), `failed` (failed).
   * 
   * @example
   * succeeded
   */
  status?: string;
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
   * The task ID.
   * 
   * @example
   * f47ac10b-58cc-4372-a567-0e02b2c3d479
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      images: 'Images',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      images: { 'type': 'array', 'itemType': GetImageTaskResultResponseBodyImages },
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

