// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActionPlanResponseBodyRegions extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityGroupIds?: string[];
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
   * @example
   * 64
   */
  cores?: number;
  /**
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
   * @example
   * ap-hz036ubmx2qmw93k****
   */
  actionPlanId?: string;
  /**
   * @example
   * TestActionPlan
   */
  actionPlanName?: string;
  /**
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  /**
   * @example
   * 2025-08-10 18:28:05
   */
  createTime?: string;
  /**
   * @example
   * 1000
   */
  desiredCapacity?: number;
  /**
   * @example
   * General
   */
  level?: string;
  /**
   * @example
   * bHMgLWFsCmxzIC1hbGggfCB3YyAtbA==
   */
  prologScript?: string;
  regions?: GetActionPlanResponseBodyRegions[];
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  resources?: GetActionPlanResponseBodyResources[];
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  totalCapacity?: number;
  /**
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

