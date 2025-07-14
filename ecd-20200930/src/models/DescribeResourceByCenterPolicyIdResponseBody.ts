// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList extends $dara.Model {
  /**
   * @remarks
   * The application ID. This parameter is only applicable to cloud applications.
   * 
   * @example
   * 18
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * alipic-powergem
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByCenterPolicyIdResponseBodyResourceModelList extends $dara.Model {
  /**
   * @remarks
   * The cloud applications.
   */
  appModelList?: DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList[];
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 64
   */
  cpu?: number;
  /**
   * @remarks
   * The cloud computer type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of the cloud computer types supported by Alibaba Cloud Workspace.
   * 
   * @example
   * eds.enterprise_office.8c32g
   */
  desktopType?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0.125
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * 2GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 10240
   */
  memory?: number;
  /**
   * @remarks
   * The OS type.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * postPaid
   */
  payType?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * desktop
   */
  productType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-d7pasxsd3b9nhq**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The number of associated resource groups
   * 
   * @example
   * 10
   */
  resourceGroupRelCount?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-7o96aa08fr****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   */
  resourceName?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appModelList: 'AppModelList',
      cpu: 'Cpu',
      desktopType: 'DesktopType',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      memory: 'Memory',
      osType: 'OsType',
      payType: 'PayType',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      resourceGroupRelCount: 'ResourceGroupRelCount',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appModelList: { 'type': 'array', 'itemType': DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList },
      cpu: 'number',
      desktopType: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      memory: 'number',
      osType: 'string',
      payType: 'string',
      productType: 'string',
      protocolType: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      resourceGroupRelCount: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appModelList)) {
      $dara.Model.validateArray(this.appModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByCenterPolicyIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 2
   */
  count?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48174475-5EB2-5F99-A9E9-6F892D645****
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resourceModelList?: DescribeResourceByCenterPolicyIdResponseBodyResourceModelList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceModelList: 'ResourceModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      nextToken: 'string',
      requestId: 'string',
      resourceModelList: { 'type': 'array', 'itemType': DescribeResourceByCenterPolicyIdResponseBodyResourceModelList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceModelList)) {
      $dara.Model.validateArray(this.resourceModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

