// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndBindAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID, which is used to query the application or dissociate the image later.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The application version ID, which is used to locate a specified version of the application. This field is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The image ID, which is used to query or modify the image later.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The image version ID, which is used to query or manage a specified version of the image.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      imageId: 'ImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      imageId: 'string',
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

export class CreateAndBindAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is returned when the request fails. A successful response may not contain this field.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the operation.
   */
  data?: CreateAndBindAppResponseBodyData;
  /**
   * @remarks
   * The error or result message. This field describes the cause when the request fails. A successful response may not contain this field.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. Provide this value when you troubleshoot issues.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is processed successfully. A value of true indicates that the request is processed successfully. To determine whether an asynchronous task is completed, query the task status separately.
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
      data: CreateAndBindAppResponseBodyData,
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

