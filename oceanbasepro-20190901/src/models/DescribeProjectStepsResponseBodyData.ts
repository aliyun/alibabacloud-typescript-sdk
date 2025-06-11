// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectStepsResponseBodyDataExtraInfo } from "./DescribeProjectStepsResponseBodyDataExtraInfo";


export class DescribeProjectStepsResponseBodyData extends $dara.Model {
  description?: string;
  extraInfo?: DescribeProjectStepsResponseBodyDataExtraInfo;
  /**
   * @example
   * 2020-05-22T17:04:18
   */
  finishTime?: string;
  /**
   * @example
   * PRE_CHECK
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
      extraInfo: DescribeProjectStepsResponseBodyDataExtraInfo,
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

