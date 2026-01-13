// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActionPlanResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of security groups available for the execution plan in the region.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of VSwitches available for the execution plan in the region.
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
   * The number of CPUs in the running environment.
   * 
   * @example
   * 64
   */
  cores?: number;
  /**
   * @remarks
   * The memory size of the running environment. Unit: GiB.
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
   * The ID of the execution plan.
   * 
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
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
   * The time when the execution plan was created.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  createTime?: string;
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
   * The computing power level.
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
  regions?: GetActionPlanResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
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
   * The list of resource configurations of the execution plan runtime environment.
   */
  resources?: GetActionPlanResponseBodyResources[];
  /**
   * @remarks
   * The status of the execution plan. The possible values are as follows:
   * 
   * *   Active Instant tasks are dynamically managed only when the execution plan is in the Active state.
   * *   Inactive Instant tasks are no longer managed by execution plans in the Inactive state.
   * *   Deleting You cannot modify the parameters of an execution plan in this state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The size of the resources currently managed by the execution plan.
   * 
   * @example
   * 1000
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The time when the execution plan was last modified.
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

