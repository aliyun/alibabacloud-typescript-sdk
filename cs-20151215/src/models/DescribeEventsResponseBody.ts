// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * - info: An informational message.
   * 
   * - warning: A warning.
   * 
   * - error: An error.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * A human-readable description of the event.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * A brief, machine-readable string that describes the reason for the event.
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
   * The cluster ID.
   * 
   * @example
   * cf62854ac2130470897be7a27ed1f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The event details.
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
   * The object that the event is about.
   * 
   * @example
   * np6a5c86f4ecae436f8f4a3dc034a7****
   */
  subject?: string;
  /**
   * @remarks
   * The event timestamp.
   * 
   * @example
   * 2025-04-23T20:48:01+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - `cluster_create`: A cluster is created.
   * 
   * - `cluster_scaleout`: A cluster is scaled out.
   * 
   * - `cluster_attach`: An existing node is added.
   * 
   * - `cluster_delete`: A cluster is deleted.
   * 
   * - `cluster_upgrade`: A cluster is upgraded.
   * 
   * - `cluster_migrate`: A cluster is migrated.
   * 
   * - `cluster_node_delete`: A node is removed.
   * 
   * - `cluster_node_drain`: A node is drained.
   * 
   * - `cluster_modify`: A cluster is modified.
   * 
   * - `cluster_configuration_modify`: The control plane configuration of a cluster is modified.
   * 
   * - `cluster_addon_install`: An add-on is installed.
   * 
   * - `cluster_addon_upgrade`: An add-on is upgraded.
   * 
   * - `cluster_addon_uninstall`: An add-on is uninstalled.
   * 
   * - `runtime_upgrade`: The runtime is upgraded.
   * 
   * - `nodepool_upgrade`: A node pool is upgraded.
   * 
   * - `nodepool_update`: A node pool is updated.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that match the query.
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
   * A list of events.
   */
  events?: DescribeEventsResponseBodyEvents[];
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is absent from the response, all results have been returned.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
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

