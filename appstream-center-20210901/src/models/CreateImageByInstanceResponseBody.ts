// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageByInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The WUYING image ID.
   * 
   * @example
   * imgc-07hnjj5fp****
   */
  imageId?: string;
  /**
   * @remarks
   * The task ID for creating the image.
   * 
   * @example
   * tid-0abxi0lbih******
   */
  taskId?: string;
  /**
   * @remarks
   * The image version.
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
   * The error code returned if the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned object.
   */
  data?: CreateImageByInstanceResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * Indicates whether the request was successful. A value of true indicates success. A value of false indicates failure.
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

