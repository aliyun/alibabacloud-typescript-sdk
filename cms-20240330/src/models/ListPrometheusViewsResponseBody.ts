// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsResponseBodyPrometheusViews extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in UTC+0 in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2025-07-12T02:18:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - prom-view: new version of the aggregate view
   * - global-view: legacy version of the aggregate view
   * 
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method. The value is fixed to FREE.
   * 
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @remarks
   * The product to which the Prometheus instance belongs, such as ARMS or CMS.
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * The number of Prometheus instances included in the view.
   * 
   * @example
   * 2
   */
  prometheusInstanceCount?: number;
  /**
   * @remarks
   * The ID of the Prometheus view.
   * 
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @remarks
   * The name of the Prometheus view.
   * 
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed to PrometheusView.
   * 
   * @example
   * PrometheusView
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the backend data storage.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 123xxx
   */
  userId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * The workspace to which the Prometheus instance belongs.
   * 
   * @example
   * default-cms-1490404746278495-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceType: 'instanceType',
      paymentType: 'paymentType',
      product: 'product',
      prometheusInstanceCount: 'prometheusInstanceCount',
      prometheusViewId: 'prometheusViewId',
      prometheusViewName: 'prometheusViewName',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      status: 'status',
      userId: 'userId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceType: 'string',
      paymentType: 'string',
      product: 'string',
      prometheusInstanceCount: 'number',
      prometheusViewId: 'string',
      prometheusViewName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      status: 'string',
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return.
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
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of Prometheus view instances.
   */
  prometheusViews?: ListPrometheusViewsResponseBodyPrometheusViews[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
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
      prometheusViews: 'prometheusViews',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prometheusViews: { 'type': 'array', 'itemType': ListPrometheusViewsResponseBodyPrometheusViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusViews)) {
      $dara.Model.validateArray(this.prometheusViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

