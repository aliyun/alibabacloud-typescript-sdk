// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues extends $dara.Model {
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

export class DescribeImageInstanceForIsvResponseBodyModulesProperties extends $dara.Model {
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues[];
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
      propertyValues: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues },
      showType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBodyModules extends $dara.Model {
  code?: string;
  id?: string;
  name?: string;
  properties?: DescribeImageInstanceForIsvResponseBodyModulesProperties[];
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
      properties: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModulesProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBodyRelationalData extends $dara.Model {
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

export class DescribeImageInstanceForIsvResponseBody extends $dara.Model {
  activeAddress?: string;
  appJson?: string;
  autoRenewal?: string;
  beganOn?: number;
  componentJson?: string;
  constraints?: string;
  createdOn?: number;
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  instanceId?: number;
  isTrial?: boolean;
  licenseCode?: string;
  modules?: DescribeImageInstanceForIsvResponseBodyModules[];
  orderId?: number;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  productType?: string;
  relationalData?: DescribeImageInstanceForIsvResponseBodyRelationalData;
  requestId?: string;
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
      requestId: 'RequestId',
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
      modules: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModules },
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeImageInstanceForIsvResponseBodyRelationalData,
      requestId: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
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

