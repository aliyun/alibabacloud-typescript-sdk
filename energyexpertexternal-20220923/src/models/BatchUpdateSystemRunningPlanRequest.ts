// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateSystemRunningPlanRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-30
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
   * 37.1
   */
  maxCarbonDioxide?: number;
  /**
   * @example
   * 25.3
   */
  maxTem?: number;
  /**
   * @example
   * 20.1
   */
  minTem?: number;
  /**
   * @example
   * 0
   */
  seasonMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-21
   */
  startTime?: string;
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
      seasonMode: 'seasonMode',
      startTime: 'startTime',
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
      seasonMode: 'number',
      startTime: 'string',
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

