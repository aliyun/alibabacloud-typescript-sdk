// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1750315319946
   */
  createdAt?: string;
  /**
   * @remarks
   * HTTP API URL.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiUrl?: string;
  /**
   * @remarks
   * Applicable data source type: PROMETHEUS_DS
   * 
   * Prometheus instance ID
   * 
   * @example
   * rw-b8cfbbe94194ac37fe83f3d2d16a
   */
  instanceId?: string;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * Namespace of the metric
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai-cloudspe
   */
  regionId?: string;
  /**
   * @remarks
   * User ID.
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
   * Instance information.
   */
  instances?: ListPrometheusVirtualInstancesResponseBodyInstances[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListPrometheusVirtualInstancesResponseBodyInstances },
      requestId: 'string',
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

