// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModuleConfigResponseBodyModuleConfigListItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 173
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-uf6435dn4t59b9av****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * inStanceName****
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 31.13.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * a47e3713-ed22-4015-93a3-d88ebe6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ip: 'Ip',
      region: 'Region',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ip: 'string',
      region: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBodyModuleConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * timescan
   */
  configName?: string;
  /**
   * @remarks
   * An array that consists of the configuration items.
   */
  items?: DescribeModuleConfigResponseBodyModuleConfigListItems[];
  /**
   * @remarks
   * The name of the module.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      items: 'Items',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      items: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigListItems },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of configurations for the module.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * An array that consists of the configurations of the module.
   */
  moduleConfigList?: DescribeModuleConfigResponseBodyModuleConfigList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      moduleConfigList: 'ModuleConfigList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      httpStatusCode: 'number',
      moduleConfigList: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.moduleConfigList)) {
      $dara.Model.validateArray(this.moduleConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

