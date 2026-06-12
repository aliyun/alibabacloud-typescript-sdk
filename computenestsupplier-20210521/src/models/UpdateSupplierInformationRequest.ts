// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSupplierInformationRequestDeliverySettings extends $dara.Model {
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
   * Specifies whether to deliver the execution results of Cloud Assistant O\\&M tasks to Object Storage Service (OSS). Valid values:
   * 
   * - true: Enabled.
   * 
   * - false (default): Disabled.
   * 
   * @example
   * false
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The retention period for screen recordings, in days.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The path in OSS.
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

export class UpdateSupplierInformationRequestSupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of contact method.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The contact information.
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

export class UpdateSupplierInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The custom settings.
   */
  deliverySettings?: UpdateSupplierInformationRequestDeliverySettings;
  /**
   * @remarks
   * The IP address segments for managed O\\&M access.
   * 
   * @example
   * 192.xxx.xxx.xxx/16,192.xxx.xxx.xxx
   */
  operationIp?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-factor authentication (MFA). The default value is true. Valid values:
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the supplier.
   * 
   * @example
   * Alibaba Cloud Compute Nest
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The icon of the supplier.
   * 
   * @example
   * http://example.aliyundoc.com/cover/34DB-4F4C-9373-003AA060****.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The URL of the supplier.
   * 
   * @example
   * http://www.xxx.xxx.cn
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The contact information of the supplier.
   */
  supportContacts?: UpdateSupplierInformationRequestSupportContacts[];
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      operationIp: 'OperationIp',
      operationMfaPresent: 'OperationMfaPresent',
      regionId: 'RegionId',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierUrl: 'SupplierUrl',
      supportContacts: 'SupportContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: UpdateSupplierInformationRequestDeliverySettings,
      operationIp: 'string',
      operationMfaPresent: 'boolean',
      regionId: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierUrl: 'string',
      supportContacts: { 'type': 'array', 'itemType': UpdateSupplierInformationRequestSupportContacts },
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

