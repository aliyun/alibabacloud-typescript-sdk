// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplierInformationResponseBodyDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * mybucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Indicates whether the feature that delivers the execution results of Cloud Assistant O\\&M tasks to Object Storage Service (OSS) is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false (default): Disabled.
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The expiration period for objects in OSS, in days.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * path1/path2/
   */
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'OssBucketName',
      ossEnabled: 'OssEnabled',
      ossExpirationDays: 'OssExpirationDays',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossEnabled: 'boolean',
      ossExpirationDays: 'number',
      ossPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierInformationResponseBodySupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of the contact method.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The contact method.
   * 
   * @example
   * supplier@example.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplierInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace for the container image deployment.
   * 
   * @example
   * computenest
   */
  acrNamespace?: string;
  /**
   * @remarks
   * The computing resource configuration.
   */
  deliverySettings?: GetSupplierInformationResponseBodyDeliverySettings;
  /**
   * @remarks
   * Indicates whether to enable resellers. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableReseller?: boolean;
  /**
   * @remarks
   * The IP address for the operation.
   * 
   * @example
   * 10.xxx.xxx.xxx/101
   */
  operationIp?: string;
  /**
   * @remarks
   * Indicates whether a multi-factor authentication (MFA) device is used. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * true
   */
  operationMfaPresent?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The description of the service provider.
   * 
   * @example
   * Alibaba Cloud Compute Nest
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The icon of the service provider.
   * 
   * @example
   * http://example.aliyundoc.com/cover/34DB-4F4C-9373-003AA060****.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Company A
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://www.xxx.xxx.cn
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The contact information of the service provider.
   */
  supportContacts?: GetSupplierInformationResponseBodySupportContacts[];
  static names(): { [key: string]: string } {
    return {
      acrNamespace: 'AcrNamespace',
      deliverySettings: 'DeliverySettings',
      enableReseller: 'EnableReseller',
      operationIp: 'OperationIp',
      operationMfaPresent: 'OperationMfaPresent',
      requestId: 'RequestId',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      supportContacts: 'SupportContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrNamespace: 'string',
      deliverySettings: GetSupplierInformationResponseBodyDeliverySettings,
      enableReseller: 'boolean',
      operationIp: 'string',
      operationMfaPresent: 'boolean',
      requestId: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      supportContacts: { 'type': 'array', 'itemType': GetSupplierInformationResponseBodySupportContacts },
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    if(Array.isArray(this.supportContacts)) {
      $dara.Model.validateArray(this.supportContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

