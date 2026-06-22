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
   * The ID of the server instance.
   * 
   * @example
   * i-uf6435dn4t59b9av****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
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
   * The configuration name.
   * 
   * @example
   * timescan
   */
  configName?: string;
  /**
   * @remarks
   * The list of configuration items.
   */
  items?: DescribeModuleConfigResponseBodyModuleConfigListItems[];
  /**
   * @remarks
   * The module name.
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
   * The number of module settings.
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
   * The list of module settings.
   */
  moduleConfigList?: DescribeModuleConfigResponseBodyModuleConfigList[];
  /**
   * @remarks
   * The request ID. It is a unique identifier that Alibaba Cloud generates for the request. You can use it to troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

