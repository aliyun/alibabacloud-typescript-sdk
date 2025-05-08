// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnMeasurementDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-30T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-mm-ddthh:mm:ssz format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T16:00:00Z
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

