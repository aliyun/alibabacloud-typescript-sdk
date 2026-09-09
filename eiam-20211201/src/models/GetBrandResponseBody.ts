// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBrandResponseBodyBrand extends $dara.Model {
  /**
   * @remarks
   * The brand ID.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * The brand name.
   * 
   * @example
   * Custom Brand
   */
  brandName?: string;
  /**
   * @remarks
   * The brand type.
   * 
   * @example
   * user_custom
   */
  brandType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The SMS gateway ID.
   * 
   * @example
   * smsgw_01l9f0kunrrjhxxx
   */
  smsGatewayId?: string;
  /**
   * @remarks
   * The brand status.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The enabling status of system notifications.
   * 
   * @example
   * enabled
   */
  systemNotificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      brandName: 'BrandName',
      brandType: 'BrandType',
      instanceId: 'InstanceId',
      smsGatewayId: 'SmsGatewayId',
      status: 'Status',
      systemNotificationStatus: 'SystemNotificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
      brandName: 'string',
      brandType: 'string',
      instanceId: 'string',
      smsGatewayId: 'string',
      status: 'string',
      systemNotificationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBrandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The brand.
   */
  brand?: GetBrandResponseBodyBrand;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: GetBrandResponseBodyBrand,
      requestId: 'string',
    };
  }

  validate() {
    if(this.brand && typeof (this.brand as any).validate === 'function') {
      (this.brand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

