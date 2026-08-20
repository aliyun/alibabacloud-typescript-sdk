// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductResponseBodyProductExtrasProductExtra extends $dara.Model {
  key?: string;
  label?: string;
  order?: number;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      label: 'Label',
      order: 'Order',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      order: 'number',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductExtras extends $dara.Model {
  productExtra?: DescribeProductResponseBodyProductExtrasProductExtra[];
  static names(): { [key: string]: string } {
    return {
      productExtra: 'ProductExtra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productExtra: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductExtrasProductExtra },
    };
  }

  validate() {
    if(Array.isArray(this.productExtra)) {
      $dara.Model.validateArray(this.productExtra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $dara.Model {
  displayName?: string;
  max?: string;
  min?: string;
  remark?: string;
  step?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
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

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues extends $dara.Model {
  propertyValue?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValue)) {
      $dara.Model.validateArray(this.propertyValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty extends $dara.Model {
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues;
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues,
      showType: 'string',
    };
  }

  validate() {
    if(this.propertyValues && typeof (this.propertyValues as any).validate === 'function') {
      (this.propertyValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties extends $dara.Model {
  property?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty },
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModule extends $dara.Model {
  code?: string;
  id?: string;
  name?: string;
  properties?: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModules extends $dara.Model {
  module?: DescribeProductResponseBodyProductSkusProductSkuModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModule },
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod extends $dara.Model {
  name?: string;
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      periodType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriods extends $dara.Model {
  orderPeriod?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod[];
  static names(): { [key: string]: string } {
    return {
      orderPeriod: 'OrderPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderPeriod: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod },
    };
  }

  validate() {
    if(Array.isArray(this.orderPeriod)) {
      $dara.Model.validateArray(this.orderPeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSku extends $dara.Model {
  chargeType?: string;
  code?: string;
  constraints?: string;
  hidden?: boolean;
  modules?: DescribeProductResponseBodyProductSkusProductSkuModules;
  name?: string;
  orderPeriods?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      constraints: 'Constraints',
      hidden: 'Hidden',
      modules: 'Modules',
      name: 'Name',
      orderPeriods: 'OrderPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      constraints: 'string',
      hidden: 'boolean',
      modules: DescribeProductResponseBodyProductSkusProductSkuModules,
      name: 'string',
      orderPeriods: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods,
    };
  }

  validate() {
    if(this.modules && typeof (this.modules as any).validate === 'function') {
      (this.modules as any).validate();
    }
    if(this.orderPeriods && typeof (this.orderPeriods as any).validate === 'function') {
      (this.orderPeriods as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkus extends $dara.Model {
  productSku?: DescribeProductResponseBodyProductSkusProductSku[];
  static names(): { [key: string]: string } {
    return {
      productSku: 'ProductSku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSku: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSku },
    };
  }

  validate() {
    if(Array.isArray(this.productSku)) {
      $dara.Model.validateArray(this.productSku);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoTelephones extends $dara.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.telephone)) {
      $dara.Model.validateArray(this.telephone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoWangWangsWangWang extends $dara.Model {
  remark?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoWangWangs extends $dara.Model {
  wangWang?: DescribeProductResponseBodyShopInfoWangWangsWangWang[];
  static names(): { [key: string]: string } {
    return {
      wangWang: 'WangWang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wangWang: { 'type': 'array', 'itemType': DescribeProductResponseBodyShopInfoWangWangsWangWang },
    };
  }

  validate() {
    if(Array.isArray(this.wangWang)) {
      $dara.Model.validateArray(this.wangWang);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfo extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 46**41@example.com
   */
  emails?: string;
  /**
   * @remarks
   * The shop ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The shop name.
   * 
   * @example
   * **科学公司
   */
  name?: string;
  telephones?: DescribeProductResponseBodyShopInfoTelephones;
  wangWangs?: DescribeProductResponseBodyShopInfoWangWangs;
  static names(): { [key: string]: string } {
    return {
      emails: 'Emails',
      id: 'Id',
      name: 'Name',
      telephones: 'Telephones',
      wangWangs: 'WangWangs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emails: 'string',
      id: 'number',
      name: 'string',
      telephones: DescribeProductResponseBodyShopInfoTelephones,
      wangWangs: DescribeProductResponseBodyShopInfoWangWangs,
    };
  }

  validate() {
    if(this.telephones && typeof (this.telephones as any).validate === 'function') {
      (this.telephones as any).validate();
    }
    if(this.wangWangs && typeof (this.wangWangs as any).validate === 'function') {
      (this.wangWangs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reason for the audit failure. This parameter is returned when QueryDraft is set to true.
   * 
   * @example
   * 功能验收不通过
   */
  auditFailMsg?: string;
  /**
   * @remarks
   * The audit status. This parameter is returned when QueryDraft is set to true. Valid values:
   * - draft: not submitted
   * - security_ing: security audit in progress
   * - security_fail: security audit failed
   * - function_ing: functional audit in progress
   * - function_fail: functional audit failed
   * - info_ing: product information audit in progress
   * - info_fail: product information audit failed
   * - success: succeeded.
   * 
   * @example
   * function_fail
   */
  auditStatus?: string;
  /**
   * @remarks
   * The audit time. This parameter is returned when QueryDraft is set to true.
   * 
   * @example
   * 1581609600000
   */
  auditTime?: number;
  /**
   * @remarks
   * The commodity code of the product.
   * 
   * @example
   * cmjj01**45
   */
  code?: string;
  /**
   * @remarks
   * The detailed description of the product. HTML is supported.
   * 
   * @example
   * <div>基于阿里云（Ubuntu16.04 64位）系统源码安装，安全、稳定、高效！</div>
   */
  description?: string;
  /**
   * @remarks
   * The product category ID.
   * 
   * @example
   * 523617212
   */
  frontCategoryId?: number;
  /**
   * @remarks
   * The time when the product was created.
   * 
   * @example
   * 1578931200000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the product was last modified.
   * 
   * @example
   * 1578931200000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * LNMP环境（Ubuntu16.04 Nginx PHP5.3）
   */
  name?: string;
  /**
   * @remarks
   * The URL of the product image.
   * 
   * @example
   * https://oss.aliyuncs.com/photogallery/photo/1930532890589852/6245/495d5f19-03e4-4c2e-9c4e-bef9ab6af1e1.png
   */
  picUrl?: string;
  productExtras?: DescribeProductResponseBodyProductExtras;
  productSkus?: DescribeProductResponseBodyProductSkus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @remarks
   * The product rating.
   * 
   * @example
   * 5.0
   */
  score?: number;
  /**
   * @remarks
   * The shop information.
   */
  shopInfo?: DescribeProductResponseBodyShopInfo;
  /**
   * @remarks
   * The short description of the product.
   * 
   * @example
   * 该镜像为LNMP（Ubuntu16.04 64位+Nginx+MySQL5.6+PHP5.3）
   */
  shortDescription?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The UID of the service provider.
   * 
   * @example
   * 1526111111****
   */
  supplierPk?: number;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * * APP: application
   * * DOWNLOAD: download
   * * MIRROR: image
   * * SERVICE: service
   * * API_SERVICE: API service.
   * 
   * @example
   * MIRROR
   */
  type?: string;
  /**
   * @remarks
   * The usage count.
   * 
   * @example
   * 10
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditFailMsg: 'AuditFailMsg',
      auditStatus: 'AuditStatus',
      auditTime: 'AuditTime',
      code: 'Code',
      description: 'Description',
      frontCategoryId: 'FrontCategoryId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      name: 'Name',
      picUrl: 'PicUrl',
      productExtras: 'ProductExtras',
      productSkus: 'ProductSkus',
      requestId: 'RequestId',
      score: 'Score',
      shopInfo: 'ShopInfo',
      shortDescription: 'ShortDescription',
      status: 'Status',
      supplierPk: 'SupplierPk',
      type: 'Type',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditFailMsg: 'string',
      auditStatus: 'string',
      auditTime: 'number',
      code: 'string',
      description: 'string',
      frontCategoryId: 'number',
      gmtCreated: 'number',
      gmtModified: 'number',
      name: 'string',
      picUrl: 'string',
      productExtras: DescribeProductResponseBodyProductExtras,
      productSkus: DescribeProductResponseBodyProductSkus,
      requestId: 'string',
      score: 'number',
      shopInfo: DescribeProductResponseBodyShopInfo,
      shortDescription: 'string',
      status: 'string',
      supplierPk: 'number',
      type: 'string',
      useCount: 'number',
    };
  }

  validate() {
    if(this.productExtras && typeof (this.productExtras as any).validate === 'function') {
      (this.productExtras as any).validate();
    }
    if(this.productSkus && typeof (this.productSkus as any).validate === 'function') {
      (this.productSkus as any).validate();
    }
    if(this.shopInfo && typeof (this.shopInfo as any).validate === 'function') {
      (this.shopInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

