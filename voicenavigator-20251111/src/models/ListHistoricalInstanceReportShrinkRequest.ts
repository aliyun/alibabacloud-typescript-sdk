// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalInstanceReportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the query. The server rounds this value up to the next hour.
   * 
   * @example
   * 1775131200000
   */
  endTime?: number;
  /**
   * @remarks
   * A JSON array of instance IDs. The array can contain up to 100 IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The number of the page to return. The maximum value is 100.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for the query. The server rounds this value up to the next hour.
   * 
   * @example
   * 1775044800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

