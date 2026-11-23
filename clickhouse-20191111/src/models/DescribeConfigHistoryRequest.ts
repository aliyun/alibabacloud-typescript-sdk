// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query all clusters in a specific region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-22T10:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-11T06:27:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

