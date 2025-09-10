// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesResponseBodyPrometheusInstancesTags extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusInstancesResponseBodyPrometheusInstances extends $dara.Model {
  /**
   * @example
   * readWrite
   */
  accessType?: string;
  /**
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @example
   * remote-write
   */
  instanceType?: string;
  /**
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @example
   * arms
   */
  product?: string;
  /**
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @example
   * cn-nanjing
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @example
   * Prometheus
   */
  resourceType?: string;
  /**
   * @example
   * Pending2Running
   */
  status?: string;
  supportAuthTypes?: string[];
  tags?: ListPrometheusInstancesResponseBodyPrometheusInstancesTags[];
  /**
   * @example
   * 17073812345
   */
  userId?: string;
  /**
   * @example
   * *
   */
  version?: string;
  /**
   * @example
   * default-cms-115214006-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'accessType',
      createTime: 'createTime',
      instanceType: 'instanceType',
      paymentType: 'paymentType',
      product: 'product',
      prometheusInstanceId: 'prometheusInstanceId',
      prometheusInstanceName: 'prometheusInstanceName',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      status: 'status',
      supportAuthTypes: 'supportAuthTypes',
      tags: 'tags',
      userId: 'userId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      createTime: 'string',
      instanceType: 'string',
      paymentType: 'string',
      product: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      status: 'string',
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPrometheusInstancesResponseBodyPrometheusInstancesTags },
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportAuthTypes)) {
      $dara.Model.validateArray(this.supportAuthTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  prometheusInstances?: ListPrometheusInstancesResponseBodyPrometheusInstances[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      prometheusInstances: 'prometheusInstances',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prometheusInstances: { 'type': 'array', 'itemType': ListPrometheusInstancesResponseBodyPrometheusInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusInstances)) {
      $dara.Model.validateArray(this.prometheusInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

