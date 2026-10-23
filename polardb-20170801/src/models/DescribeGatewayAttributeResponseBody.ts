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
   * The endpoint ID.
   * 
   * @example
   * xxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * - Private: VPC
   * - Public: Internet
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The port.
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
   * The ID of the VPC to which the vSwitch belongs.
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
   * The name of the IP whitelist. Default value: `default`.
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
   * The IP addresses in the whitelist, separated by commas.
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
   * The instance type code.
   * 
   * @example
   * polar.app.g2.medium
   */
  classCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The time is displayed in ISO 8601 format in UTC (YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current version number.
   * 
   * @example
   * 2.0.0
   */
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
   * The list of endpoints.
   */
  endpoints?: DescribeGatewayAttributeResponseBodyEndpoints[];
  /**
   * @remarks
   * The expiration time.
   * 
   * This parameter is empty when the billing method is Postpaid.
   * 
   * The time is displayed in ISO 8601 format in UTC (YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2027-04-22T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
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
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The description of the gateway.
   * 
   * @example
   * xxx
   */
  gwDescription?: string;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * 2.0.1
   */
  latestVersion?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * The time is displayed in ISO 8601 format in UTC (YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2025-10-07T02:19:55Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The running version number.
   * 
   * @example
   * 2.0.0
   */
  runningVersion?: string;
  /**
   * @remarks
   * The application-level IP whitelist.
   */
  securityIPArrays?: DescribeGatewayAttributeResponseBodySecurityIPArrays[];
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * - CREATE: creating
   * - ACTIVATION: running
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs.
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

