// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBResourceGroupRequestRayConfig } from "./ModifyDbresourceGroupRequestRayConfig";
import { ModifyDBResourceGroupRequestRules } from "./ModifyDbresourceGroupRequestRules";


export class ModifyDBResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * 5m
   */
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
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * true
   */
  enableSpot?: boolean;
  /**
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group in a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
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
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  maxGpuQuantity?: number;
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
   * *   If the GroupType parameter is set to Interactive, set the value to 16ACU.
   * *   If GroupType is set to Job, set the value to 0ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  minGpuQuantity?: number;
  rayConfig?: ModifyDBResourceGroupRequestRayConfig;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: ModifyDBResourceGroupRequestRules[];
  specName?: string;
  /**
   * @example
   * starting
   */
  status?: string;
  targetResourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      autoStopInterval: 'AutoStopInterval',
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      engineParams: 'EngineParams',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      maxGpuQuantity: 'MaxGpuQuantity',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      minGpuQuantity: 'MinGpuQuantity',
      rayConfig: 'RayConfig',
      regionId: 'RegionId',
      rules: 'Rules',
      specName: 'SpecName',
      status: 'Status',
      targetResourceGroupName: 'TargetResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStopInterval: 'string',
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      maxGpuQuantity: 'number',
      minClusterCount: 'number',
      minComputeResource: 'string',
      minGpuQuantity: 'number',
      rayConfig: ModifyDBResourceGroupRequestRayConfig,
      regionId: 'string',
      rules: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRules },
      specName: 'string',
      status: 'string',
      targetResourceGroupName: 'string',
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

