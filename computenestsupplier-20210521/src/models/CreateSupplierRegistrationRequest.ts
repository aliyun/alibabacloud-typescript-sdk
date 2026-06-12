// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupplierRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact person.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx@xxx.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The phone number of the contact person.
   * 
   * This parameter is required.
   * 
   * @example
   * 186xxxxxxxxx
   */
  contactNumber?: string;
  /**
   * @remarks
   * The contact person.
   * 
   * This parameter is required.
   * 
   * @example
   * John Doe
   */
  contactPerson?: string;
  /**
   * @remarks
   * The title of the contact person.
   * 
   * This parameter is required.
   * 
   * @example
   * CTO
   */
  contactPersonTitle?: string;
  /**
   * @remarks
   * Specifies whether to enable distribution.
   * 
   * @example
   * true
   */
  enableResellerMode?: boolean;
  /**
   * @remarks
   * The annual revenue of the product.
   * 
   * @example
   * 10000000
   */
  productAnnualRevenue?: string;
  /**
   * @remarks
   * The industry of the service provider\\"s product.
   * 
   * @example
   * AI
   */
  productBusiness?: string;
  /**
   * @remarks
   * The delivery methods of the service provider\\"s product. Valid values:
   * 
   * - SaaS
   * 
   * - License
   * 
   * - API
   * 
   * - DesktopSoftware
   * 
   * - Others
   * 
   * This parameter is required.
   */
  productDeliveryTypes?: string[];
  /**
   * @remarks
   * The launch date of the product.
   * 
   * @example
   * 2020.10.10
   */
  productPublishTime?: string;
  /**
   * @remarks
   * The sales models of the service provider\\"s product. Valid values:
   * 
   * - Direct: Direct sales
   * 
   * - Channel: Channel sales
   * 
   * This parameter is required.
   */
  productSellTypes?: string[];
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
   * The description of the distribution business.
   * 
   * @example
   * 无
   */
  resellBusinessDesc?: string;
  /**
   * @remarks
   * The suggestions from the service provider.
   * 
   * @example
   * 无
   */
  suggestion?: string;
  /**
   * @remarks
   * The description of the service provider.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Company A
   */
  supplierName?: string;
  /**
   * @remarks
   * The English name of the service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierNameEn?: string;
  /**
   * @remarks
   * The supplier\\"s address.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.xxx.xxx.cn
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
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
      regionId: 'RegionId',
      resellBusinessDesc: 'ResellBusinessDesc',
      suggestion: 'Suggestion',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierNameEn: 'SupplierNameEn',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactNumber: 'string',
      contactPerson: 'string',
      contactPersonTitle: 'string',
      enableResellerMode: 'boolean',
      productAnnualRevenue: 'string',
      productBusiness: 'string',
      productDeliveryTypes: { 'type': 'array', 'itemType': 'string' },
      productPublishTime: 'string',
      productSellTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resellBusinessDesc: 'string',
      suggestion: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierNameEn: 'string',
      supplierUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productDeliveryTypes)) {
      $dara.Model.validateArray(this.productDeliveryTypes);
    }
    if(Array.isArray(this.productSellTypes)) {
      $dara.Model.validateArray(this.productSellTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

