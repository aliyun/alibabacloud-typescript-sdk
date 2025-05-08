// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupplierRegistrationsResponseBodySupplierRegistrations extends $dara.Model {
  /**
   * @remarks
   * The comment of this registration.
   * 
   * @example
   * empty
   */
  comment?: string;
  /**
   * @remarks
   * Contact email
   * 
   * @example
   * test@163.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * Contact number
   * 
   * @example
   * 135xxxxxxxx
   */
  contactNumber?: string;
  /**
   * @remarks
   * Contact person
   * 
   * @example
   * Mike
   */
  contactPerson?: string;
  /**
   * @remarks
   * Contact person tiltle.
   * 
   * @example
   * CTO
   */
  contactPersonTitle?: string;
  /**
   * @remarks
   * Whether to enable the resell mode.
   * 
   * @example
   * false
   */
  enableResellerMode?: boolean;
  /**
   * @remarks
   * Annual product revenue
   * 
   * @example
   * empty
   */
  productAnnualRevenue?: string;
  /**
   * @remarks
   * The business of product.
   * 
   * @example
   * AI
   */
  productBusiness?: string;
  /**
   * @remarks
   * Product delivery type，Valid values:
   * 
   * SaaS
   * License
   * API
   * DesktopSoftware
   * Others
   * 
   * @example
   * SaaS
   */
  productDeliveryTypes?: string;
  /**
   * @remarks
   * The publish time of product.
   * 
   * @example
   * 2024.10.24
   */
  productPublishTime?: string;
  /**
   * @remarks
   * Product sell type, Valid values:
   * 
   * - Direct
   * - Channel
   * 
   * @example
   * Direct
   */
  productSellTypes?: string;
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-xxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The description of resell business.
   * 
   * @example
   * empty
   */
  resellBusinessDesc?: string;
  /**
   * @remarks
   * The deployment state of the registration. Valid values:
   * 
   * - Submitted
   * - Approved
   * - Rejected
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The submit time of this registration.
   * 
   * @example
   * 2025-01-22 09:47:58
   */
  submitTime?: string;
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
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/xxx/service-xxx/xxx.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Aliibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The english name of the service provider.
   * 
   * @example
   * Alibaba Cloud ComputeNest
   */
  supplierNameEn?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1256xxx23434
   */
  supplierUid?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * https://www.guangbao-uni.com
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contactEmail: 'ContactEmail',
      contactNumber: 'ContactNumber',
      contactPerson: 'ContactPerson',
      contactPersonTitle: 'ContactPersonTitle',
      enableResellerMode: 'EnableResellerMode',
      productAnnualRevenue: 'ProductAnnualRevenue',
      productBusiness: 'ProductBusiness',
      productDeliveryTypes: 'ProductDeliveryTypes',
      productPublishTime: 'ProductPublishTime',
      productSellTypes: 'ProductSellTypes',
      registrationId: 'RegistrationId',
      resellBusinessDesc: 'ResellBusinessDesc',
      status: 'Status',
      submitTime: 'SubmitTime',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierNameEn: 'SupplierNameEn',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contactEmail: 'string',
      contactNumber: 'string',
      contactPerson: 'string',
      contactPersonTitle: 'string',
      enableResellerMode: 'boolean',
      productAnnualRevenue: 'string',
      productBusiness: 'string',
      productDeliveryTypes: 'string',
      productPublishTime: 'string',
      productSellTypes: 'string',
      registrationId: 'string',
      resellBusinessDesc: 'string',
      status: 'string',
      submitTime: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierNameEn: 'string',
      supplierUid: 'string',
      supplierUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

