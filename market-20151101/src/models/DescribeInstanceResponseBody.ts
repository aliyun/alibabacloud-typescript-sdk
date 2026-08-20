// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $dara.Model {
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
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues;
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
  code?: string;
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
   * @remarks
   * The service status. Valid values:
   * 
   * - READYING: not started.
   * - STARTED: in service.
   * - CONFIRM: completed.
   * - EXPIRED: expired.
   * - CLOSED: released.
   * 
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
   * @remarks
   * The application information. The metric description of the parameters in the example is as follows:
   * 
   * - username: the username.
   * - passowrd: the password.
   * - frontEndUrl: the frontend URL.
   * - adminUrl: the management URL.
   * 
   * @example
   * {"frontEndUrl":"https://****.aliyundoc.com","password":"Sjtv***","adminUrl":"https://****.aliyundoc.com","username":"aliyun***"}
   */
  appJson?: string;
  autoRenewal?: string;
  /**
   * @remarks
   * The time when the instance was activated (timestamp).
   * 
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @remarks
   * The business module.
   * 
   * The metric description of the parameters in the example is as follows:
   * 
   * - package_version: the version.
   * 
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * {}
   */
  constraints?: string;
  /**
   * @remarks
   * The creation time (timestamp).
   * 
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @remarks
   * The expiration time (timestamp).
   * 
   * @example
   * 1602259200000
   */
  endOn?: number;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {"说明": "如有使用问题，请联系..."}
   */
  extendJson?: string;
  /**
   * @remarks
   * The host information. The metric description of the parameters in the example is as follows:
   * 
   * - username: the username.
   * - passowrd: the password.
   * - ip: the host IP address.
   * - innerIp: the internal network IP address of the host.
   * 
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @remarks
   * Indicates whether the instance is a trial instance.
   * 
   * @example
   * true
   */
  isTrial?: boolean;
  licenseCode?: string;
  modules?: DescribeInstanceResponseBodyModules;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmgj00**11
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * ***协同办公
   */
  productName?: string;
  /**
   * @remarks
   * The SKU code.
   * 
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - APP: application.
   * - SERVIC: service.
   * - MIRROR: image.
   * - DOWNLOAD: download.
   * - API_SERVICE: API.
   * - DOCKER: Docker.
   * 
   * @example
   * APP
   */
  productType?: string;
  /**
   * @remarks
   * The relational information.
   */
  relationalData?: DescribeInstanceResponseBodyRelationalData;
  /**
   * @remarks
   * The business status. The value varies based on the product type.
   * 
   * If ProductType is set to MIRROR:
   * - PRODUCE: being provisioned.
   * - USING: in use.
   * - UNUSED: not used.
   * - EXPIRED: expired.
   * - CLOSED: released.
   * 
   * If ProductType is set to SERVICE:
   * - READYING: not started.
   * - STARTED: in service.
   * - CONFIRM: completed.
   * - EXPIRED: expired.
   * - CLOSED: released.
   * 
   * If ProductType is set to APP, DOWNLOAD, API_SERVICE, or DOCKER:
   * - OPENING: being activated.
   * - OPENED: activated.
   * - EXPIRED: expired.
   * - CLOSED: released.
   * 
   * @example
   * OPENED
   */
  status?: string;
  /**
   * @remarks
   * The service provider name.
   * 
   * @example
   * *****有限公司
   */
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

