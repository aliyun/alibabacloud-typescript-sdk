// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue extends $dara.Model {
  /**
   * @remarks
   * The attribute value that corresponds to the module code.
   * 
   * @example
   * 2 Cores and 4 GB Memory (Basic Edition)
   */
  name?: string;
  /**
   * @remarks
   * The description of the module values.
   * 
   * @example
   * Connections: 4,000 IOPS is related to storage space
   */
  remark?: string;
  /**
   * @remarks
   * The type of the attribute value that corresponds to the module code. Valid values:
   * 
   * *   single_float: single value
   * *   range_float: range value
   * 
   * @example
   * single_string
   */
  type?: string;
  /**
   * @remarks
   * The attribute value that corresponds to the module code.
   * 
   * >  If the Type parameter is set to range_float, the valid values of this parameter range from 1024 to 1024000. A value of 1024 indicates that the step size is 1024.
   * 
   * @example
   * mysql.n2.medium.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
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

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValues extends $dara.Model {
  attributeValue?: DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue },
    };
  }

  validate() {
    if(Array.isArray(this.attributeValue)) {
      $dara.Model.validateArray(this.attributeValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttribute extends $dara.Model {
  /**
   * @remarks
   * The code of the attribute.
   * 
   * @example
   * DBInstanceStorage
   */
  code?: string;
  /**
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * Capacity
   */
  name?: string;
  /**
   * @remarks
   * The unit of the attribute.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The attribute values.
   */
  values?: DescribePricingModuleResponseBodyDataAttributeListAttributeValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      unit: 'string',
      values: DescribePricingModuleResponseBodyDataAttributeListAttributeValues,
    };
  }

  validate() {
    if(this.values && typeof (this.values as any).validate === 'function') {
      (this.values as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeList extends $dara.Model {
  attribute?: DescribePricingModuleResponseBodyDataAttributeListAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.attribute)) {
      $dara.Model.validateArray(this.attribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModuleConfigList extends $dara.Model {
  configList?: string[];
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModule extends $dara.Model {
  configList?: DescribePricingModuleResponseBodyDataModuleListModuleConfigList;
  /**
   * @remarks
   * The currency. Default value: CNY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * Instance
   */
  moduleName?: string;
  /**
   * @remarks
   * The price type. Valid values:
   * 
   * *   Usage: usage price
   * *   Hour: hourly price
   * *   Day: daily price
   * *   Week: weekly price
   * *   Month: monthly price
   * *   Year: annual price
   * 
   * @example
   * Month
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      currency: 'Currency',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: DescribePricingModuleResponseBodyDataModuleListModuleConfigList,
      currency: 'string',
      moduleCode: 'string',
      moduleName: 'string',
      priceType: 'string',
    };
  }

  validate() {
    if(this.configList && typeof (this.configList as any).validate === 'function') {
      (this.configList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleList extends $dara.Model {
  module?: DescribePricingModuleResponseBodyDataModuleListModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataModuleListModule },
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

export class DescribePricingModuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The module attributes.
   */
  attributeList?: DescribePricingModuleResponseBodyDataAttributeList;
  /**
   * @remarks
   * The pricing information of modules.
   */
  moduleList?: DescribePricingModuleResponseBodyDataModuleList;
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
      moduleList: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: DescribePricingModuleResponseBodyDataAttributeList,
      moduleList: DescribePricingModuleResponseBodyDataModuleList,
    };
  }

  validate() {
    if(this.attributeList && typeof (this.attributeList as any).validate === 'function') {
      (this.attributeList as any).validate();
    }
    if(this.moduleList && typeof (this.moduleList as any).validate === 'function') {
      (this.moduleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribePricingModuleResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C40A8EE0-8084-49FE-B66E-5E1C3B6AE025
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribePricingModuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

