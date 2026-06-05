// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  creationTime?: string;
  /**
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  expireTime?: string;
  /**
   * @example
   * hive-58mq6jynvgxxmlid3pt39x6gk-0
   */
  hiveId?: string;
  /**
   * @example
   * as-d135ca4425c24b99b79cd0b6c552cac9
   */
  instanceId?: string;
  /**
   * @example
   * pk-db3394401cc8403f85e4d72d99b52449
   */
  planId?: string;
  /**
   * @example
   * crs.xic.s1
   */
  spec?: string;
  /**
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
  instances?: ListEdgeWorkersResponseBodyInstances[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
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

