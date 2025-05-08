// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupplierRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * Contact email
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx@xxx.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * Contact number
   * 
   * This parameter is required.
   * 
   * @example
   * 186xxxxxxxxx
   */
  contactNumber?: string;
  /**
   * @remarks
   * Contact person
   * 
   * This parameter is required.
   * 
   * @example
   * Mike
   */
  contactPerson?: string;
  /**
   * @remarks
   * Contact person tiltle
   * 
   * This parameter is required.
   * 
   * @example
   * CTO
   */
  contactPersonTitle?: string;
  /**
   * @remarks
   * Whether to enable the resell mode
   * 
   * @example
   * true
   */
  enableResellerMode?: boolean;
  /**
   * @remarks
   * Annual product revenue
   * 
   * @example
   * 1000
   */
  productAnnualRevenue?: string;
  /**
   * @remarks
   * The business of product
   * 
   * @example
   * AI
   */
  productBusiness?: string;
  /**
   * @remarks
   * Product delivery type
   * 
   * This parameter is required.
   */
  productDeliveryTypes?: string[];
  /**
   * @remarks
   * The publish time of product
   * 
   * @example
   * 2020.10.10
   */
  productPublishTime?: string;
  /**
   * @remarks
   * Product sell type
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
   * The description of resell business.
   * 
   * @example
   * empty
   */
  resellBusinessDesc?: string;
  /**
   * @remarks
   * The demands of service providers.
   * 
   * @example
   * empty
   */
  suggestion?: string;
  /**
   * @remarks
   * The description of service provider.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The english name of the service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierNameEn?: string;
  /**
   * @remarks
   * The URL of the service provider.
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

