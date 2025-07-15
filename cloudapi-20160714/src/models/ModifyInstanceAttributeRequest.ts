// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestToConnectVpcIpBlock extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VSwitch.
   * 
   * @example
   * 172.16.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * Specifies whether the CIDR block is a custom CIDR block.
   * 
   * @example
   * false
   */
  customized?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz94cqvaoe1ipxxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      customized: 'Customized',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      customized: 'boolean',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * If delete VPC Ip block.
   * 
   * @example
   * true
   */
  deleteVpcIpBlock?: string;
  /**
   * @remarks
   * If enable outbound IPv6 Traffic.
   * 
   * @example
   * true
   */
  egressIpv6Enable?: string;
  /**
   * @remarks
   * The HTTPS policy.
   * 
   * @example
   * HTTPS2_TLS1_0
   */
  httpsPolicy?: string;
  /**
   * @remarks
   * If enable inbound IPv6 Traffic.
   * 
   * @example
   * true
   */
  IPV6Enabled?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-ht-8xxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance Name
   * 
   * @example
   * apigatewayInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * Custom private CIDR block.
   * 
   * @example
   * 172.0.0.1/24
   */
  intranetSegments?: string;
  /**
   * @remarks
   * Maintainable end time.
   * 
   * @example
   * 23:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * Maintainable start time.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The information about the CIDR block that API Gateway can use to access the virtual private cloud (VPC) of the backend service.
   */
  toConnectVpcIpBlock?: ModifyInstanceAttributeRequestToConnectVpcIpBlock;
  /**
   * @remarks
   * The token of the request.
   * 
   * @example
   * c20d86c4-1eb3-4d0b-afe9-c586df1e2136
   */
  token?: string;
  /**
   * @remarks
   * Specifies whether to enable the self-calling domain name.
   * 
   * @example
   * false
   */
  vpcSlbIntranetEnable?: string;
  static names(): { [key: string]: string } {
    return {
      deleteVpcIpBlock: 'DeleteVpcIpBlock',
      egressIpv6Enable: 'EgressIpv6Enable',
      httpsPolicy: 'HttpsPolicy',
      IPV6Enabled: 'IPV6Enabled',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      intranetSegments: 'IntranetSegments',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      toConnectVpcIpBlock: 'ToConnectVpcIpBlock',
      token: 'Token',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteVpcIpBlock: 'string',
      egressIpv6Enable: 'string',
      httpsPolicy: 'string',
      IPV6Enabled: 'string',
      instanceId: 'string',
      instanceName: 'string',
      intranetSegments: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      toConnectVpcIpBlock: ModifyInstanceAttributeRequestToConnectVpcIpBlock,
      token: 'string',
      vpcSlbIntranetEnable: 'string',
    };
  }

  validate() {
    if(this.toConnectVpcIpBlock && typeof (this.toConnectVpcIpBlock as any).validate === 'function') {
      (this.toConnectVpcIpBlock as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

