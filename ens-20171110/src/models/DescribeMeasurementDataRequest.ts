// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeasurementDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-08-30T00:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The start time in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-06-01T00:00:00Z
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

