// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateAnycastEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-2zeerraiwb7ujsxdc****
   */
  anycastId?: string;
  /**
   * @remarks
   * The ID of the endpoint from which you want to disassociate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The region where the endpoint is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint from which you want to disassociate the Anycast EIP. Valid values:
   * 
   * *   **SlbInstance**: an internal-facing Server Load Balancer (SLB) instance that is deployed in a virtual private cloud (VPC)
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * This parameter is required.
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The secondary private IP address of the ENI from which you want to disassociate the Anycast EIP.
   * 
   * This parameter is valid only when you set **BindInstanceType** to **NetworkInterface**. If you do not specify this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

