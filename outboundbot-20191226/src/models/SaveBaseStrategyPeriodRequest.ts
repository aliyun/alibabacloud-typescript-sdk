// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBaseStrategyPeriodRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * fe51eca2-a904-4b4d-b3ff-31be334b9500
   */
  entryId?: string;
  /**
   * @remarks
   * Make outbound calls only on weekdays. Defaults to false.
   * 
   * @example
   * false
   */
  onlyWeekdays?: boolean;
  /**
   * @remarks
   * Make outbound calls only on non-holiday days. Defaults to false.
   * 
   * @example
   * false
   */
  onlyWorkdays?: boolean;
  /**
   * @remarks
   * Policy level (required)
   * 
   * - 2: Instance
   * 
   * @example
   * 2
   */
  strategyLevel?: number;
  /**
   * @remarks
   * Running time (deprecated)
   * 
   * @example
   * []
   */
  workingTime?: string[];
  /**
   * @remarks
   * Running time
   * 
   * @example
   * [{"beginTime":"09:00:00","endTime":"21:00:00"}]
   */
  workingTimeFramesJson?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      onlyWeekdays: 'OnlyWeekdays',
      onlyWorkdays: 'OnlyWorkdays',
      strategyLevel: 'StrategyLevel',
      workingTime: 'WorkingTime',
      workingTimeFramesJson: 'WorkingTimeFramesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      onlyWeekdays: 'boolean',
      onlyWorkdays: 'boolean',
      strategyLevel: 'number',
      workingTime: { 'type': 'array', 'itemType': 'string' },
      workingTimeFramesJson: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.workingTime)) {
      $dara.Model.validateArray(this.workingTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

