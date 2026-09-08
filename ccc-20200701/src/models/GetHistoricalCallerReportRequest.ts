// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCallerReportRequest extends $dara.Model {
  /**
   * @remarks
   * Calling number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1900000****
   */
  callingNumber?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Start time of the query, formatted as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646841600000
   */
  startTime?: number;
  /**
   * @remarks
   * End time of the query, formatted as a UNIX timestamp in milliseconds.
   * 
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

