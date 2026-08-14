// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList extends $dara.Model {
  address?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBodyHealthCheckStatus extends $dara.Model {
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServerStatusList?: DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServerStatusList: 'RealServerStatusList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServerStatusList)) {
      $dara.Model.validateArray(this.realServerStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusResponseBody extends $dara.Model {
  healthCheckStatus?: DescribeHealthCheckStatusResponseBodyHealthCheckStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatus: 'HealthCheckStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatus: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckStatus)) {
      $dara.Model.validateArray(this.healthCheckStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

