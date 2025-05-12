// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList } from "./DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList";


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

