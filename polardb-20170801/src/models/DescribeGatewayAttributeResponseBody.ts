// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayAttributeResponseBodyEndpoints extends $dara.Model {
  /**
   * @example
   * pg-xxxxx.polardbaigateway.pre.rds.aliyuncs.com
   */
  address?: string;
  /**
   * @example
   * xxx
   */
  endpointId?: string;
  /**
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * Public
   */
  netType?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  /**
   * @example
   * 1874631
   */
  tunnelId?: string;
  /**
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
  securityIPArrayName?: string;
  securityIPArrayTag?: string;
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
   * @example
   * polar.app.g2.medium
   */
  classCode?: string;
  /**
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  /**
   * @example
   * MySQL
   */
  dbType?: string;
  endpoints?: DescribeGatewayAttributeResponseBodyEndpoints[];
  expireTime?: string;
  expired?: boolean;
  /**
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * xxx
   */
  gwDescription?: string;
  /**
   * @example
   * 2025-10-07T02:19:55Z
   */
  modifyTime?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
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
  securityIPArrays?: DescribeGatewayAttributeResponseBodySecurityIPArrays[];
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-*************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      createTime: 'CreateTime',
      dbType: 'DbType',
      endpoints: 'Endpoints',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gwClusterId: 'GwClusterId',
      gwDescription: 'GwDescription',
      modifyTime: 'ModifyTime',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      dbType: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeGatewayAttributeResponseBodyEndpoints },
      expireTime: 'string',
      expired: 'boolean',
      gwClusterId: 'string',
      gwDescription: 'string',
      modifyTime: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
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

