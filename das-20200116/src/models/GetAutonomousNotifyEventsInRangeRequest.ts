// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutonomousNotifyEventsInRangeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568265711221
   */
  endTime?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  eventContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The urgency level of the events. If you specify this parameter, the MinLevel parameter does not take effect. Valid values:
   * 
   * *   **Notice**: events for which the system sends notifications.
   * *   **Optimization**: events that need to be optimized.
   * *   **Warn**: events for which the system sends warnings.
   * *   **Critical**: critical events.
   * 
   * @example
   * Warn
   */
  level?: string;
  /**
   * @remarks
   * The minimum urgency level of the events. Valid values:
   * 
   * *   **Notice**: events for which the system sends notifications.
   * *   **Optimization**: events that need to be optimized.
   * *   **Warn**: events for which the system sends warnings.
   * *   **Critical**: critical events.
   * 
   * @example
   * Notice
   */
  minLevel?: string;
  /**
   * @remarks
   * The ID of the node in a PolarDB for MySQL cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the node ID returned by the DBNodeId response parameter.
   * 
   * >  You must specify the node ID if your database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageOffset?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568269711000
   */
  startTime?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventContext: 'EventContext',
      instanceId: 'InstanceId',
      level: 'Level',
      minLevel: 'MinLevel',
      nodeId: 'NodeId',
      pageOffset: 'PageOffset',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventContext: 'string',
      instanceId: 'string',
      level: 'string',
      minLevel: 'string',
      nodeId: 'string',
      pageOffset: 'string',
      pageSize: 'string',
      startTime: 'string',
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

