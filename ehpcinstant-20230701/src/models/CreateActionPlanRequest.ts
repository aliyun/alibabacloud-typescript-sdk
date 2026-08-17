// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActionPlanRequestRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of security groups that are available for the execution plan in the region. You can specify 0 to 5 security groups.
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * A list of security group IDs. You can call the [DescribeSecurityGroups](https://api.aliyun.com/document/Ecs/2014-05-26/DescribeSecurityGroups) operation to query information about available security groups.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * A list of vSwitches that are available for the execution plan in the region. You can specify 0 to 5 vSwitches.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionPlanRequestResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs for the runtime environment.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The memory size of the runtime environment. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the execution plan.
   * 
   * @example
   * TestActionPlan
   */
  actionPlanName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * - Standard: Standard.
   * 
   * - Dedicated: Dedicated. This type is available only to users in the whitelist.
   * 
   * - Economic: Economy. This type is available only to users in the whitelist.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  /**
   * @remarks
   * The desired size of the resource for the execution plan. For example, if you set ResourceType to VcpuCapacity, this parameter specifies the number of vCPUs that you want to maintain for the execution plan.
   * 
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @example
   * 60
   */
  intervalMinutes?: number;
  /**
   * @remarks
   * The computing power level. This parameter is valid only when you set AllocationSpec to Economic. The following types are supported:
   * 
   * - General: General-purpose.
   * 
   * - Performance: Compute-optimized.
   * 
   * Default value: General
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The pre-execution script. The script must be Base64-encoded.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  /**
   * @remarks
   * A list of regional resource configurations for the runtime environment of the execution plan.
   */
  regions?: CreateActionPlanRequestRegions[];
  /**
   * @remarks
   * The type of resource for the execution target. The value can be the vCPU capacity or the number of executor nodes. Valid values:
   * 
   * - VCpuCapacity: vCPU capacity
   * 
   * - ExecutorCapacity: number of executor nodes
   * 
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of resource configurations for the runtime environment of the execution plan. You can specify 1 to 10 resource configurations.
   * 
   * @example
   * 1000
   */
  resources?: CreateActionPlanRequestResources[];
  /**
   * @remarks
   * The script to run the job. The script must be Base64-encoded.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanName: 'ActionPlanName',
      allocationSpec: 'AllocationSpec',
      appId: 'AppId',
      desiredCapacity: 'DesiredCapacity',
      intervalMinutes: 'IntervalMinutes',
      level: 'Level',
      prologScript: 'PrologScript',
      regions: 'Regions',
      resourceType: 'ResourceType',
      resources: 'Resources',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanName: 'string',
      allocationSpec: 'string',
      appId: 'string',
      desiredCapacity: 'number',
      intervalMinutes: 'number',
      level: 'string',
      prologScript: 'string',
      regions: { 'type': 'array', 'itemType': CreateActionPlanRequestRegions },
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': CreateActionPlanRequestResources },
      script: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

