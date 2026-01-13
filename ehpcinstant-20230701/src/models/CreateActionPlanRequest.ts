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
   * The list of security groups available for the execution plan in the region. You can have 0 to 5 security groups.
   */
  securityGroupId?: string[];
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of VSwitches available for the execution plan in the region. Supports 0 to 5 VSwitches.
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
   * The number of CPUs in the running environment.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The memory size of the running environment. Unit: GiB.
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
   * The type of the resource.
   * 
   * *   Standard
   * *   Dedicated: You must enable a whitelist for use.
   * *   Economic: You must enable a whitelist for use.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  /**
   * @remarks
   * The expected scale of resources for the execution plan. If the ResourceType parameter is set to VcpuCapacity, the execution plan is expected to have 10000 vCPUs.
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
   * The computing power level. This value is valid only when the resource type is Economic. The following disk categories are supported:
   * 
   * *   General
   * *   Performance
   * 
   * Default value: General
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The pre-processing script. Base64 encoding is required.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  /**
   * @remarks
   * The list of resource configurations in the region where the execution plan runs.
   */
  regions?: CreateActionPlanRequestRegions[];
  /**
   * @remarks
   * Target resource type: the capacity of vCPUs or the number of execution nodes. Valid values:
   * 
   * *   VCpuCapacity
   * *   ExecutorCapacity
   * 
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource configurations of the execution plan runtime environment. You can configure 1 to 10 resources.
   * 
   * @example
   * 1000
   */
  resources?: CreateActionPlanRequestResources[];
  /**
   * @remarks
   * The running-job script. Base64 encoding is required.
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

