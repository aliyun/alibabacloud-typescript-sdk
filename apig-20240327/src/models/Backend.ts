// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackendServices extends $dara.Model {
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * item-service
   */
  name?: string;
  /**
   * @remarks
   * The service port. If you want to use a dynamic port, do not pass this parameter.
   * 
   * @example
   * port
   */
  port?: number;
  /**
   * @remarks
   * The service protocol. Valid values: HTTP, TCP, and DUBBO.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-cq2bmmdlhtgj***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The percentage value of traffic.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Backend extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario. Valid values: Single, MultiServiceByRatio, MultiServiceByTag, Mock, and Redirect.
   * 
   * @example
   * Single
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: BackendServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': BackendServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

