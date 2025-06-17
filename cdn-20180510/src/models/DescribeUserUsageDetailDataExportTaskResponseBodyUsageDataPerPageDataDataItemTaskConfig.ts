// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2018-08-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2018-07-31T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

