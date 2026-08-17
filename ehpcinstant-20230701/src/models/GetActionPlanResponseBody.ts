// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActionPlanResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of security groups available to the execution plan in this region.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * List of vSwitches available to the execution plan in this region.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

export class GetActionPlanResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * Number of CPUs in the runtime environment.
   * 
   * @example
   * 64
   */
  cores?: number;
  /**
   * @remarks
   * Memory size in the runtime environment, in GiB.
   * 
   * @example
   * 128
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

export class GetActionPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the execution plan.
   * 
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @remarks
   * Name of the execution plan.
   * 
   * @example
   * TestActionPlan
   */
  actionPlanName?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * ID of the application.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  /**
   * @remarks
   * Time when the execution plan was created.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  createTime?: string;
  /**
   * @remarks
   * Target resource size for the execution plan. If ResourceType is VCpuCapacity, this value represents the target vCPU count.
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
   * Computing power level.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * Prologue script. Must be Base64-encoded.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  /**
   * @remarks
   * List of region-specific resource configurations for the execution plan\\"s runtime environment.
   */
  regions?: GetActionPlanResponseBodyRegions[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * Type of target resource for the execution plan. Valid values are:
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
   * List of resource configurations for the execution plan\\"s runtime environment.
   */
  resources?: GetActionPlanResponseBodyResources[];
  /**
   * @remarks
   * Status of the execution plan. Valid values are:
   * 
   * - Active: The execution plan is active and dynamically manages Instant jobs.
   * 
   * - Inactive: The execution plan is inactive and no longer manages Instant jobs.
   * 
   * - Deleting: The execution plan is being deleted. You cannot modify parameters during this state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Current resource size managed by the execution plan.
   * 
   * @example
   * 1000
   */
  totalCapacity?: number;
  /**
   * @remarks
   * Last time the execution plan was modified.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanId: 'ActionPlanId',
      actionPlanName: 'ActionPlanName',
      allocationSpec: 'AllocationSpec',
      appId: 'AppId',
      createTime: 'CreateTime',
      desiredCapacity: 'DesiredCapacity',
      intervalMinutes: 'IntervalMinutes',
      level: 'Level',
      prologScript: 'PrologScript',
      regions: 'Regions',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      resources: 'Resources',
      status: 'Status',
      totalCapacity: 'TotalCapacity',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanId: 'string',
      actionPlanName: 'string',
      allocationSpec: 'string',
      appId: 'string',
      createTime: 'string',
      desiredCapacity: 'number',
      intervalMinutes: 'number',
      level: 'string',
      prologScript: 'string',
      regions: { 'type': 'array', 'itemType': GetActionPlanResponseBodyRegions },
      requestId: 'string',
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': GetActionPlanResponseBodyResources },
      status: 'string',
      totalCapacity: 'number',
      updateTime: 'string',
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

