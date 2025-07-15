// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMonitorListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * >  You can obtain the monitoring session ID from the response parameter MonitorId of the [CreateLiveStreamMonitor](https://help.aliyun.com/document_detail/2848129.html) operation. If you leave this parameter empty, the data of all monitoring sessions is returned.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  /**
   * @remarks
   * The sorting order of monitoring sessions. Valid values:
   * 
   * *   0: Monitoring sessions are sorted by status.
   * *   1: Monitoring sessions are sorted by start time in descending order.
   * *   2: Monitoring sessions are sorted by start time in ascending order.
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
   * The number of monitoring sessions to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The status of the monitoring session. Valid values:
   * 
   * *   1: Monitoring
   * *   0: Unmonitored
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

