// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActionPlanRequestRegions extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityGroupId?: string[];
  securityGroupIds?: string[];
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
   * @example
   * 2
   */
  cores?: number;
  /**
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
  regions?: CreateActionPlanRequestRegions[];
  /**
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  resources?: CreateActionPlanRequestResources[];
  /**
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

