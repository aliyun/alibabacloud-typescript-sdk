// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end of the query time which is in timestamp format (measured in millisecond) .
   * 
   * >  The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1591326000000
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the query time which is in timestamp format (measured in millisecond).
   * 
   * This parameter is required.
   * 
   * @example
   * 1591327800000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

