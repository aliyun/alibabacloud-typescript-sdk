// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpLocationServiceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1cb6x80tfgocid****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * launch-advisor-2021****
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **ecs**: an ECS instance.
   * *   **slb**: an SLB instance.
   * *   **eip**: an EIP.
   * *   **ipv6**: an IPv6 gateway.
   * *   **swas**: a simple application server.
   * *   **waf**: a Web Application Firewall (WAF) instance of the Exclusive edition.
   * *   **ga_basic**: a Global Accelerator (GA) instance.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The region to which the public IP address of the asset belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetIp: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the asset.
   */
  instance?: DescribeIpLocationServiceResponseBodyInstance;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeIpLocationServiceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

