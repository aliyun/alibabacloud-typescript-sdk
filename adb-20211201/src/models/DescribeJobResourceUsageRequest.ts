// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResourceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Format: <i>yyyy-MM-ddTHH:mm:ssZ</i> (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-17T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - 30
   * - 50
   * - 100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  sparkAppName?: string;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-MM-ddTHH:mm:ssZ</i> (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-04T03:45:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sparkAppName: 'SparkAppName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sparkAppName: 'string',
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

