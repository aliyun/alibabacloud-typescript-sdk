// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1750315319946
   */
  createdAt?: string;
  /**
   * @remarks
   * The HTTP API URL.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiUrl?: string;
  /**
   * @remarks
   * Returned for the `PROMETHEUS_DS` data source type.
   * 
   * The Prometheus instance ID.
   * 
   * @example
   * rw-b8cfbbe94194ac37fe83f3d2d16a
   */
  instanceId?: string;
  /**
   * @remarks
   * Returned for the `CMS_BASIC_QUERY` query type.
   * 
   * The namespace of the metric.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai-cloudspe
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17073812345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      httpApiUrl: 'httpApiUrl',
      instanceId: 'instanceId',
      namespace: 'namespace',
      regionId: 'regionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      httpApiUrl: 'string',
      instanceId: 'string',
      namespace: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusVirtualInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of instances.
   */
  instances?: ListPrometheusVirtualInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If all results are returned, this parameter is left empty.
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListPrometheusVirtualInstancesResponseBodyInstances },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
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

