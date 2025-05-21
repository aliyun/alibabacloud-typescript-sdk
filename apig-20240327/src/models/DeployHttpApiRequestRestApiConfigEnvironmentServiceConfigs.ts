// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * Configuration of matching conditions related to API deployment.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * Service port, do not provide for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol:
   * - HTTP.
   * - HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * Weight, range [1,100], valid only in the by-ratio scenario.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpApiBackendMatchConditions,
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
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

