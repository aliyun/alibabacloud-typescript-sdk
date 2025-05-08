// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthCheck extends $dara.Model {
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

