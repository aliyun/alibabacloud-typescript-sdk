// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsResponseBodySDGsAvaliableRegionIds extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was created on the node.
   * 
   * @example
   * 2023-02-27 15:13:26
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-hangzhou-26
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * mock-clone_snapshot_id
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the SDG on the node. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **sdg_copying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      regionId: 'string',
      snapshotId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGsResponseBodySDGsDeployedInstanceIds extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was deployed on the instance.
   * 
   * @example
   * 2023-02-27 16:48:43
   */
  creationTime?: string;
  /**
   * @remarks
   * The deployment type of the SDG. Valid values:
   * 
   * *   common: common deployment.
   * *   overlay: read/write splitting deployment.
   * 
   * @example
   * overlay
   */
  deploymentType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * aic-5x20dyeos****
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * 
   * *   **sdg_deploying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * sdg_deploying
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      deploymentType: 'DeploymentType',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      deploymentType: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGsResponseBodySDGs extends $dara.Model {
  /**
   * @remarks
   * The IDs of available edge nodes.
   */
  avaliableRegionIds?: DescribeSDGsResponseBodySDGsAvaliableRegionIds[];
  billingCycle?: string;
  creationDiskType?: string;
  /**
   * @remarks
   * The ID of the instance on which the SDG is created.
   * 
   * @example
   * aic-5x20dyeos****
   */
  creationInstanceId?: string;
  /**
   * @remarks
   * The ID of the node on which the SDG is created.
   * 
   * @example
   * cn-hangzhou-26
   */
  creationRegionId?: string;
  /**
   * @remarks
   * The time when the SDG was first created.
   * 
   * @example
   * 2023-02-27 15:07:21
   */
  creationTime?: string;
  /**
   * @remarks
   * The deployment information.
   */
  deployedInstanceIds?: DescribeSDGsResponseBodySDGsDeployedInstanceIds[];
  /**
   * @remarks
   * The description of the SDG.
   * 
   * @example
   * Testing SDGs
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source SDG from which you want to create an SDG. The value of this parameter is the value of the **FromSDGId** parameter that you need to specify when you call the [CreateSDG](https://help.aliyun.com/document_detail/608128.html) operation.
   * 
   * @example
   * sdg-xxxxx
   */
  parentSDGId?: string;
  /**
   * @example
   * 100
   */
  performanceLevel?: number;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-30e1fdba7196bc****
   */
  SDGId?: string;
  /**
   * @remarks
   * The size of the SDG. Unit: GB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The status of the SDG creation. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the SDG was last updated.
   * 
   * @example
   * 2023-02-27 16:04:39
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      avaliableRegionIds: 'AvaliableRegionIds',
      billingCycle: 'BillingCycle',
      creationDiskType: 'CreationDiskType',
      creationInstanceId: 'CreationInstanceId',
      creationRegionId: 'CreationRegionId',
      creationTime: 'CreationTime',
      deployedInstanceIds: 'DeployedInstanceIds',
      description: 'Description',
      parentSDGId: 'ParentSDGId',
      performanceLevel: 'PerformanceLevel',
      SDGId: 'SDGId',
      size: 'Size',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableRegionIds: { 'type': 'array', 'itemType': DescribeSDGsResponseBodySDGsAvaliableRegionIds },
      billingCycle: 'string',
      creationDiskType: 'string',
      creationInstanceId: 'string',
      creationRegionId: 'string',
      creationTime: 'string',
      deployedInstanceIds: { 'type': 'array', 'itemType': DescribeSDGsResponseBodySDGsDeployedInstanceIds },
      description: 'string',
      parentSDGId: 'string',
      performanceLevel: 'number',
      SDGId: 'string',
      size: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.avaliableRegionIds)) {
      $dara.Model.validateArray(this.avaliableRegionIds);
    }
    if(Array.isArray(this.deployedInstanceIds)) {
      $dara.Model.validateArray(this.deployedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3703C4AC-9396-458C-8F25-1D701334D309
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SDGs.
   */
  SDGs?: DescribeSDGsResponseBodySDGs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SDGs: 'SDGs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SDGs: { 'type': 'array', 'itemType': DescribeSDGsResponseBodySDGs },
    };
  }

  validate() {
    if(Array.isArray(this.SDGs)) {
      $dara.Model.validateArray(this.SDGs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

