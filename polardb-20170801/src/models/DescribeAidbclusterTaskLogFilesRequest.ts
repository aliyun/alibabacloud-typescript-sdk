// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskLogFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model operator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-bp10gr***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The log type. Set the value to:
   * 
   * - **sls**
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  logType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * The default value is **100**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * @example
   * pc-bp10ze***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to return the results in reverse order. The default value is *false*.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start of the time range to query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T14:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      logType: 'LogType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relativeDBClusterId: 'RelativeDBClusterId',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      logType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      relativeDBClusterId: 'string',
      reverse: 'boolean',
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

