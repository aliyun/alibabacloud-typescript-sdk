// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $dara.Model {
  /**
   * @example
   * 12
   */
  displayName?: string;
  /**
   * @example
   * 12
   */
  max?: string;
  /**
   * @example
   * 12
   */
  min?: string;
  /**
   * @example
   * 12
   */
  remark?: string;
  /**
   * @example
   * 12
   */
  step?: string;
  /**
   * @example
   * 12
   */
  type?: string;
  /**
   * @example
   * 12
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

export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues extends $dara.Model {
  propertyValue?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue },
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

export class DescribeInstanceResponseBodyModulesModulePropertiesProperty extends $dara.Model {
  /**
   * @example
   * 12
   */
  displayUnit?: string;
  /**
   * @example
   * 12
   */
  key?: string;
  /**
   * @example
   * 12
   */
  name?: string;
  propertyValues?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues;
  /**
   * @example
   * 12
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
      propertyValues: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues,
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

export class DescribeInstanceResponseBodyModulesModuleProperties extends $dara.Model {
  property?: DescribeInstanceResponseBodyModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesProperty },
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

export class DescribeInstanceResponseBodyModulesModule extends $dara.Model {
  /**
   * @example
   * package_config
   */
  code?: string;
  /**
   * @example
   * 101*********026
   */
  id?: string;
  name?: string;
  properties?: DescribeInstanceResponseBodyModulesModuleProperties;
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
      properties: DescribeInstanceResponseBodyModulesModuleProperties,
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

export class DescribeInstanceResponseBodyModules extends $dara.Model {
  module?: DescribeInstanceResponseBodyModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModule },
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

export class DescribeInstanceResponseBodyRelationalData extends $dara.Model {
  /**
   * @example
   * STARTED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  activeAddress?: string;
  /**
   * @example
   * {"frontEndUrl":"https://****.aliyundoc.com","password":"Sjtv***","adminUrl":"https://****.aliyundoc.com","username":"aliyun***"}
   */
  appJson?: string;
  autoRenewal?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @example
   * {}
   */
  constraints?: string;
  /**
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @example
   * 1602259200000
   */
  endOn?: number;
  extendJson?: string;
  /**
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isTrial?: boolean;
  licenseCode?: string;
  modules?: DescribeInstanceResponseBodyModules;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  relationalData?: DescribeInstanceResponseBodyRelationalData;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      constraints: 'Constraints',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      modules: 'Modules',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      constraints: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      modules: DescribeInstanceResponseBodyModules,
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceResponseBodyRelationalData,
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.modules && typeof (this.modules as any).validate === 'function') {
      (this.modules as any).validate();
    }
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

