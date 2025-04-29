// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) or Server Load Balancer (SLB) instance in the VPC.
   * 
   * @example
   * i-uf6iaale3gfef9t9cb41
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC configuration.
   * 
   * @example
   * dypls-cn-beijing-slb-pre
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
   * The ID of the VPC access authorization.
   * 
   * @example
   * 2zej3ehuzg9m77kvwnfpn
   */
  vpcAccessId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9v96hqi6d14744sxqmx
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether HTTP or HTTPS is used.
   * 
   * @example
   * http
   */
  vpcScheme?: string;
  /**
   * @remarks
   * The host of the VPC backend service.
   * 
   * @example
   * openapi.alipan.com
   */
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcScheme: 'string',
      vpcTargetHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

