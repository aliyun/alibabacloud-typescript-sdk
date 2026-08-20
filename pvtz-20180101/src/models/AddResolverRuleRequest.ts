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
   * > The IP addresses in the following ranges are reserved by the system and cannot be used as the IP addresses of external DNS systems: 100.100.2.136 to 100.100.2.138 and 100.100.2.116 to 100.100.2.118.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the destination server.
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
   * The ID of the outbound endpoint. The outbound endpoint forwards DNS queries to the specified destination IP addresses.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of the destination servers in the external DNS system to which DNS queries are forwarded. You can specify up to **6** destination servers. Both private and public IP addresses are supported.
   * 
   * > If you specify public IP addresses for the external DNS servers, and the Elastic Compute Service (ECS) instances in the VPC of the outbound endpoint do not have public IP addresses, enable a NAT Gateway and configure SNAT entries.
   * 
   * This parameter is required.
   */
  forwardIp?: AddResolverRuleRequestForwardIp[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the forwarding rule. Name the rule as needed.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the forwarding rule. The only valid value is OUTBOUND. This value indicates that DNS queries are forwarded to an external IP address.
   * 
   * > You cannot change this value after the forwarding rule is created.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  vpcs?: AddResolverRuleRequestVpcs[];
  /**
   * @remarks
   * The domain name (zone) for which you want to forward DNS queries.
   * 
   * > You cannot change this value after the forwarding rule is created.
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

