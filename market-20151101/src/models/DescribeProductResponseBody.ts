// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductResponseBodyProductExtrasProductExtra extends $dara.Model {
  /**
   * @example
   * product_advantage
   */
  key?: string;
  label?: string;
  /**
   * @example
   * 0
   */
  order?: number;
  /**
   * @example
   * HTML
   */
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
  /**
   * @example
   * 123
   */
  max?: string;
  /**
   * @example
   * 11
   */
  min?: string;
  /**
   * @example
   * abc
   */
  remark?: string;
  /**
   * @example
   * 1
   */
  step?: string;
  /**
   * @example
   * single_string
   */
  type?: string;
  /**
   * @example
   * m-28e213e7t
   */
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
  /**
   * @example
   * 1
   */
  displayUnit?: string;
  /**
   * @example
   * img_id
   */
  key?: string;
  name?: string;
  propertyValues?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues;
  /**
   * @example
   * number
   */
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
  /**
   * @example
   * img_id
   */
  code?: string;
  /**
   * @example
   * 248220
   */
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
  /**
   * @example
   * HOUR
   */
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
  /**
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * cmjj01****-Package
   */
  code?: string;
  /**
   * @example
   * {\\"img_id\\":{\\"img_version|img_region\\":{\\"V1.7|cn-shenzhen-st3-a01\\":[\\"m-wz9ho4hmos0lpxcldqoq\\"]}}
   */
  constraints?: string;
  /**
   * @example
   * true
   */
  hidden?: boolean;
  modules?: DescribeProductResponseBodyProductSkusProductSkuModules;
  /**
   * @example
   * 21
   */
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
  /**
   * @example
   * 123
   */
  remark?: string;
  /**
   * @example
   * ABC
   */
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
   * @example
   * 46**41@example.com
   */
  emails?: string;
  /**
   * @example
   * 123
   */
  id?: number;
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
  auditFailMsg?: string;
  /**
   * @example
   * function_fail
   */
  auditStatus?: string;
  /**
   * @example
   * 1581609600000
   */
  auditTime?: number;
  /**
   * @example
   * cmjj01**45
   */
  code?: string;
  description?: string;
  /**
   * @example
   * 523617212
   */
  frontCategoryId?: number;
  /**
   * @example
   * 1578931200000
   */
  gmtCreated?: number;
  /**
   * @example
   * 1578931200000
   */
  gmtModified?: number;
  name?: string;
  /**
   * @example
   * https://oss.aliyuncs.com/photogallery/photo/1930532890589852/6245/495d5f19-03e4-4c2e-9c4e-bef9ab6af1e1.png
   */
  picUrl?: string;
  productExtras?: DescribeProductResponseBodyProductExtras;
  productSkus?: DescribeProductResponseBodyProductSkus;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * 5.0
   */
  score?: number;
  shopInfo?: DescribeProductResponseBodyShopInfo;
  shortDescription?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1526111111****
   */
  supplierPk?: number;
  /**
   * @example
   * MIRROR
   */
  type?: string;
  /**
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

