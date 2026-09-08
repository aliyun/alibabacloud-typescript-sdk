// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressStage } from "./RlprogressStage";


export class RLProgressStages extends $dara.Model {
  /**
   * @remarks
   * 当前所处阶段的下标
   * 
   * @example
   * 6
   */
  currentIndex?: number;
  /**
   * @remarks
   * disagg / colocate / 空串
   * 
   * @example
   * colocate
   */
  mode?: string;
  /**
   * @remarks
   * 阶段列表，按流水线顺序
   * 
   * @example
   * [{"Key":"generation","Label":"生成","Marker":"start/end generation","Optional":false,"Status":"done","StartTime":1787474487,"EndTime":1787474487,"Duration":0.483}]
   */
  stages?: RLProgressStage[];
  /**
   * @remarks
   * 本 step 的阶段流水线是否已走完
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

