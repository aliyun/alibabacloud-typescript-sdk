// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck extends $dara.Model {
  domain?: string;
  down?: number;
  interval?: number;
  port?: number;
  timeout?: number;
  type?: string;
  up?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      down: 'Down',
      interval: 'Interval',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
      up: 'Up',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      down: 'number',
      interval: 'number',
      port: 'number',
      timeout: 'number',
      type: 'string',
      up: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckList extends $dara.Model {
  frontendPort?: number;
  healthCheck?: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck;
  instanceId?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      healthCheck: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck,
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $dara.Model {
  healthCheckList?: DescribeHealthCheckListResponseBodyHealthCheckList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckList: 'HealthCheckList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckList: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyHealthCheckList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckList)) {
      $dara.Model.validateArray(this.healthCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

