// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterResourceDetailResponseBodyDataResourceGroupList } from "./DescribeClusterResourceDetailResponseBodyDataResourceGroupList";


export class DescribeClusterResourceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The amount of idle reserved computing resources. Unit: ACUs. Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 0ACU
   */
  freeComputeResource?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroupList?: DescribeClusterResourceDetailResponseBodyDataResourceGroupList[];
  /**
   * @remarks
   * The amount of reserved storage resources. Unit: ACUs. Valid values: 0 to 2064. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      freeComputeResource: 'FreeComputeResource',
      resourceGroupList: 'ResourceGroupList',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      freeComputeResource: 'string',
      resourceGroupList: { 'type': 'array', 'itemType': DescribeClusterResourceDetailResponseBodyDataResourceGroupList },
      storageResource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

