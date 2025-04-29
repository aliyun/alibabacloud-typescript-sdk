// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyServiceConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ELB and SLB instances in the VPC.
   * 
   * @example
   * i-bp1h497hkijewv2***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * glmall-app-test
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zeafsc3fygk1***
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC protocol.
   * 
   * @example
   * HTTP
   */
  vpcScheme?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcId: 'string',
      vpcScheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

