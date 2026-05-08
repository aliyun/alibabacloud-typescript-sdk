// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * *   info
   * *   warning
   * *   error
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * The status of the event.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cf62854ac2130470897be7a27ed1f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the event.
   */
  data?: DescribeEventsResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e-dba703c8-953b-40d8-82e8-cb713590****
   */
  eventId?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * task
   */
  source?: string;
  /**
   * @remarks
   * The subject of the event.
   * 
   * @example
   * np6a5c86f4ecae436f8f4a3dc034a7****
   */
  subject?: string;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2025-04-23T20:48:01+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   `cluster_create`: cluster creation.
   * *   `cluster_scaleout`: cluster scale-out.
   * *   `cluster_attach`: node addition.
   * *   `cluster_delete`: cluster deletion.
   * *   `cluster_upgrade`: cluster upgrades.
   * *   `cluster_migrate`: cluster migration.
   * *   `cluster_node_delete`: node removal.
   * *   `cluster_node_drain`: node draining.
   * *   `cluster_modify`: cluster modifications.
   * *   `cluster_configuration_modify`: modifications of control plane configurations.
   * *   `cluster_addon_install`: component installation.
   * *   `cluster_addon_upgrade`: component updates.
   * *   `cluster_addon_uninstall`: component uninstallation.
   * *   `runtime_upgrade`: runtime updates.
   * *   `nodepool_upgrade`: node pool upgrades.
   * *   `nodepool_update`: node pool updates.
   * 
   * @example
   * nodepool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      data: 'data',
      eventId: 'event_id',
      source: 'source',
      subject: 'subject',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: DescribeEventsResponseBodyEventsData,
      eventId: 'string',
      source: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyPageInfo extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the events.
   */
  events?: DescribeEventsResponseBodyEvents[];
  nextToken?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeEventsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'next_token',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEvents },
      nextToken: 'string',
      pageInfo: DescribeEventsResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

