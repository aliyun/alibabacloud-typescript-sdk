// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressStage } from "./RlprogressStage";


export class RLProgressStages extends $dara.Model {
  /**
   * @remarks
   * The index of the current stage.
   * 
   * @example
   * 6
   */
  currentIndex?: number;
  /**
   * @remarks
   * The disagg, colocate, or empty string.
   * 
   * @example
   * colocate
   */
  mode?: string;
  /**
   * @remarks
   * The list of stages in pipeline order.
   * 
   * @example
   * [{"Key":"generation","Label":"Generation","Marker":"start/end generation","Optional":false,"Status":"done","StartTime":1787474487,"EndTime":1787474487,"Duration":0.483}]
   */
  stages?: RLProgressStage[];
  /**
   * @remarks
   * Indicates whether the stage pipeline for this step is completed.
   * 
   * @example
   * false
   */
  stepDone?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      mode: 'Mode',
      stages: 'Stages',
      stepDone: 'StepDone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      mode: 'string',
      stages: { 'type': 'array', 'itemType': RLProgressStage },
      stepDone: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

