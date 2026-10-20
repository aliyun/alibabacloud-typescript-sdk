// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterEventsResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The event level.
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
   * Start to upgrade NodePool nodePool/npdd89dc2b76c04f14b06774883b******
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

export class DescribeClusterEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the event.
   */
  data?: DescribeClusterEventsResponseBodyEventsData;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * e-9ad04f72-8ee7-46bf-a02c-e4a06b39****
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
   * The operation object associated with the event.
   * 
   * @example
   * npdd89dc2b76c04f14b06774883b******
   */
  subject?: string;
  /**
   * @remarks
   * The start time of the event. The time is in ISO 8601 format and includes time zone information.
   * 
   * @example
   * 2025-05-14T10:00:56+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - cluster_create: Creates a cluster.
   * - cluster_scaleout: Scales out a cluster.
   * - cluster_attach: Adds existing nodes.
   * - cluster_delete: Deletes a cluster.
   * - cluster_upgrade: Upgrades a cluster.
   * - cluster_migrate: Migrates a cluster.
   * - cluster_node_delete: Removes a node.
   * - cluster_node_drain: Drains a node.
   * - cluster_modify: Modifies a cluster.
   * - cluster_configuration_modify: Modifies the control configurations of a cluster.
   * - cluster_addon_install: Installs a component.
   * - cluster_addon_upgrade: Upgrades a component.
   * - cluster_addon_uninstall: Uninstalls a component.
   * - runtime_upgrade: Upgrades the runtime.
   * - nodepool_upgrade: Upgrades a node pool.
   * - nodepool_update: Updates a node pool.
   * 
   * @example
   * nodepool_update
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
      data: DescribeClusterEventsResponseBodyEventsData,
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

export class DescribeClusterEventsResponseBodyPageInfo extends $dara.Model {
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
   * The maximum number of results to return per page.
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
   * 126
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

export class DescribeClusterEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  events?: DescribeClusterEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination token.
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClusterEventsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'next_token',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClusterEventsResponseBodyEvents },
      nextToken: 'string',
      pageInfo: DescribeClusterEventsResponseBodyPageInfo,
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

