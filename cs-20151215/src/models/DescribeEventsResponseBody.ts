// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The event level. Valid values:
   * - info: informational.
   * - warning: warning.
   * - error: error.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * The event status.
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
   * The event description.
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
   * The event source.
   * 
   * @example
   * task
   */
  source?: string;
  /**
   * @remarks
   * The event subject.
   * 
   * @example
   * np6a5c86f4ecae436f8f4a3dc034a7****
   */
  subject?: string;
  /**
   * @remarks
   * The event start time.
   * 
   * @example
   * 2025-04-23T20:48:01+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * - `cluster_create`: creates a cluster.
   * - `cluster_scaleout`: scales out a cluster.
   * - `cluster_attach`: adds existing nodes.
   * - `cluster_delete`: deletes a cluster.
   * - `cluster_upgrade`: upgrades a cluster.
   * - `cluster_migrate`: migrates a cluster.
   * - `cluster_node_delete`: removes nodes.
   * - `cluster_node_drain`: drains nodes.
   * - `cluster_modify`: modifies a cluster.
   * - `cluster_configuration_modify`: modifies cluster management configurations.
   * - `cluster_addon_install`: installs a component.
   * - `cluster_addon_upgrade`: upgrades a component.
   * - `cluster_addon_uninstall`: uninstalls a component.
   * - `runtime_upgrade`: upgrades the runtime.
   * - `nodepool_upgrade`: upgrades a node pool.
   * - `nodepool_update`: updates a node pool.
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
   * The page number for the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
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
   * The event details.
   */
  events?: DescribeEventsResponseBodyEvents[];
  /**
   * @remarks
   * The query token. This value is the next_token value returned by the previous API call.
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

