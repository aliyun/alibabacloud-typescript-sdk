// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuilderImageByParentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the image, which is used to query or modify the image later.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the task, which can be used to call GetTask to query the task status.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the image version, which is used to query or operate on the specified version of the image.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      taskId: 'TaskId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      taskId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuilderImageByParentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * ExceedBuilderQuota
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the operation.
   */
  data?: BuilderImageByParentResponseBodyData;
  /**
   * @remarks
   * The error or result message. This parameter describes the cause when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * The maximum number of builders is reached.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To check whether the asynchronous task is complete, you must query the task status separately.
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
      data: BuilderImageByParentResponseBodyData,
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

