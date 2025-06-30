// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateResolverRuleRequestForwardIp } from "./UpdateResolverRuleRequestForwardIp";


export class UpdateResolverRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external Domain Name System (DNS) servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded. You can enter up to six IP addresses and ports. Both private and public IP addresses are supported.
   * 
   * >  If you specify public IP addresses as the IP addresses of the external DNS servers and Elastic Compute Service (ECS) instances in the outbound virtual private cloud (VPC) are not assigned public IP addresses, you need to activate NAT Gateway for the VPC and create and manage SNAT entries on a NAT gateway.
   */
  forwardIp?: UpdateResolverRuleRequestForwardIp[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': UpdateResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardIp)) {
      $dara.Model.validateArray(this.forwardIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

