// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableFwSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["192.0.X.X","192.0.X.X"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The regions.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The types of the assets.
   * 
   * Valid values:
   * 
   * *   BastionHostIP: the egress IP address of a bastion host
   * *   BastionHostIngressIP: the ingress IP address of a bastion host
   * *   EcsEIP: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   EcsPublicIP: the public IP address of an ECS instance
   * *   EIP: the EIP
   * *   EniEIP: the EIP of an elastic network interface (ENI)
   * *   NatEIP: the EIP of a NAT gateway
   * *   SlbEIP: the EIP of a Server Load Balancer (SLB) instance
   * *   SlbPublicIP: the public IP address of an SLB instance
   * *   NatPublicIP: the public IP address of a NAT gateway
   * *   HAVIP: the high-availability virtual IP address (HAVIP)
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
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
   * 192.0.X.X
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
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

