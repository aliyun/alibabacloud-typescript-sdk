// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UdpCheck extends $dara.Model {
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckInterval?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckInterval: 'number',
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

