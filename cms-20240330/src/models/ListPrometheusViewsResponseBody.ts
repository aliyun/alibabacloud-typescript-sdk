// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsResponseBodyPrometheusViewsTags extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
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
   * @example
   * 2025-07-12T02:18:36Z
   */
  createTime?: string;
  /**
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @example
   * cms
   */
  product?: string;
  /**
   * @example
   * 2
   */
  prometheusInstanceCount?: number;
  /**
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @example
   * PrometheusView
   */
  resourceType?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: ListPrometheusViewsResponseBodyPrometheusViewsTags[];
  /**
   * @example
   * 123xxx
   */
  userId?: string;
  /**
   * @example
   * V2
   */
  version?: string;
  /**
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
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
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

