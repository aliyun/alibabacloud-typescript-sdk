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
  regionsShrink?: string;
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
  resourcesShrink?: string;
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

