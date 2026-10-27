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
   * The event details.
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
   * The event description.
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
   * - cluster_create: cluster creation
   * - cluster_scaleout: cluster scale-out
   * - cluster_attach: addition of existing nodes
   * - cluster_delete: cluster deletion
   * - cluster_upgrade: cluster upgrade
   * - cluster_migrate: cluster migration
   * - cluster_node_delete: node removal
   * - cluster_node_drain: node draining
   * - cluster_modify: cluster modification
   * - cluster_configuration_modify: cluster management configuration modification
   * - cluster_addon_install: add-on installation
   * - cluster_addon_upgrade: add-on upgrade
   * - cluster_addon_uninstall: add-on uninstallation
   * - runtime_upgrade: runtime upgrade
   * - nodepool_upgrade: node pool upgrade
   * - nodepool_update: node pool update
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
   * The maximum number of results to display on each page.
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

