// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRunningPlanRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  controlType?: number;
  /**
   * @example
   * 0
   */
  dateType?: number;
  /**
   * @example
   * 05:00:00
   */
  earliestStartupTime?: string;
  /**
   * @example
   * 2024-07-21
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***
   */
  factoryId?: string;
  /**
   * @example
   * 05:30:00
   */
  latestShutdownTime?: string;
  /**
   * @example
   * 2.1
   */
  maxCarbonDioxide?: number;
  /**
   * @example
   * 3.1
   */
  maxTem?: number;
  /**
   * @example
   * 2.1
   */
  minTem?: number;
  /**
   * @example
   * ib
   */
  pKey?: string;
  /**
   * @example
   * 0
   */
  seasonMode?: number;
  /**
   * @example
   * 2024-07-20
   */
  startTime?: string;
  /**
   * @example
   * 2024-07-31
   */
  statisticsTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * system1
   */
  systemId?: string;
  /**
   * @example
   * 05:30:00
   */
  workingEndTime?: string;
  /**
   * @example
   * 05:00:00
   */
  workingStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlType: 'controlType',
      dateType: 'dateType',
      earliestStartupTime: 'earliestStartupTime',
      endTime: 'endTime',
      factoryId: 'factoryId',
      latestShutdownTime: 'latestShutdownTime',
      maxCarbonDioxide: 'maxCarbonDioxide',
      maxTem: 'maxTem',
      minTem: 'minTem',
      pKey: 'pKey',
      seasonMode: 'seasonMode',
      startTime: 'startTime',
      statisticsTime: 'statisticsTime',
      systemId: 'systemId',
      workingEndTime: 'workingEndTime',
      workingStartTime: 'workingStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlType: 'number',
      dateType: 'number',
      earliestStartupTime: 'string',
      endTime: 'string',
      factoryId: 'string',
      latestShutdownTime: 'string',
      maxCarbonDioxide: 'number',
      maxTem: 'number',
      minTem: 'number',
      pKey: 'string',
      seasonMode: 'number',
      startTime: 'string',
      statisticsTime: 'string',
      systemId: 'string',
      workingEndTime: 'string',
      workingStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

