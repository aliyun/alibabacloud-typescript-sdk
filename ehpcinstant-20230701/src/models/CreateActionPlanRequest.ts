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
   * The list of security groups available for the execution plan in the region. You can specify 0 to 5 security groups.
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The list of security group IDs. You can call the [DescribeSecurityGroups](https://api.aliyun.com/document/Ecs/2014-05-26/DescribeSecurityGroups) operation to query available security groups.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of vSwitches available for the execution plan in the region. You can specify 0 to 5 vSwitches.
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
   * The number of CPU cores in the runtime environment.
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
   * The resource allocation specification. Valid values:
   * - Standard: standard
   * - Dedicated: dedicated. To use this value, you must be added to the whitelist.
   * - Economic: economy. To use this value, you must be added to the whitelist.
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
   * The desired resource capacity for the execution plan. If ResourceType is set to VCpuCapacity, this parameter specifies the expected number of vCPUs to maintain, such as 10000.
   * 
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The scheduling interval of the execution plan. Unit: minutes. Valid values: 10 to 10080. Default value: 60.
   * 
   * @example
   * 60
   */
  intervalMinutes?: number;
  /**
   * @remarks
   * The computing power level. This parameter takes effect only when the resource type is set to Economic. Valid values:
   * - General: general-purpose
   * - Performance: performance-optimized
   * 
   * Default value: General.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The prolog script. The script must be Base64-encoded.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  /**
   * @remarks
   * The list of region-specific resource configurations for the runtime environment of the execution plan.
   */
  regions?: CreateActionPlanRequestRegions[];
  /**
   * @remarks
   * The type of the target resource for the execution plan. Valid values:
   * 
   * - VCpuCapacity: vCPU capacity
   * 
   * - ExecutorCapacity: number of execution nodes
   * 
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource configurations for the runtime environment of the execution plan. You can specify 1 to 10 resource configurations.
   */
  resources?: CreateActionPlanRequestResources[];
  /**
   * @remarks
   * The script used to run the job. The script must be Base64-encoded.
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

