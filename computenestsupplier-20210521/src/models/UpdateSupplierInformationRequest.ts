// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSupplierInformationRequestDeliverySettings } from "./UpdateSupplierInformationRequestDeliverySettings";
import { UpdateSupplierInformationRequestSupportContacts } from "./UpdateSupplierInformationRequestSupportContacts";


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

