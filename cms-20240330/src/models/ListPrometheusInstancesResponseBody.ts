// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesResponseBodyPrometheusInstancesTags extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
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
   * @remarks
   * Access type:
   * readWrite, readOnly, httpReadOnly
   * 
   * @example
   * readWrite
   */
  accessType?: string;
  /**
   * @remarks
   * Instance creation time, using UTC+0 time, formatted as yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * Instance type.
   * 
   * @example
   * remote-write
   */
  instanceType?: string;
  /**
   * @remarks
   * POSTPAY: Postpaid by metric.
   * POSTPAY_GB: Postpaid by write volume.
   * PREPAY: Prepaid.
   * FREE: Free.
   * 
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @remarks
   * Product to which the prom instance belongs
   * 
   * @example
   * arms
   */
  product?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-nanjing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * Prometheus
   */
  resourceType?: string;
  /**
   * @remarks
   * Backend data storage status
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  /**
   * @remarks
   * Supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * Tags key.
   */
  tags?: ListPrometheusInstancesResponseBodyPrometheusInstancesTags[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 17073812345
   */
  userId?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * *
   */
  version?: string;
  /**
   * @remarks
   * Workspace to which the Prometheus instance belongs
   * 
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
   * @remarks
   * Maximum number of records to return.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * List of Prometheus instances.
   */
  prometheusInstances?: ListPrometheusInstancesResponseBodyPrometheusInstances[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instances
   * 
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

