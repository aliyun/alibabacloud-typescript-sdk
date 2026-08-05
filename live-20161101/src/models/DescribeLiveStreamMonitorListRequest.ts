// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMonitorListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * > Obtain the MonitorId value from the response parameters of the [CreateLiveStreamMonitor](https://help.aliyun.com/document_detail/2848129.html) operation. If you leave this parameter empty, the data of all monitoring sessions is returned.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  /**
   * @remarks
   * The order in which to sort the monitoring sessions. Valid values:
   * 
   * - 0: Default. The monitoring sessions are sorted by monitoring status in descending order (active sessions are listed first). The start time is not used for sorting.
   * 
   * - 1: The monitoring sessions are sorted by start time in descending order.
   * 
   * - 2: The monitoring sessions are sorted by start time in ascending order.
   * 
   * @example
   * 1
   */
  orderRule?: number;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of monitoring sessions to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the monitoring session. Valid values:
   * 
   * - 1: The session is being monitored.
   * 
   * - 0: The session is not being monitored.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      monitorId: 'MonitorId',
      orderRule: 'OrderRule',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorId: 'string',
      orderRule: 'number',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

