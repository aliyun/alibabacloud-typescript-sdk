// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDisableFwSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The IP addresses.
   * 
   * > You must specify a value for at least one of the following parameters: `IpaddrList`, `RegionList`, and `ResourceTypeList`.
   * 
   * @example
   * ["192.0.XX.XX","192.0.XX.XX"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The unique identifier of the member.
   * 
   * @example
   * 1234
   */
  memberUid?: string;
  /**
   * @remarks
   * The regions.
   * 
   * > You must specify a value for at least one of the following parameters: `IpaddrList`, `RegionList`, and `ResourceTypeList`.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The asset types. Valid values:
   * 
   * - **BastionHostEgressIP**: The egress IP address of a bastion host.
   * 
   * - **BastionHostIngressIP**: The ingress IP address of a bastion host.
   * 
   * - **EcsEIP**: The Elastic IP Address (EIP) of an ECS instance.
   * 
   * - **EcsPublicIP**: The public IP address of an ECS instance.
   * 
   * - **EIP**: An Elastic IP Address (EIP).
   * 
   * - **EniEIP**: The EIP of an elastic network interface (ENI).
   * 
   * - **NatEIP**: The EIP of a NAT Gateway instance.
   * 
   * - **SlbEIP**: The EIP of a Server Load Balancer (SLB) or Classic Load Balancer (CLB) instance.
   * 
   * - **SlbPublicIP**: The public IP address of an SLB or CLB instance.
   * 
   * - **NatPublicIP**: The public IP address of a NAT Gateway instance.
   * 
   * - **HAVIP**: A High-availability Virtual IP (HAVIP).
   * 
   * - **NlbEIP**: The EIP of a Network Load Balancer (NLB) instance.
   * 
   * - **ApiGatewayEIP**: The public IP address of an API Gateway instance.
   * 
   * - **AlbEIP**: The EIP of an Application Load Balancer (ALB) instance.
   * 
   * - **AiGatewayEIP**: The public IP address of an AI Gateway instance.
   * 
   * - **GaEIP**: The EIP of a Global Accelerator (GA) instance.
   * 
   * - **SwasEIP**: The public IP address of a Simple Application Server instance.
   * 
   * - **EcdEIP**: The public IP address of an Elastic Desktop Service (ECD) instance.
   * 
   * - **BastionHostIP**: The IP address of a bastion host.
   * 
   * > You must specify a value for at least one of the following parameters: `IpaddrList`, `RegionList`, and `ResourceTypeList`.
   * 
   * @example
   * ["EcsPublicIp","NatEip"]
   */
  resourceTypeList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      memberUid: 'MemberUid',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      memberUid: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipaddrList)) {
      $dara.Model.validateArray(this.ipaddrList);
    }
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

