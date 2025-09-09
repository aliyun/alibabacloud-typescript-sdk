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
   * Specifies whether to enable screencast delivery to Object Storage Service (OSS). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days for which the screencasts are saved.
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

export class UpdateSupplierInformationRequestSupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of  contact information
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The value of contact information
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
   * The delivery settings.
   */
  deliverySettings?: UpdateSupplierInformationRequestDeliverySettings;
  /**
   * @remarks
   * The Ip of operation.
   * 
   * @example
   * 192.xxx.xxx.xxx/16,192.xxx.xxx.xxx
   */
  operationIp?: string;
  /**
   * @remarks
   * The MFA of operation.
   * 
   * @example
   * true
   */
  operationMfaPresent?: boolean;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of service provider.
   * 
   * @example
   * Test supplier
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The Logo of service provider.
   * 
   * @example
   * http://example.aliyundoc.com/cover/34DB-4F4C-9373-003AA060****.png
   */
  supplierLogo?: string;
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
   * Contact information of the service provider
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

