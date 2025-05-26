// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig } from "./DescribeDbresourceGroupResponseBodyGroupsInfoRayConfig";
import { DescribeDBResourceGroupResponseBodyGroupsInfoRules } from "./DescribeDbresourceGroupResponseBodyGroupsInfoRules";


export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $dara.Model {
  autoStopInterval?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T03:34:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum amount of elastic computing resources.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * Indicates whether the preemptible instance feature is enabled for the resource group. After the preemptible instance feature is enabled, you are charged for resources at a lower unit price but the resources are probably released. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * The True value is returned only for job resource groups.
   * 
   * @example
   * True
   */
  enableSpot?: string;
  engine?: string;
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test1
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user that is associated with the resource group.
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources.
   * 
   * @example
   * 512ACU
   */
  maxComputeResource?: string;
  maxGpuQuantity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  minGpuQuantity?: number;
  rayConfig?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoRules[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  runningClusterCount?: number;
  specName?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **creating**: The resource group is being created.
   * *   **ok**: The resource group is created.
   * *   **pendingdelete**: The resource group is pending to be deleted.
   * 
   * @example
   * ok
   */
  status?: string;
  targetResourceGroupName?: string;
  /**
   * @remarks
   * The time when the resource group was updated. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-31T03:34:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoStopInterval: 'AutoStopInterval',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      createTime: 'CreateTime',
      elasticMinComputeResource: 'ElasticMinComputeResource',
      enableSpot: 'EnableSpot',
      engine: 'Engine',
      engineParams: 'EngineParams',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUsers: 'GroupUsers',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      maxGpuQuantity: 'MaxGpuQuantity',
      message: 'Message',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      minGpuQuantity: 'MinGpuQuantity',
      rayConfig: 'RayConfig',
      rules: 'Rules',
      runningClusterCount: 'RunningClusterCount',
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStopInterval: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      createTime: 'string',
      elasticMinComputeResource: 'string',
      enableSpot: 'string',
      engine: 'string',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupName: 'string',
      groupType: 'string',
      groupUsers: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      message: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfig: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig,
      rules: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRules },
      runningClusterCount: 'number',
      specName: 'string',
      status: 'string',
      targetResourceGroupName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.engineParams) {
      $dara.Model.validateMap(this.engineParams);
    }
    if(this.rayConfig && typeof (this.rayConfig as any).validate === 'function') {
      (this.rayConfig as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

