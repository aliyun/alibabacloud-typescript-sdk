// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      weight: 'string',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

