// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActionPlanResponseBodyRegions extends $dara.Model {
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
   * The list of security groups available for the execution plan in the region.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The list of vSwitches available for the execution plan in the region.
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
   * The number of CPUs in the runtime environment.
   * 
   * @example
   * 64
   */
  cores?: number;
  /**
   * @remarks
   * The memory size of the runtime environment. Unit: GiB.
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
   * The resource type.
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
   * The time when the execution plan was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  createTime?: string;
  /**
   * @remarks
   * The desired resource capacity of the execution plan. If ResourceType is set to VcpuCapacity, this field indicates that the execution plan expects to maintain 10,000 vCPUs.
   * 
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The scheduling interval of the execution plan. Unit: minutes.
   * 
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
   * The preprocessing script. The script must be Base64-encoded.
   * 
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  /**
   * @remarks
   * The list of regional resource configurations for the runtime environment of the execution plan.
   */
  regions?: GetActionPlanResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the target resource. Valid values:
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
   * The list of resource configurations for the runtime environment of the execution plan.
   */
  resources?: GetActionPlanResponseBodyResources[];
  /**
   * @remarks
   * The status of the execution plan. Valid values:
   * 
   * - Active: The execution plan is active. Only active execution plans dynamically manage instant tasks.
   * 
   * - Inactive: The execution plan is inactive. Inactive execution plans no longer manage instant tasks.
   * 
   * - Deleting: The execution plan is being deleted. You cannot modify the parameters of an execution plan in this state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The current resource capacity managed by the execution plan.
   * 
   * @example
   * 1000
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The time when the execution plan was last modified. The time is in the YYYY-MM-DD HH:mm:ss format.
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

