// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsResponseBodySDGsAvaliableRegionIds extends $dara.Model {
  /**
   * @remarks
   * The creation time of the SDG in the edge zone.
   * 
   * @example
   * 2023-02-27 15:13:26
   */
  creationTime?: string;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * @example
   * cn-hangzhou-26
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * mock-clone_snapshot_id
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the SDG in the edge zone. Valid values:
   * 
   * - **sdg_making**: Being created.
   * - **sdg_saving**: Being saved.
   * - **sdg_copying**: Being synchronized across edge zones.
   * - **failed**: Creation failed.
   * - **success**: Creation succeeded.
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
   * The SDG deployment type. Valid values:
   * 
   * - common: standard deployment
   * - overlay: read/write splitting deployment
   * 
   * @example
   * overlay
   */
  deploymentType?: string;
  /**
   * @remarks
   * The AIC instance ID.
   * 
   * @example
   * aic-5x20dyeos****
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * 
   * - **sdg_deploying**: Being deployed.
   * - **failed**: Deployment failed.
   * - **success**: Deployment succeeded.
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
   * The list of available edge zones.
   */
  avaliableRegionIds?: DescribeSDGsResponseBodySDGsAvaliableRegionIds[];
  /**
   * @remarks
   * The billing cycle of the shared disk.
   * 
   * @example
   * Hour
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * Open
   */
  billingType?: string;
  /**
   * @remarks
   * The disk type of the source disk used to create the SDG.
   * 
   * @example
   * standard
   */
  creationDiskType?: string;
  /**
   * @remarks
   * The instance ID of the instance used to create the SDG.
   * 
   * @example
   * aic-5x20dyeos****
   */
  creationInstanceId?: string;
  /**
   * @remarks
   * The edge zone ID where the SDG was created.
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
   * The list of deployment status information.
   */
  deployedInstanceIds?: DescribeSDGsResponseBodySDGsDeployedInstanceIds[];
  /**
   * @remarks
   * The description of the SDG.
   * 
   * @example
   * Test SDG
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source SDG used for incremental creation. This is the **FromSDGId** parameter passed when calling [CreateSDG](https://help.aliyun.com/document_detail/608128.html).
   * 
   * @example
   * sdg-xxxxx
   */
  parentSDGId?: string;
  /**
   * @remarks
   * The sharing ratio of the SDG.
   * 
   * @example
   * 100
   */
  performanceLevel?: number;
  /**
   * @remarks
   * The SDG ID.
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
   * The creation status of the SDG. Valid values:
   * 
   * - **sdg_making**: Being created.
   * - **sdg_saving**: Being saved.
   * - **failed**: Creation failed.
   * - **success**: Creation succeeded.
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
      billingType: 'BillingType',
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
      billingType: 'string',
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
   * The list of SDG information.
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

