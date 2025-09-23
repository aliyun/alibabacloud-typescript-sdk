// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  address?: string;
  /**
   * @example
   * normal
   */
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

export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList extends $dara.Model {
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  realServerStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList[];
  /**
   * @example
   * normal
   */
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
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList },
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

export class DescribeHealthCheckStatusListResponseBody extends $dara.Model {
  healthCheckStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatusList: 'HealthCheckStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckStatusList)) {
      $dara.Model.validateArray(this.healthCheckStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

