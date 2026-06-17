// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableFwSwitchRequest extends $dara.Model {
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
   * The list of IP addresses.
   * 
   * > You must specify at least one of the `IpaddrList`, `RegionList`, and `ResourceTypeList` parameters.
   * 
   * @example
   * ["192.0.X.X","192.0.X.X"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 1234
   */
  memberUid?: string;
  /**
   * @remarks
   * The list of regions.
   * 
   * > You must specify at least one of the `IpaddrList`, `RegionList`, and `ResourceTypeList` parameters.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The list of asset types.
   * 
   * Valid values:
   * 
   * - **BastionHostEgressIP**: the egress IP address of a bastion host.
   * 
   * - **BastionHostIngressIP**: the ingress IP address of a bastion host.
   * 
   * - **EcsEIP**: the EIP of an ECS instance.
   * 
   * - **EcsPublicIP**: the public IP address of an ECS instance.
   * 
   * - **EIP**: an EIP.
   * 
   * - **EniEIP**: the EIP of an ENI.
   * 
   * - **NatEIP**: the EIP of a NAT gateway.
   * 
   * - **SlbEIP**: the EIP of an SLB instance or a CLB instance.
   * 
   * - **SlbPublicIP**: the public IP address of an SLB instance or a CLB instance.
   * 
   * - **NatPublicIP**: the public IP address of a NAT gateway.
   * 
   * - **HAVIP**: an HAVIP.
   * 
   * - **NlbEIP**: the EIP of an NLB instance.
   * 
   * - **ApiGatewayEIP**: the public IP address of an API gateway.
   * 
   * - **AlbEIP**: the EIP of an ALB instance.
   * 
   * - **AiGatewayEIP**: the public IP address of an AI gateway.
   * 
   * - **GaEIP**: the EIP of a GA instance.
   * 
   * - **SwasEIP**: the public IP address of a Simple Application Server instance.
   * 
   * - **EcdEIP**: the public IP address of an Elastic Desktop Service instance.
   * 
   * - **BastionHostIP**: the IP address of a bastion host.
   * 
   * > You must specify at least one of the `IpaddrList`, `RegionList`, and `ResourceTypeList` parameters.
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

