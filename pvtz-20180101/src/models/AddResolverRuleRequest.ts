// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddResolverRuleRequestEdgeDnsClusters extends $dara.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequestForwardIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * >  The following CIDR blocks are reserved by the system: 100.100.2.136 to 100.100.2.138 and 100.100.2.116 to 100.100.2.118. You cannot specify the IP addresses within these CIDR blocks for the external DNS servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequestVpcs extends $dara.Model {
  regionId?: string;
  vpcId?: string;
  vpcType?: string;
  vpcUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
      vpcUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequest extends $dara.Model {
  edgeDnsClusters?: AddResolverRuleRequestEdgeDnsClusters[];
  /**
   * @remarks
   * The outbound endpoint ID. The outbound endpoint is used to forward the DNS requests to the specified destination IP addresses.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external DNS servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded. You can enter up to **six** IP addresses and ports. Both private and public IP addresses are supported.
   * 
   * >  If you specify public IP addresses as the IP addresses of the external DNS servers and Elastic Compute Service (ECS) instances in the outbound VPC are not assigned public IP addresses, you need to activate NAT Gateway for the VPC and create and manage SNAT entries on a NAT gateway.
   * 
   * This parameter is required.
   */
  forwardIp?: AddResolverRuleRequestForwardIp[];
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
   * The name of the forwarding rule. You can name the rule based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the forwarding rule. The parameter value can only be OUTBOUND, which indicates that DNS requests are forwarded to one or more external IP addresses.
   * 
   * >  You cannot change the value of Type after you create the forwarding rule.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  vpcs?: AddResolverRuleRequestVpcs[];
  /**
   * @remarks
   * The zone for which you want to forward DNS requests.
   * 
   * >  You cannot change the value of ZoneName after you create the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      edgeDnsClusters: 'EdgeDnsClusters',
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      type: 'Type',
      vpcs: 'Vpcs',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeDnsClusters: { 'type': 'array', 'itemType': AddResolverRuleRequestEdgeDnsClusters },
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': AddResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      type: 'string',
      vpcs: { 'type': 'array', 'itemType': AddResolverRuleRequestVpcs },
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.edgeDnsClusters)) {
      $dara.Model.validateArray(this.edgeDnsClusters);
    }
    if(Array.isArray(this.forwardIp)) {
      $dara.Model.validateArray(this.forwardIp);
    }
    if(Array.isArray(this.vpcs)) {
      $dara.Model.validateArray(this.vpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

