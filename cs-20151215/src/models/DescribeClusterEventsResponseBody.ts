// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterEventsResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Start to upgrade NodePool nodePool/npdd89dc2b76c04f14b06774883b******
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

export class DescribeClusterEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The event data.
   */
  data?: DescribeClusterEventsResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e-9ad04f72-8ee7-46bf-a02c-e4a06b39****
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
   * The object associated with the event.
   * 
   * @example
   * npdd89dc2b76c04f14b06774883b******
   */
  subject?: string;
  /**
   * @remarks
   * The time the event occurred.
   * 
   * @example
   * 2025-05-14T10:00:56+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - `cluster_create`: Cluster creation.
   * 
   * - `cluster_scaleout`: Cluster scale-out.
   * 
   * - `cluster_attach`: Attaching existing nodes to a cluster.
   * 
   * - `cluster_delete`: Cluster deletion.
   * 
   * - `cluster_upgrade`: Cluster upgrade.
   * 
   * - `cluster_migrate`: Cluster migration.
   * 
   * - `cluster_node_delete`: Node removal.
   * 
   * - `cluster_node_drain`: Node drain.
   * 
   * - `cluster_modify`: Cluster modification.
   * 
   * - `cluster_configuration_modify`: Control plane configuration modification.
   * 
   * - `cluster_addon_install`: Add-on installation.
   * 
   * - `cluster_addon_upgrade`: Add-on upgrade.
   * 
   * - `cluster_addon_uninstall`: Add-on uninstallation.
   * 
   * - `runtime_upgrade`: Container runtime upgrade.
   * 
   * - `nodepool_upgrade`: Node pool upgrade.
   * 
   * - `nodepool_update`: Node pool update.
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
   * The token used to retrieve the next page of results. If this parameter is empty, there are no more results to return.
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

