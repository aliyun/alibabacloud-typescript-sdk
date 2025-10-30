// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageByInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS image.
   * 
   * @example
   * imgc-07hnjj5fp****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image creation task.
   * 
   * @example
   * tid-0abxi0lbih******
   */
  taskId?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * iv-0abxi0lbi*****
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

export class CreateImageByInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateImageByInstanceResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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
      code: 'string',
      data: CreateImageByInstanceResponseBodyData,
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

