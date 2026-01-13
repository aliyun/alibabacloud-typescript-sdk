// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActionPlanShrinkRequest extends $dara.Model {
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
  regionsShrink?: string;
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
  resourcesShrink?: string;
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
      regionsShrink: 'Regions',
      resourceType: 'ResourceType',
      resourcesShrink: 'Resources',
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
      regionsShrink: 'string',
      resourceType: 'string',
      resourcesShrink: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

