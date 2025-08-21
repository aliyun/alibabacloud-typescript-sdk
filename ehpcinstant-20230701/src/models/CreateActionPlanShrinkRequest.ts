// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActionPlanShrinkRequest extends $dara.Model {
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
  regionsShrink?: string;
  /**
   * @example
   * VCpuCapacity
   */
  resourceType?: string;
  resourcesShrink?: string;
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

