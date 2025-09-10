// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * 1750315319946
   */
  createdAt?: string;
  /**
   * @example
   * http://xxxxxxxx
   */
  httpApiUrl?: string;
  /**
   * @example
   * rw-b8cfbbe94194ac37fe83f3d2d16a
   */
  instanceId?: string;
  /**
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @example
   * cn-shanghai-cloudspe
   */
  regionId?: string;
  /**
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
  instances?: ListPrometheusVirtualInstancesResponseBodyInstances[];
  /**
   * @remarks
   * Id of the request
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

