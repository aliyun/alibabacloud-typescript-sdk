// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsResponseBodyPrometheusViewsTags extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * Match value.
   * 
   * @example
   * value1
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

export class ListPrometheusViewsResponseBodyPrometheusViews extends $dara.Model {
  /**
   * @remarks
   * Instance creation time, using UTC+0 time, formatted as yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-07-12T02:18:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * Instance type:
   * prom-view: new version aggregated view
   * global-view: old version aggregated view
   * 
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @remarks
   * Payment type. Currently, the fixed value is FREE (free).
   * 
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @remarks
   * Product that the prom instance belongs to (arms or cms).
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * Number of Prometheus instances in the view.
   * 
   * @example
   * 2
   */
  prometheusInstanceCount?: number;
  /**
   * @remarks
   * Prometheus view ID.
   * 
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @remarks
   * Prometheus view name.
   * 
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Fixed value: PrometheusView.
   * 
   * @example
   * PrometheusView
   */
  resourceType?: string;
  /**
   * @remarks
   * Backend data storage status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Tag values.
   */
  tags?: ListPrometheusViewsResponseBodyPrometheusViewsTags[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 123xxx
   */
  userId?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * Workspace that the prom instance belongs to.
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
      tags: 'tags',
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
      tags: { 'type': 'array', 'itemType': ListPrometheusViewsResponseBodyPrometheusViewsTags },
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusViewsResponseBody extends $dara.Model {
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
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * List of Prometheus view instances.
   */
  prometheusViews?: ListPrometheusViewsResponseBodyPrometheusViews[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
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

