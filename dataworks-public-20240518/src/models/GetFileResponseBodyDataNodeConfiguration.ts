// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileResponseBodyDataNodeConfigurationInputList } from "./GetFileResponseBodyDataNodeConfigurationInputList";
import { GetFileResponseBodyDataNodeConfigurationInputParameters } from "./GetFileResponseBodyDataNodeConfigurationInputParameters";
import { GetFileResponseBodyDataNodeConfigurationOutputList } from "./GetFileResponseBodyDataNodeConfigurationOutputList";
import { GetFileResponseBodyDataNodeConfigurationOutputParameters } from "./GetFileResponseBodyDataNodeConfigurationOutputParameters";


export class GetFileResponseBodyDataNodeConfiguration extends $dara.Model {
  /**
   * @example
   * true
   */
  applyScheduleImmediately?: string;
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
  /**
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: string;
  /**
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  inputParameters?: GetFileResponseBodyDataNodeConfigurationInputParameters[];
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  outputParameters?: GetFileResponseBodyDataNodeConfigurationOutputParameters[];
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
  /**
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @example
   * 1
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      applyScheduleImmediately: 'ApplyScheduleImmediately',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      ignoreParentSkipRunningProperty: 'IgnoreParentSkipRunningProperty',
      imageId: 'ImageId',
      inputList: 'InputList',
      inputParameters: 'InputParameters',
      outputList: 'OutputList',
      outputParameters: 'OutputParameters',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScheduleImmediately: 'string',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      ignoreParentSkipRunningProperty: 'string',
      imageId: 'string',
      inputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputList },
      inputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputParameters },
      outputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputList },
      outputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputParameters },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.inputParameters)) {
      $dara.Model.validateArray(this.inputParameters);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    if(Array.isArray(this.outputParameters)) {
      $dara.Model.validateArray(this.outputParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

