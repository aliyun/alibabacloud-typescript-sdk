// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayAttributeResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint address.
   * 
   * @example
   * pg-xxxxx.polardbaigateway.pre.rds.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * xxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * - **Private**: VPC endpoint.
   * 
   * - **Public**: public endpoint.
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * 1874631
   */
  tunnelId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-*************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endpointId: 'EndpointId',
      gwClusterId: 'GwClusterId',
      netType: 'NetType',
      port: 'Port',
      tunnelId: 'TunnelId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endpointId: 'string',
      gwClusterId: 'string',
      netType: 'string',
      port: 'string',
      tunnelId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAttributeResponseBodySecurityIPArrays extends $dara.Model {
  /**
   * @remarks
   * The name of the IP whitelist. The default value is `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The tag of the IP whitelist.
   * 
   * @example
   * mytag
   */
  securityIPArrayTag?: string;
  /**
   * @remarks
   * A comma-separated list of IP addresses in the IP whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPArrayTag: 'SecurityIPArrayTag',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPArrayName: 'string',
      securityIPArrayTag: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specification code for the gateway instance.
   * 
   * @example
   * polar.app.g2.medium
   */
  classCode?: string;
  /**
   * @remarks
   * The time when the gateway instance was created.
   * 
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  currentVersion?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * A list of endpoints for the gateway instance.
   */
  endpoints?: DescribeGatewayAttributeResponseBodyEndpoints[];
  /**
   * @remarks
   * The time when the subscription for the gateway instance expires.
   * 
   * This parameter is empty for pay-as-you-go instances.
   * 
   * @example
   * 2027-04-22T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the subscription for the gateway instance has expired. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The description of the gateway instance.
   * 
   * @example
   * xxx
   */
  gwDescription?: string;
  latestVersion?: string;
  /**
   * @remarks
   * The time when the gateway instance was last modified.
   * 
   * @example
   * 2025-10-07T02:19:55Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The billing method of the gateway instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  runningVersion?: string;
  /**
   * @remarks
   * A list of IP whitelists for the gateway instance.
   */
  securityIPArrays?: DescribeGatewayAttributeResponseBodySecurityIPArrays[];
  /**
   * @remarks
   * The status of the gateway instance. Valid values:
   * 
   * - **CREATE**: The gateway instance is being created.
   * 
   * - **ACTIVATION**: The gateway instance is running.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VSwitch where the gateway instance is deployed.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where the gateway instance is deployed.
   * 
   * @example
   * vpc-*************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      dbType: 'DbType',
      endpoints: 'Endpoints',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gwClusterId: 'GwClusterId',
      gwDescription: 'GwDescription',
      latestVersion: 'LatestVersion',
      modifyTime: 'ModifyTime',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      runningVersion: 'RunningVersion',
      securityIPArrays: 'SecurityIPArrays',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      createTime: 'string',
      currentVersion: 'string',
      dbType: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeGatewayAttributeResponseBodyEndpoints },
      expireTime: 'string',
      expired: 'boolean',
      gwClusterId: 'string',
      gwDescription: 'string',
      latestVersion: 'string',
      modifyTime: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      runningVersion: 'string',
      securityIPArrays: { 'type': 'array', 'itemType': DescribeGatewayAttributeResponseBodySecurityIPArrays },
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.securityIPArrays)) {
      $dara.Model.validateArray(this.securityIPArrays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

