// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * hive-58mq6jynvgxxmlid3pt39x6gk-0
   */
  hiveId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * as-d135ca4425c24b99b79cd0b6c552cac9
   */
  instanceId?: string;
  /**
   * @remarks
   * The package ID.
   * 
   * @example
   * pk-db3394401cc8403f85e4d72d99b52449
   */
  planId?: string;
  /**
   * @remarks
   * The specification.
   * 
   * @example
   * crs.xic.s1
   */
  spec?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Idle
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      expireTime: 'ExpireTime',
      hiveId: 'HiveId',
      instanceId: 'InstanceId',
      planId: 'PlanId',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      expireTime: 'string',
      hiveId: 'string',
      instanceId: 'string',
      planId: 'string',
      spec: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeWorkersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of payloads.
   */
  instances?: ListEdgeWorkersResponseBodyInstances[];
  /**
   * @remarks
   * The page number of the query. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 100. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListEdgeWorkersResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

