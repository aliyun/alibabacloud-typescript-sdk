// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyDataStepsExtraInfo } from "./ListProjectsResponseBodyDataStepsExtraInfo";


export class ListProjectsResponseBodyDataSteps extends $dara.Model {
  description?: string;
  extraInfo?: ListProjectsResponseBodyDataStepsExtraInfo;
  /**
   * @example
   * 2020-05-22T17:05:18
   */
  finishTime?: string;
  /**
   * @example
   * TRANSFER_PRECHECK
   */
  name?: string;
  /**
   * @example
   * 1
   */
  order?: number;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 2020-05-22T17:04:18
   */
  startTime?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * null
   */
  stepInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      name: 'Name',
      order: 'Order',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      stepInfo: 'StepInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extraInfo: ListProjectsResponseBodyDataStepsExtraInfo,
      finishTime: 'string',
      name: 'string',
      order: 'number',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      stepInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(this.stepInfo) {
      $dara.Model.validateMap(this.stepInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

