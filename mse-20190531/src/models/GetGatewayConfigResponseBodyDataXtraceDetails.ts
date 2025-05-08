// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataXtraceDetails extends $dara.Model {
  /**
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-08-12T09:39:07.000+0000
   */
  gmtModified?: string;
  /**
   * @example
   * 255
   */
  id?: number;
  /**
   * @example
   * 100
   */
  sample?: number;
  /**
   * @example
   * 333
   */
  serviceId?: number;
  /**
   * @example
   * 8888
   */
  servicePort?: string;
  /**
   * @example
   * true
   */
  traceOn?: boolean;
  /**
   * @example
   * OPENTELEMETRY
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      sample: 'Sample',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      traceOn: 'TraceOn',
      traceType: 'TraceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      sample: 'number',
      serviceId: 'number',
      servicePort: 'string',
      traceOn: 'boolean',
      traceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

