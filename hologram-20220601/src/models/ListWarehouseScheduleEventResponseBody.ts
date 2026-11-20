// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleEventResponseBodyEventList extends $dara.Model {
  /**
   * @remarks
   * The number of clusters.
   * 
   * @example
   * 2
   */
  clusterCount?: number;
  /**
   * @remarks
   * The cluster specifications.
   * 
   * @example
   * 32
   */
  clusterCpu?: number;
  /**
   * @remarks
   * The number of elastic CPUs.
   * 
   * @example
   * 48
   */
  elasticCpu?: number;
  /**
   * @remarks
   * The elastic scaling type.
   * 
   * @example
   * ScaleUp
   */
  elasticType?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * AlterWarehouse
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the event occurred (UTC).
   * 
   * @example
   * 2024-07-22T09:43:02.638Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * insufficient resource
   */
  failedReason?: string;
  /**
   * @remarks
   * The number of reserved clusters, which refers to non-elastic clusters.
   * 
   * @example
   * 2
   */
  initClusterCount?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * 0
   */
  originalElasticCpu?: number;
  /**
   * @remarks
   * The number of reserved CPUs, which refers to non-elastic CPUs.
   * 
   * @example
   * 64
   */
  reservedCpu?: number;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The name of the compute group.
   * 
   * @example
   * init_warehouse
   */
  warehouseName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      clusterCpu: 'ClusterCpu',
      elasticCpu: 'ElasticCpu',
      elasticType: 'ElasticType',
      eventName: 'EventName',
      eventTime: 'EventTime',
      failedReason: 'FailedReason',
      initClusterCount: 'InitClusterCount',
      originalElasticCpu: 'OriginalElasticCpu',
      reservedCpu: 'ReservedCpu',
      result: 'Result',
      warehouseName: 'WarehouseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      clusterCpu: 'number',
      elasticCpu: 'number',
      elasticType: 'string',
      eventName: 'string',
      eventTime: 'string',
      failedReason: 'string',
      initClusterCount: 'number',
      originalElasticCpu: 'number',
      reservedCpu: 'number',
      result: 'string',
      warehouseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehouseScheduleEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  eventList?: ListWarehouseScheduleEventResponseBodyEventList[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * E16D32D4-DF86-1180-8220-0D39770A5AF9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 120
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': ListWarehouseScheduleEventResponseBodyEventList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

