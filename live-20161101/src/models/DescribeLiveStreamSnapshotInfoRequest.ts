// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamSnapshotInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain of the streamer.
   * > - When you specify DomainName, make sure that the domain name is a live streaming domain name and that the user who calls this operation has the permissions to operate on the specified domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The interval between EndTime and StartTime cannot exceed **1** day. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries to return in a single call. Valid values: **1 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc** (default): ascending order.
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the stream. Make sure that the specified stream name exists within the query time range.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      limit: 'Limit',
      order: 'Order',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      limit: 'number',
      order: 'string',
      ownerId: 'number',
      securityToken: 'string',
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

