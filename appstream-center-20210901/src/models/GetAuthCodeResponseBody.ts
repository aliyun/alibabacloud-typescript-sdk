// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthCodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The network access type supported by the connection resource.
   * 
   * - **INTERNET**: Supports Internet access.
   * - **VPC**: Supports virtual private cloud (VPC) access.
   * - **ANY**: Supports both Internet and VPC access.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The application ID, which is used for subsequent application queries or unbinding the image.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID of the creation or validation resource. It is used together with the user and application information in this response during connection.
   * 
   * @example
   * aig-bp1example****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application version ID, which is used to locate a specific version of the application. This field is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The authorization code used to connect to the creation or validation resource. **The validity period is 180 seconds (3 minutes) from the time of issuance. Use it promptly after obtaining it.** Use it together with the user, delivery group, and application information in the same response, and keep it confidential as a connection credential.
   * 
   * Do not reuse the authorization code after it is redeemed. If it has been used or expired, call this operation again to obtain a new one.
   * 
   * @example
   * e4e169bea1cc48e8afac53**********
   */
  authCode?: string;
  /**
   * @remarks
   * The purpose type of the connection resource.
   * 
   * - **ImageBuilder**: Image or application creation resource.
   * - **ImageValidate**: Image or application validation resource.
   * 
   * @example
   * ImageBuilder
   */
  productType?: string;
  /**
   * @remarks
   * The region ID in this response.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID used when connecting to the creation or validation environment. Use the value returned in this response.
   * 
   * @example
   * __vhd_builder__
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appVersionId: 'AppVersionId',
      authCode: 'AuthCode',
      productType: 'ProductType',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appVersionId: 'string',
      authCode: 'string',
      productType: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. It is returned when the request fails. A success response may not contain this field.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the operation.
   */
  data?: GetAuthCodeResponseBodyData;
  /**
   * @remarks
   * The error or result message. It describes the cause when the request fails. A success response may not contain this field.
   * 
   * @example
   * Internal error.
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
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To check whether an asynchronous task is completed, you must query the task status separately.
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
      data: GetAuthCodeResponseBodyData,
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

