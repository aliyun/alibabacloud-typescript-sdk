// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientConfSetupRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Security Center agent.
   * 
   * *   cpu: the maximum CPU utilization that can be occupied by the Security Center agent on the server
   * *   mem: the maximum memory usage that can be occupied by the Security Center agent on the server
   * 
   * @example
   * {
   *       "cpu": "20"
   * }
   */
  strategyConfig?: string;
  /**
   * @remarks
   * The type of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  strategyTag?: string;
  /**
   * @remarks
   * The value of the tag. Valid values:
   * 
   * *   major
   * *   advanced
   * *   basic
   * 
   * This parameter is required.
   * 
   * @example
   * major
   */
  strategyTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      strategyConfig: 'StrategyConfig',
      strategyTag: 'StrategyTag',
      strategyTagValue: 'StrategyTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyConfig: 'string',
      strategyTag: 'string',
      strategyTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

