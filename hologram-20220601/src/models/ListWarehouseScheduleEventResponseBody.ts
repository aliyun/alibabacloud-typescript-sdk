// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleEventResponseBodyEventList extends $dara.Model {
  /**
   * @example
   * 2
   */
  clusterCount?: number;
  /**
   * @example
   * 32
   */
  clusterCpu?: number;
  /**
   * @example
   * 48
   */
  elasticCpu?: number;
  /**
   * @example
   * ScaleUp
   */
  elasticType?: string;
  /**
   * @example
   * AlterWarehouse
   */
  eventName?: string;
  /**
   * @example
   * 2024-07-22T09:43:02.638Z
   */
  eventTime?: string;
  /**
   * @example
   * insufficient resource
   */
  failedReason?: string;
  /**
   * @example
   * 2
   */
  initClusterCount?: number;
  /**
   * @example
   * 0
   */
  originalElasticCpu?: number;
  /**
   * @example
   * 64
   */
  reservedCpu?: number;
  /**
   * @example
   * success
   */
  result?: string;
  /**
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
  eventList?: ListWarehouseScheduleEventResponseBodyEventList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

