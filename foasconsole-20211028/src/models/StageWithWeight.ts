// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StageWithWeight extends $dara.Model {
  /**
   * @remarks
   * The ordinal number of the execution stage.
   * 
   * @example
   * 0
   */
  stepIndex?: number;
  /**
   * @remarks
   * The name of the execution stage.
   */
  stepName?: string;
  /**
   * @remarks
   * The weight of the stage in the overall progress.
   * 
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      stepIndex: 'StepIndex',
      stepName: 'StepName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepIndex: 'number',
      stepName: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

