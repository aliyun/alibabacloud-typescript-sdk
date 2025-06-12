// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCallerReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1900000****
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1646841600000
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1646928000000
   */
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: 'string',
      instanceId: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

