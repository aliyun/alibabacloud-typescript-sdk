// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @example
   * 5345398
   */
  eventId?: string;
  /**
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @example
   * Succeed
   */
  eventStatus?: string;
  /**
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @example
   * 32077515
   */
  taskId?: string;
  /**
   * @example
   * 2025-01-03T12:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      eventCategory: 'EventCategory',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      taskId: 'TaskId',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      eventCategory: 'string',
      eventId: 'string',
      eventLevel: 'string',
      eventStatus: 'string',
      eventType: 'string',
      fromStartTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      taskId: 'string',
      toStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

