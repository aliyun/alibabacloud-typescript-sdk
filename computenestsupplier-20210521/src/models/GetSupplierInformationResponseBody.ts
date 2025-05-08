// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSupplierInformationResponseBodyDeliverySettings } from "./GetSupplierInformationResponseBodyDeliverySettings";
import { GetSupplierInformationResponseBodySupportContacts } from "./GetSupplierInformationResponseBodySupportContacts";


export class GetSupplierInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Acr container namespace
   * 
   * @example
   * computenest
   */
  acrNamespace?: string;
  /**
   * @remarks
   * The delivery settings.
   */
  deliverySettings?: GetSupplierInformationResponseBodyDeliverySettings;
  /**
   * @remarks
   * Whether to enable reseller
   * 
   * @example
   * true
   */
  enableReseller?: boolean;
  /**
   * @remarks
   * The Ip of the operation.
   * 
   * @example
   * 10.xxx.xxx.xxx/101
   */
  operationIp?: string;
  /**
   * @remarks
   * The MFA of the operation.
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
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
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
   * Contact information of the service provider
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

