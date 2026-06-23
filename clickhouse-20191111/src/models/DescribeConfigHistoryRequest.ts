// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query the information about all clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Use the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-22T10:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start of the time range to query. Use the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
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

