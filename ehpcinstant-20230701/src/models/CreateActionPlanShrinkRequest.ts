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
  regionsShrink?: string;
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
  resourcesShrink?: string;
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

