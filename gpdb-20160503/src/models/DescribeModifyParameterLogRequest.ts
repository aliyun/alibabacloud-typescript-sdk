// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in a specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-9dpm71ov2wxxq****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format. The time must be in UTC and later than the start time.
   * 
   * @example
   * 2023-01-03T20:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format. The time must be in UTC.
   * 
   * @example
   * 2023-01-03T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

