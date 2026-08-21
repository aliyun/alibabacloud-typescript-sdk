// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application used during recording.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The domain name used during recording.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the recording operation (when the live stream recording begins). The end time must be later than the start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method for results. Valid values:
   * 
   * - **CreationTime:Desc** (default): sorted by creation time in descending order.
   * - **CreationTime:Asc**: sorted by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the recording operation (when the live stream recording begins). Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream used during recording.
   * 
   * @example
   * live-test
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

