// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipCurrentStepRequest extends $dara.Model {
  /**
   * @remarks
   * The current operation step of the task.
   * 
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @remarks
   * The region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The import task ID.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentStep: 'CurrentStep',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStep: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

