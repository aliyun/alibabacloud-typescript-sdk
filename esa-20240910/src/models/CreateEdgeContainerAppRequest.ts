// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppRequest extends $dara.Model {
  healthCheckFailTimes?: number;
  healthCheckHost?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckPort?: number;
  healthCheckSuccTimes?: number;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  remarks?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  servicePort?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckFailTimes: 'HealthCheckFailTimes',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPort: 'HealthCheckPort',
      healthCheckSuccTimes: 'HealthCheckSuccTimes',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      name: 'Name',
      remarks: 'Remarks',
      servicePort: 'ServicePort',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckFailTimes: 'number',
      healthCheckHost: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPort: 'number',
      healthCheckSuccTimes: 'number',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      name: 'string',
      remarks: 'string',
      servicePort: 'number',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

