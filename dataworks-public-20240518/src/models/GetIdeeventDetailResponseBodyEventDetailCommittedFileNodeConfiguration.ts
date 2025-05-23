// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList";
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList";


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration extends $dara.Model {
  /**
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  inputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList[];
  outputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList[];
  /**
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @example
   * NORMAL
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      inputList: 'InputList',
      outputList: 'OutputList',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      inputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

