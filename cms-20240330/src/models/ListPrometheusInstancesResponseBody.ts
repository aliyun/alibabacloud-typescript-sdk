// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesResponseBodyPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * The permission type. Valid values: readWrite, readOnly, and httpReadOnly.
   * 
   * @example
   * readWrite
   */
  accessType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in UTC and the format is yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * remote-write
   */
  instanceType?: string;
  /**
   * @remarks
   * POSTPAY: Pay-as-you-go, billed by metrics.
   * POSTPAY_GB: Pay-as-you-go, billed by data written.
   * PREPAY: Subscription.
   * FREE: Free.
   * 
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @remarks
   * The product to which the Prometheus instance belongs.
   * 
   * @example
   * arms
   */
  product?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-nanjing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Prometheus
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the backend data storage.
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  /**
   * @remarks
   * The supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17073812345
   */
  userId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * *
   */
  version?: string;
  /**
   * @remarks
   * The workspace to which the Prometheus instance belongs.
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
      resourceType: 'resourceType',
      status: 'status',
      supportAuthTypes: 'supportAuthTypes',
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
      resourceType: 'string',
      status: 'string',
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportAuthTypes)) {
      $dara.Model.validateArray(this.supportAuthTypes);
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
   * The maximum number of records returned.
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
   * The token for the next query.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of Prometheus instances.
   */
  prometheusInstances?: ListPrometheusInstancesResponseBodyPrometheusInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
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

