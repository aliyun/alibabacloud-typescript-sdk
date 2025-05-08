// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayServiceCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check.
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The expected status code, which is required if the health check protocol is HTTP.
   */
  expectedStatuses?: number[];
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-8d410698bd7f4628ab76b*****72dd1d
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The healthy threshold of the health check.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The health check domain name, which is optional if the health check protocol is HTTP.
   * 
   * @example
   * example.com
   */
  httpHost?: string;
  /**
   * @remarks
   * The health check path, which is required if the health check protocol is HTTP.
   * 
   * @example
   * /healthz
   */
  httpPath?: string;
  /**
   * @remarks
   * The interval at which the health check is performed.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The health check protocol. Valid values:
   * 
   * *   HTTP
   * *   TCP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 12
   */
  serviceId?: string;
  /**
   * @remarks
   * The timeout period of responses to the health check. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The unhealthy threshold of the health check.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      check: 'Check',
      expectedStatuses: 'ExpectedStatuses',
      gatewayUniqueId: 'GatewayUniqueId',
      healthyThreshold: 'HealthyThreshold',
      httpHost: 'HttpHost',
      httpPath: 'HttpPath',
      interval: 'Interval',
      protocol: 'Protocol',
      serviceId: 'ServiceId',
      timeout: 'Timeout',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      check: 'boolean',
      expectedStatuses: { 'type': 'array', 'itemType': 'number' },
      gatewayUniqueId: 'string',
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      serviceId: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expectedStatuses)) {
      $dara.Model.validateArray(this.expectedStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

