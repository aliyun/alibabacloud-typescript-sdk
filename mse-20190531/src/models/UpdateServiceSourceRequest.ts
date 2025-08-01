// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceSourceRequestIngressOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Ingress.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Specifies whether to update the Ingress status.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * Specifies whether to monitor Ingress classes.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace whose resources you want to monitor.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese.
   * *   en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * c9ad2a0717032427e920754e25b49e3b5
   */
  address?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 429
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-cdd1bb9bfb8341e9805f931a3ba1f4c6
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the service source.
   * 
   * @example
   * 63
   */
  id?: number;
  /**
   * @remarks
   * The configurations of Ingress resources.
   * 
   * @example
   * zh
   */
  ingressOptionsRequest?: UpdateServiceSourceRequestIngressOptionsRequest;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * istio
   */
  name?: string;
  /**
   * @remarks
   * An array of service root paths.
   */
  pathList?: string[];
  /**
   * @remarks
   * The service source. Valid values:
   * 
   * *   K8s: ACK cluster.
   * *   MSE: Nacos instance.
   * 
   * @example
   * K8s
   */
  source?: string;
  /**
   * @remarks
   * The type of the service source. Valid values:
   * 
   * *   K8s: ACK cluster.
   * *   NACOS: Nacos instance.
   * 
   * @example
   * K8s
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      ingressOptionsRequest: 'IngressOptionsRequest',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      ingressOptionsRequest: UpdateServiceSourceRequestIngressOptionsRequest,
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.ingressOptionsRequest && typeof (this.ingressOptionsRequest as any).validate === 'function') {
      (this.ingressOptionsRequest as any).validate();
    }
    if(Array.isArray(this.pathList)) {
      $dara.Model.validateArray(this.pathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

