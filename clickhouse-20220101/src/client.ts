// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateVirtualWareHousePublicConnectionRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateVirtualWareHousePublicConnectionResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateVirtualWareHousePublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateVirtualWareHousePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateVirtualWareHousePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateClusterRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6xmupdn7v6ui9f7****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf632qye9oqt4x4sr5****
   */
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBClusterDescription: 'DBClusterDescription',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      DBClusterDescription: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      usedTime: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateClusterResponseBody extends $tea.Model {
  data?: CheckCreateClusterResponseBodyData;
  /**
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckCreateClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckCreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateVirtualWareHouseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vsw-uf632qye9oqt4x4sr****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateVirtualWareHouseResponseBody extends $tea.Model {
  data?: CheckCreateVirtualWareHouseResponseBodyData;
  /**
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckCreateVirtualWareHouseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCreateVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckCreateVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeleteVirtualWareHouseRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeleteVirtualWareHouseResponseBody extends $tea.Model {
  data?: CheckDeleteVirtualWareHouseResponseBodyData;
  /**
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckDeleteVirtualWareHouseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeleteVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDeleteVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckDeleteVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyVirtualWareHouseResourceRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyVirtualWareHouseResourceResponseBody extends $tea.Model {
  data?: CheckModifyVirtualWareHouseResourceResponseBodyData;
  /**
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckModifyVirtualWareHouseResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyVirtualWareHouseResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckModifyVirtualWareHouseResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckModifyVirtualWareHouseResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-8vbsom12x476u****
   */
  DBClusterId?: string;
  /**
   * @example
   * 123456Aa
   */
  password?: string;
  /**
   * @example
   * b17e1e0450dac425ea318253f6f852972d69731d6c7499c001468b695b6da219
   */
  passwordSha256Hex?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      comment: 'Comment',
      DBClusterId: 'DBClusterId',
      password: 'Password',
      passwordSha256Hex: 'PasswordSha256Hex',
      privilegeType: 'PrivilegeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      comment: 'string',
      DBClusterId: 'string',
      password: 'string',
      passwordSha256Hex: 'string',
      privilegeType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 8FE02123-D2A3-5CDE-939D-E9B477E00E68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6xmupdn7v6ui9f****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf632qye9oqt4x4sr****
   */
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBClusterDescription: 'DBClusterDescription',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      DBClusterDescription: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      usedTime: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  data?: CreateClusterResponseBodyData;
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualWareHouseRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vsw-uf632qye9oqt4x4sr****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualWareHouseResponseBody extends $tea.Model {
  data?: CreateVirtualWareHouseResponseBodyData;
  /**
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateVirtualWareHouseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  data?: DeleteClusterResponseBodyData;
  /**
   * @example
   * 5B1C3974-F13D-5510-9131-DC4A4C8B09C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterSecurityIPGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualWareHouseRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualWareHouseResponseBody extends $tea.Model {
  data?: DeleteVirtualWareHouseResponseBodyData;
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteVirtualWareHouseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountResponseBody extends $tea.Model {
  data?: DescribeAccountResponseBodyData;
  /**
   * @example
   * 92016D5B-899D-5B77-A8A7-EFE523D4C80A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-uf6a499c0m3w5****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $tea.Model {
  data?: DescribeClusterResponseBodyData;
  /**
   * @example
   * 9140518B-F330-5364-82FE-EC7298816EDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterSecurityInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterSecurityInfoResponseBody extends $tea.Model {
  data?: DescribeClusterSecurityInfoResponseBodyData;
  /**
   * @example
   * 2371CC7A-E9C3-5817-97C9-F6333D74BA6C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeClusterSecurityInfoResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterSecurityInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterSecurityInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterSecurityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterStatusSetResponseBody extends $tea.Model {
  data?: DescribeClusterStatusSetResponseBodyData[];
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeClusterStatusSetResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterStatusSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterStatusSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterStatusSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  data?: DescribeRegionsResponseBodyData[];
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningQueryRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @example
   * c8cbcbaf-d4ab-4e74-900d-90d7c0aecaae
   */
  queryId?: string;
  /**
   * @example
   * order by
   */
  queryKeyWord?: string;
  /**
   * @example
   * test
   */
  queryUser?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      queryId: 'QueryId',
      queryKeyWord: 'QueryKeyWord',
      queryUser: 'QueryUser',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
      queryId: 'string',
      queryKeyWord: 'string',
      queryUser: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningQueryResponseBody extends $tea.Model {
  data?: DescribeRunningQueryResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRunningQueryResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRunningQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRunningQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * 2021-02-02T09:30:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2021-02-02T08:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
      regionId: 'string',
      startTime: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryResponseBody extends $tea.Model {
  data?: DescribeSlowQueryResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSlowQueryResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryTrendRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * 2021-02-02T09:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2021-02-02T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      queryDurationMs: 'number',
      regionId: 'string',
      startTime: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryTrendResponseBody extends $tea.Model {
  data?: DescribeSlowQueryTrendResponseBodyData[];
  /**
   * @example
   * 48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSlowQueryTrendResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowQueryTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowQueryTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseResponseBody extends $tea.Model {
  data?: DescribeVirtualWareHouseResponseBodyData;
  /**
   * @example
   * F543E6CC-6868-523D-8D28-0E92CF977ED2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeVirtualWareHouseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseClassSetResponseBody extends $tea.Model {
  data?: DescribeVirtualWareHouseClassSetResponseBodyData[];
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeVirtualWareHouseClassSetResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseClassSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualWareHouseClassSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualWareHouseClassSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseEndpointInfoRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp11gxp8g992f****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseEndpointInfoResponseBody extends $tea.Model {
  data?: DescribeVirtualWareHouseEndpointInfoResponseBodyData[];
  /**
   * @example
   * 7EE0EF77-B7BA-5EE3-9B11-F8DE7B65BAB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeVirtualWareHouseEndpointInfoResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseEndpointInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualWareHouseEndpointInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualWareHouseEndpointInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseStatusSetResponseBody extends $tea.Model {
  data?: DescribeVirtualWareHouseStatusSetResponseBodyData[];
  /**
   * @example
   * FDF272C3-8FD0-507B-8E63-A19495217339
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeVirtualWareHouseStatusSetResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseStatusSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualWareHouseStatusSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualWareHouseStatusSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDistributedTablesBufferSizeRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDistributedTablesBufferSizeResponseBody extends $tea.Model {
  data?: GetDistributedTablesBufferSizeResponseBodyData;
  /**
   * @example
   * 48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDistributedTablesBufferSizeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDistributedTablesBufferSizeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDistributedTablesBufferSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDistributedTablesBufferSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillQueryRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * 21152382576****
   */
  queryIds?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      queryIds: 'QueryIds',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      queryIds: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillQueryResponseBody extends $tea.Model {
  /**
   * @example
   * 48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBody extends $tea.Model {
  data?: ListAccountsResponseBodyData[];
  /**
   * @example
   * E889A8CD-A4B4-5676-8EDB-80E06E072353
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAccountsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  data?: ListClustersResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * DDB109DC-E37D-5475-8D49-47542C57BD38
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHouseConfigsRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHouseConfigsResponseBody extends $tea.Model {
  data?: ListVirtualWareHouseConfigsResponseBodyData[];
  /**
   * @example
   * 87B839E3-7384-52D5-9CAB-756DD3BF7B9B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVirtualWareHouseConfigsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHouseConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualWareHouseConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVirtualWareHouseConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHousesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHousesResponseBody extends $tea.Model {
  data?: ListVirtualWareHousesResponseBodyData[];
  /**
   * @example
   * DD4F7C49-09BC-5BA7-BAC9-F0887E368126
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVirtualWareHousesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHousesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualWareHousesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVirtualWareHousesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      comment: 'Comment',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      comment: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  privilegeType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBClusterId: 'DBClusterId',
      privilegeType: 'PrivilegeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBClusterId: 'string',
      privilegeType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeResponseBody extends $tea.Model {
  /**
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountPrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAccountPrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescriptionResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configChanges?: ModifyVirtualWareHouseConfigRequestConfigChanges[];
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      configChanges: 'ConfigChanges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configChanges: { 'type': 'array', 'itemType': ModifyVirtualWareHouseConfigRequestConfigChanges },
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configChangesShrink?: string;
  /**
   * @example
   * cc-bp1qx68m06981****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      configChangesShrink: 'ConfigChanges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configChangesShrink: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 108B73B2-F513-5250-81DD-48A63E48C373
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVirtualWareHouseConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVirtualWareHouseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseDescriptionRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseDescription: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseDescriptionResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVirtualWareHouseDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVirtualWareHouseDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseResourceRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-uf62965t8lt50****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseResourceResponseBody extends $tea.Model {
  data?: ModifyVirtualWareHouseResourceResponseBodyData;
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyVirtualWareHouseResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVirtualWareHouseResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVirtualWareHouseResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchClusterSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchClusterSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchClusterSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PatchClusterSecurityIPGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PatchClusterSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseVirtualWareHousePublicConnectionRequest extends $tea.Model {
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseVirtualWareHousePublicConnectionResponseBody extends $tea.Model {
  /**
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseVirtualWareHousePublicConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseVirtualWareHousePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseVirtualWareHousePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * 123456Aa
   */
  password?: string;
  /**
   * @example
   * b17e1e0450dac425ea318253f6f852972d69731d6c7499c001468b695b6da219
   */
  passwordSha256Hex?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBClusterId: 'DBClusterId',
      password: 'Password',
      passwordSha256Hex: 'PasswordSha256Hex',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBClusterId: 'string',
      password: 'string',
      passwordSha256Hex: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  /**
   * @example
   * 5A6A077A-577C-536E-AC13-8E715D7A34C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartVirtualWareHouseRequest extends $tea.Model {
  /**
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartVirtualWareHouseResponseBody extends $tea.Model {
  /**
   * @example
   * DE1F69AE-6F82-5227-B691-DF14AD36A460
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartVirtualWareHouseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartVirtualWareHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartVirtualWareHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-8vbsom12x476u****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponseBody extends $tea.Model {
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertClusterSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertClusterSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @example
   * A6DB2D3E-3E87-5804-9D42-9D51EC7A7D33
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertClusterSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpsertClusterSecurityIPGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpsertClusterSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * Creating
   */
  expectedDBClusterStatus?: string;
  /**
   * @example
   * 60
   */
  expectedOrderFinishSeconds?: number;
  /**
   * @example
   * Creating
   */
  expectedTargetVirtualWareHouseStatus?: string;
  static names(): { [key: string]: string } {
    return {
      expectedDBClusterStatus: 'ExpectedDBClusterStatus',
      expectedOrderFinishSeconds: 'ExpectedOrderFinishSeconds',
      expectedTargetVirtualWareHouseStatus: 'ExpectedTargetVirtualWareHouseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDBClusterStatus: 'string',
      expectedOrderFinishSeconds: 'number',
      expectedTargetVirtualWareHouseStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateVirtualWareHouseResponseBodyData extends $tea.Model {
  /**
   * @example
   * ResourceChanging
   */
  expectedDBClusterStatus?: string;
  /**
   * @example
   * 60
   */
  expectedOrderFinishSeconds?: number;
  /**
   * @example
   * Creating
   */
  expectedTargetVirtualWareHouseStatus?: string;
  static names(): { [key: string]: string } {
    return {
      expectedDBClusterStatus: 'ExpectedDBClusterStatus',
      expectedOrderFinishSeconds: 'ExpectedOrderFinishSeconds',
      expectedTargetVirtualWareHouseStatus: 'ExpectedTargetVirtualWareHouseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDBClusterStatus: 'string',
      expectedOrderFinishSeconds: 'number',
      expectedTargetVirtualWareHouseStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeleteVirtualWareHouseResponseBodyData extends $tea.Model {
  /**
   * @example
   * ResourceChanging
   */
  expectedDBClusterStatus?: string;
  /**
   * @example
   * 60
   */
  expectedOrderFinishSeconds?: number;
  /**
   * @example
   * Deleting
   */
  expectedTargetVirtualWareHouseStatus?: string;
  static names(): { [key: string]: string } {
    return {
      expectedDBClusterStatus: 'ExpectedDBClusterStatus',
      expectedOrderFinishSeconds: 'ExpectedOrderFinishSeconds',
      expectedTargetVirtualWareHouseStatus: 'ExpectedTargetVirtualWareHouseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDBClusterStatus: 'string',
      expectedOrderFinishSeconds: 'number',
      expectedTargetVirtualWareHouseStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckModifyVirtualWareHouseResourceResponseBodyData extends $tea.Model {
  /**
   * @example
   * ResourceChanging
   */
  expectedDBClusterStatus?: string;
  /**
   * @example
   * 60
   */
  expectedOrderFinishSeconds?: number;
  /**
   * @example
   * ResourceChanging
   */
  expectedTargetVirtualWareHouseStatus?: string;
  static names(): { [key: string]: string } {
    return {
      expectedDBClusterStatus: 'ExpectedDBClusterStatus',
      expectedOrderFinishSeconds: 'ExpectedOrderFinishSeconds',
      expectedTargetVirtualWareHouseStatus: 'ExpectedTargetVirtualWareHouseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDBClusterStatus: 'string',
      expectedOrderFinishSeconds: 'number',
      expectedTargetVirtualWareHouseStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp123bm6vy801****
   */
  DBClusterId?: string;
  /**
   * @example
   * 21154955706****
   */
  orderId?: number;
  /**
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'number',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualWareHouseResponseBodyData extends $tea.Model {
  /**
   * @example
   * 21155221661****
   */
  orderId?: number;
  /**
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      virtualWareHouseId: 'VirtualWareHouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      virtualWareHouseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * 21152382576****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualWareHouseResponseBodyData extends $tea.Model {
  /**
   * @example
   * 21152153510****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountResponseBodyData extends $tea.Model {
  /**
   * @example
   * test
   */
  account?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * cd0289a263bf4146a2e00888321178234b65e8c050142074ad05683e3749****
   */
  passwordSha256Hex?: string;
  privilegeDescription?: string;
  /**
   * @example
   * Super
   */
  privilegeType?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      comment: 'Comment',
      passwordSha256Hex: 'PasswordSha256Hex',
      privilegeDescription: 'PrivilegeDescription',
      privilegeType: 'PrivilegeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      comment: 'string',
      passwordSha256Hex: 'string',
      privilegeDescription: 'string',
      privilegeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyDataVirtualWareHouses extends $tea.Model {
  /**
   * @example
   * tcp:9000,http:8123,mysql:9004
   */
  ports?: string;
  /**
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  /**
   * @example
   * Running
   */
  virtualWareHouseStatus?: string;
  /**
   * @example
   * vsw-2vcmrf8c878scsv43****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      virtualWareHouseId: 'VirtualWareHouseId',
      virtualWareHouseStatus: 'VirtualWareHouseStatus',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      virtualWareHouseId: 'string',
      virtualWareHouseStatus: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyData extends $tea.Model {
  /**
   * @example
   * 140692647406****
   */
  aliUid?: number;
  /**
   * @example
   * 200
   */
  cacheStorageSizeGiB?: number;
  /**
   * @example
   * CloudESSD
   */
  cacheStorageType?: string;
  /**
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2022-03-18T08:14:48Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * cc-uf6a499c0m3w5****
   */
  DBClusterId?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @example
   * 21.8
   */
  engineVersion?: string;
  /**
   * @example
   * 2022-04-17T08:14:48Z
   */
  expireTime?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @example
   * 0
   */
  objectStoreSizeGiB?: number;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 8
   */
  resourceCpuCores?: number;
  /**
   * @example
   * 32
   */
  resourceMemoryGiB?: number;
  virtualWareHouses?: DescribeClusterResponseBodyDataVirtualWareHouses[];
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-wz9duj8xd6r1gzhsg*****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-2vcmrf8c878scsv43****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cacheStorageSizeGiB: 'CacheStorageSizeGiB',
      cacheStorageType: 'CacheStorageType',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      objectStoreSizeGiB: 'ObjectStoreSizeGiB',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceCpuCores: 'ResourceCpuCores',
      resourceMemoryGiB: 'ResourceMemoryGiB',
      virtualWareHouses: 'VirtualWareHouses',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cacheStorageSizeGiB: 'number',
      cacheStorageType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      lockMode: 'string',
      lockReason: 'string',
      objectStoreSizeGiB: 'number',
      payType: 'string',
      regionId: 'string',
      resourceCpuCores: 'number',
      resourceMemoryGiB: 'number',
      virtualWareHouses: { 'type': 'array', 'itemType': DescribeClusterResponseBodyDataVirtualWareHouses },
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterSecurityInfoResponseBodyDataSecurityIpGroups extends $tea.Model {
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterSecurityInfoResponseBodyData extends $tea.Model {
  securityIpGroups?: DescribeClusterSecurityInfoResponseBodyDataSecurityIpGroups[];
  static names(): { [key: string]: string } {
    return {
      securityIpGroups: 'SecurityIpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroups: { 'type': 'array', 'itemType': DescribeClusterSecurityInfoResponseBodyDataSecurityIpGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterStatusSetResponseBodyData extends $tea.Model {
  desc?: string;
  /**
   * @example
   * Running
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDataZones extends $tea.Model {
  /**
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyData extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  zones?: DescribeRegionsResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyDataZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningQueryResponseBodyData extends $tea.Model {
  /**
   * @example
   * ::ffff:10.1.XX.XX
   */
  initialAddress?: string;
  /**
   * @example
   * 7c28bbbb-753b-4eba-98b1-efcbe2b9bdf6
   */
  initialQueryId?: string;
  /**
   * @example
   * test
   */
  initialUser?: string;
  /**
   * @example
   * select * from test order by score limit 1;
   */
  query?: string;
  /**
   * @example
   * 2000
   */
  queryDurationMs?: number;
  /**
   * @example
   * 2021-02-02T09:14:48Z
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      query: 'string',
      queryDurationMs: 'number',
      queryStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryResponseBodyData extends $tea.Model {
  /**
   * @example
   * ::ffff:10.1.XX.XX
   */
  initialAddress?: string;
  /**
   * @example
   * 7c28bbbb-753b-4eba-98b1-efcbe2b9bdf6
   */
  initialQueryId?: string;
  /**
   * @example
   * test
   */
  initialUser?: string;
  /**
   * @example
   * 1024000000
   */
  memoryUsage?: number;
  /**
   * @example
   * select * from test order by score limit 1;
   */
  query?: string;
  /**
   * @example
   * 2000
   */
  queryDurationMs?: number;
  /**
   * @example
   * 2021-02-02T08:30:00Z
   */
  queryStartTime?: string;
  /**
   * @example
   * QueryFinish
   */
  queryState?: string;
  /**
   * @example
   * 9141300000
   */
  readBytes?: number;
  /**
   * @example
   * 1000000
   */
  readRows?: number;
  /**
   * @example
   * 8174
   */
  resultBytes?: number;
  /**
   * @example
   * 1
   */
  resultRows?: number;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      memoryUsage: 'MemoryUsage',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
      queryState: 'QueryState',
      readBytes: 'ReadBytes',
      readRows: 'ReadRows',
      resultBytes: 'ResultBytes',
      resultRows: 'ResultRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      memoryUsage: 'number',
      query: 'string',
      queryDurationMs: 'number',
      queryStartTime: 'string',
      queryState: 'string',
      readBytes: 'number',
      readRows: 'number',
      resultBytes: 'number',
      resultRows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryTrendResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2000
   */
  avgDurationMs?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 3000
   */
  maxDurationMs?: number;
  /**
   * @example
   * 1000
   */
  minDurationMs?: number;
  /**
   * @example
   * 2021-02-02T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgDurationMs: 'AvgDurationMs',
      count: 'Count',
      maxDurationMs: 'MaxDurationMs',
      minDurationMs: 'MinDurationMs',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgDurationMs: 'number',
      count: 'number',
      maxDurationMs: 'number',
      minDurationMs: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseResponseBodyData extends $tea.Model {
  /**
   * @example
   * tcp:9000,http:8123,mysql:9004
   */
  ports?: string;
  /**
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  /**
   * @example
   * Running
   */
  virtualWareHouseStatus?: string;
  /**
   * @example
   * vsw-bp1tg609m5j85jejq****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      virtualWareHouseId: 'VirtualWareHouseId',
      virtualWareHouseStatus: 'VirtualWareHouseStatus',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      virtualWareHouseId: 'string',
      virtualWareHouseStatus: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseClassSetResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  cacheStorageStep?: number;
  /**
   * @example
   * 16
   */
  cpuCores?: number;
  /**
   * @example
   * 32000
   */
  maxCacheStorage?: number;
  /**
   * @example
   * 64
   */
  memoryGiB?: number;
  /**
   * @example
   * 200
   */
  minCacheStorage?: number;
  /**
   * @example
   * n1.2xlarge
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cacheStorageStep: 'CacheStorageStep',
      cpuCores: 'CpuCores',
      maxCacheStorage: 'MaxCacheStorage',
      memoryGiB: 'MemoryGiB',
      minCacheStorage: 'MinCacheStorage',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheStorageStep: 'number',
      cpuCores: 'number',
      maxCacheStorage: 'number',
      memoryGiB: 'number',
      minCacheStorage: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseEndpointInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * slb
   */
  endpointType?: string;
  /**
   * @example
   * 10.0.xx.xx
   */
  ip?: string;
  /**
   * @example
   * intranet
   */
  netType?: string;
  /**
   * @example
   * tcp:9000,http:8123,mysql:9004
   */
  ports?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  /**
   * @example
   * vw-bp11gxp8g992f****.clickhouse.ads.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      ip: 'Ip',
      netType: 'NetType',
      ports: 'Ports',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      ip: 'string',
      netType: 'string',
      ports: 'string',
      status: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualWareHouseStatusSetResponseBodyData extends $tea.Model {
  desc?: string;
  /**
   * @example
   * Running
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDistributedTablesBufferSizeResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  bufferSizeGiB?: number;
  static names(): { [key: string]: string } {
    return {
      bufferSizeGiB: 'BufferSizeGiB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferSizeGiB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyData extends $tea.Model {
  /**
   * @example
   * test
   */
  account?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * cd0289a263bf4146a2e00888321178234b65e8c050142074ad05683e3749****
   */
  passwordSha256Hex?: string;
  privilegeDescription?: string;
  /**
   * @example
   * Normal
   */
  privilegeType?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      comment: 'Comment',
      passwordSha256Hex: 'PasswordSha256Hex',
      privilegeDescription: 'PrivilegeDescription',
      privilegeType: 'PrivilegeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      comment: 'string',
      passwordSha256Hex: 'string',
      privilegeDescription: 'string',
      privilegeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyDataVirtualWareHouses extends $tea.Model {
  /**
   * @example
   * tcp:9000,http:8123,mysql:9004
   */
  ports?: string;
  /**
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vw-uf6a499c0m3w5****
   */
  virtualWareHouseId?: string;
  /**
   * @example
   * Running
   */
  virtualWareHouseStatus?: string;
  /**
   * @example
   * vsw-bp1tg609m5j85jejq****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      virtualWareHouseId: 'VirtualWareHouseId',
      virtualWareHouseStatus: 'VirtualWareHouseStatus',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      virtualWareHouseId: 'string',
      virtualWareHouseStatus: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $tea.Model {
  /**
   * @example
   * 140692647406****
   */
  aliUid?: number;
  /**
   * @example
   * 200
   */
  cacheStorageSizeGiB?: number;
  /**
   * @example
   * CloudESSD
   */
  cacheStorageType?: string;
  /**
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2022-03-18T08:14:48Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @example
   * 21.8
   */
  engineVersion?: string;
  /**
   * @example
   * 2022-04-17T08:14:48Z
   */
  expireTime?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @example
   * 0
   */
  objectStoreSizeGiB?: number;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 8
   */
  resourceCpuCores?: number;
  /**
   * @example
   * 32
   */
  resourceMemoryGiB?: number;
  virtualWareHouses?: ListClustersResponseBodyDataVirtualWareHouses[];
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2zedznmtm8j7fksbc****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1tg609m5j85jejq****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cacheStorageSizeGiB: 'CacheStorageSizeGiB',
      cacheStorageType: 'CacheStorageType',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      objectStoreSizeGiB: 'ObjectStoreSizeGiB',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceCpuCores: 'ResourceCpuCores',
      resourceMemoryGiB: 'ResourceMemoryGiB',
      virtualWareHouses: 'VirtualWareHouses',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cacheStorageSizeGiB: 'number',
      cacheStorageType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      lockMode: 'string',
      lockReason: 'string',
      objectStoreSizeGiB: 'number',
      payType: 'string',
      regionId: 'string',
      resourceCpuCores: 'number',
      resourceMemoryGiB: 'number',
      virtualWareHouses: { 'type': 'array', 'itemType': ListClustersResponseBodyDataVirtualWareHouses },
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHouseConfigsResponseBodyData extends $tea.Model {
  /**
   * @example
   * keep_alive_timeout
   */
  configFullPath?: string;
  /**
   * @example
   * config.xml
   */
  configType?: string;
  /**
   * @example
   * 300
   */
  defaultValue?: string;
  /**
   * @example
   * The number of seconds that ClickHouse HTTP server waits for incoming requests before closing the connection
   */
  description?: string;
  /**
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @example
   * >=10
   */
  spec?: string;
  /**
   * @example
   * 300
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      configFullPath: 'ConfigFullPath',
      configType: 'ConfigType',
      defaultValue: 'DefaultValue',
      description: 'Description',
      needRestart: 'NeedRestart',
      spec: 'Spec',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFullPath: 'string',
      configType: 'string',
      defaultValue: 'string',
      description: 'string',
      needRestart: 'boolean',
      spec: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualWareHousesResponseBodyData extends $tea.Model {
  /**
   * @example
   * tcp:9000,http:8123,mysql:9004
   */
  ports?: string;
  /**
   * @example
   * 200
   */
  virtualWareHouseCacheStorage?: number;
  /**
   * @example
   * n1.xlarge
   */
  virtualWareHouseClass?: string;
  /**
   * @example
   * test
   */
  virtualWareHouseDescription?: string;
  /**
   * @example
   * vw-bp1w2728d535t****
   */
  virtualWareHouseId?: string;
  /**
   * @example
   * Running
   */
  virtualWareHouseStatus?: string;
  /**
   * @example
   * vsw-bp1tg609m5j85jejq****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      virtualWareHouseCacheStorage: 'VirtualWareHouseCacheStorage',
      virtualWareHouseClass: 'VirtualWareHouseClass',
      virtualWareHouseDescription: 'VirtualWareHouseDescription',
      virtualWareHouseId: 'VirtualWareHouseId',
      virtualWareHouseStatus: 'VirtualWareHouseStatus',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: 'string',
      virtualWareHouseCacheStorage: 'number',
      virtualWareHouseClass: 'string',
      virtualWareHouseDescription: 'string',
      virtualWareHouseId: 'string',
      virtualWareHouseStatus: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseConfigRequestConfigChanges extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * keep_alive_timeout
   */
  configFullPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      configFullPath: 'ConfigFullPath',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFullPath: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualWareHouseResourceResponseBodyData extends $tea.Model {
  /**
   * @example
   * 21152548723****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "clickhouse.aliyuncs.com",
      'ap-southeast-1': "clickhouse.aliyuncs.com",
      'cn-beijing': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-1': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-pop': "clickhouse.aliyuncs.com",
      'cn-beijing-gov-1': "clickhouse.aliyuncs.com",
      'cn-beijing-nu16-b01': "clickhouse.aliyuncs.com",
      'cn-edge-1': "clickhouse.aliyuncs.com",
      'cn-fujian': "clickhouse.aliyuncs.com",
      'cn-haidian-cm12-c01': "clickhouse.aliyuncs.com",
      'cn-hangzhou': "clickhouse.aliyuncs.com",
      'cn-hangzhou-bj-b01': "clickhouse.aliyuncs.com",
      'cn-hangzhou-finance': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "clickhouse.aliyuncs.com",
      'cn-hangzhou-test-306': "clickhouse.aliyuncs.com",
      'cn-hongkong': "clickhouse.aliyuncs.com",
      'cn-hongkong-finance-pop': "clickhouse.aliyuncs.com",
      'cn-north-2-gov-1': "clickhouse.aliyuncs.com",
      'cn-qingdao': "clickhouse.aliyuncs.com",
      'cn-qingdao-nebula': "clickhouse.aliyuncs.com",
      'cn-shanghai': "clickhouse.aliyuncs.com",
      'cn-shanghai-et15-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-et2-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-finance-1': "clickhouse.aliyuncs.com",
      'cn-shanghai-inner': "clickhouse.aliyuncs.com",
      'cn-shanghai-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen': "clickhouse.aliyuncs.com",
      'cn-shenzhen-finance-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen-inner': "clickhouse.aliyuncs.com",
      'cn-shenzhen-st4-d01': "clickhouse.aliyuncs.com",
      'cn-shenzhen-su18-b01': "clickhouse.aliyuncs.com",
      'cn-wuhan': "clickhouse.aliyuncs.com",
      'cn-yushanfang': "clickhouse.aliyuncs.com",
      'cn-zhangbei-na61-b01': "clickhouse.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "clickhouse.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "clickhouse.aliyuncs.com",
      'eu-west-1-oxs': "clickhouse.aliyuncs.com",
      'me-east-1': "clickhouse.aliyuncs.com",
      'rus-west-1-pop': "clickhouse.aliyuncs.com",
      'us-east-1': "clickhouse.aliyuncs.com",
      'us-west-1': "clickhouse.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("clickhouse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 申请计算组公网SLB
   * 
   * @param request - AllocateVirtualWareHousePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateVirtualWareHousePublicConnectionResponse
   */
  async allocateVirtualWareHousePublicConnectionWithOptions(request: AllocateVirtualWareHousePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateVirtualWareHousePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateVirtualWareHousePublicConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateVirtualWareHousePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateVirtualWareHousePublicConnectionResponse({}));
  }

  /**
   * 申请计算组公网SLB
   * 
   * @param request - AllocateVirtualWareHousePublicConnectionRequest
   * @returns AllocateVirtualWareHousePublicConnectionResponse
   */
  async allocateVirtualWareHousePublicConnection(request: AllocateVirtualWareHousePublicConnectionRequest): Promise<AllocateVirtualWareHousePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateVirtualWareHousePublicConnectionWithOptions(request, runtime);
  }

  /**
   * 创建实例检查
   * 
   * @param request - CheckCreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreateClusterResponse
   */
  async checkCreateClusterWithOptions(request: CheckCreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CheckCreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseDescription)) {
      query["VirtualWareHouseDescription"] = request.virtualWareHouseDescription;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCreateCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCreateClusterResponse>(await this.callApi(params, req, runtime), new CheckCreateClusterResponse({}));
  }

  /**
   * 创建实例检查
   * 
   * @param request - CheckCreateClusterRequest
   * @returns CheckCreateClusterResponse
   */
  async checkCreateCluster(request: CheckCreateClusterRequest): Promise<CheckCreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCreateClusterWithOptions(request, runtime);
  }

  /**
   * 创建计算组检查
   * 
   * @param request - CheckCreateVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreateVirtualWareHouseResponse
   */
  async checkCreateVirtualWareHouseWithOptions(request: CheckCreateVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<CheckCreateVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseDescription)) {
      query["VirtualWareHouseDescription"] = request.virtualWareHouseDescription;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCreateVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCreateVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new CheckCreateVirtualWareHouseResponse({}));
  }

  /**
   * 创建计算组检查
   * 
   * @param request - CheckCreateVirtualWareHouseRequest
   * @returns CheckCreateVirtualWareHouseResponse
   */
  async checkCreateVirtualWareHouse(request: CheckCreateVirtualWareHouseRequest): Promise<CheckCreateVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCreateVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 删除计算组检查
   * 
   * @param request - CheckDeleteVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDeleteVirtualWareHouseResponse
   */
  async checkDeleteVirtualWareHouseWithOptions(request: CheckDeleteVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<CheckDeleteVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDeleteVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDeleteVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new CheckDeleteVirtualWareHouseResponse({}));
  }

  /**
   * 删除计算组检查
   * 
   * @param request - CheckDeleteVirtualWareHouseRequest
   * @returns CheckDeleteVirtualWareHouseResponse
   */
  async checkDeleteVirtualWareHouse(request: CheckDeleteVirtualWareHouseRequest): Promise<CheckDeleteVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDeleteVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 计算组变配检查
   * 
   * @param request - CheckModifyVirtualWareHouseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckModifyVirtualWareHouseResourceResponse
   */
  async checkModifyVirtualWareHouseResourceWithOptions(request: CheckModifyVirtualWareHouseResourceRequest, runtime: $Util.RuntimeOptions): Promise<CheckModifyVirtualWareHouseResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckModifyVirtualWareHouseResource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckModifyVirtualWareHouseResourceResponse>(await this.callApi(params, req, runtime), new CheckModifyVirtualWareHouseResourceResponse({}));
  }

  /**
   * 计算组变配检查
   * 
   * @param request - CheckModifyVirtualWareHouseResourceRequest
   * @returns CheckModifyVirtualWareHouseResourceResponse
   */
  async checkModifyVirtualWareHouseResource(request: CheckModifyVirtualWareHouseResourceRequest): Promise<CheckModifyVirtualWareHouseResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkModifyVirtualWareHouseResourceWithOptions(request, runtime);
  }

  /**
   * 创建实例账户
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordSha256Hex)) {
      query["PasswordSha256Hex"] = request.passwordSha256Hex;
    }

    if (!Util.isUnset(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  /**
   * 创建实例账户
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseDescription)) {
      query["VirtualWareHouseDescription"] = request.virtualWareHouseDescription;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 创建计算组
   * 
   * @param request - CreateVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualWareHouseResponse
   */
  async createVirtualWareHouseWithOptions(request: CreateVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseDescription)) {
      query["VirtualWareHouseDescription"] = request.virtualWareHouseDescription;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new CreateVirtualWareHouseResponse({}));
  }

  /**
   * 创建计算组
   * 
   * @param request - CreateVirtualWareHouseRequest
   * @returns CreateVirtualWareHouseResponse
   */
  async createVirtualWareHouse(request: CreateVirtualWareHouseRequest): Promise<CreateVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 删除实例账户
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  /**
   * 删除实例账户
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 删除实例IP白名单组
   * 
   * @param request - DeleteClusterSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterSecurityIPGroupResponse
   */
  async deleteClusterSecurityIPGroupWithOptions(request: DeleteClusterSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClusterSecurityIPGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new DeleteClusterSecurityIPGroupResponse({}));
  }

  /**
   * 删除实例IP白名单组
   * 
   * @param request - DeleteClusterSecurityIPGroupRequest
   * @returns DeleteClusterSecurityIPGroupResponse
   */
  async deleteClusterSecurityIPGroup(request: DeleteClusterSecurityIPGroupRequest): Promise<DeleteClusterSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * 删除计算组
   * 
   * @param request - DeleteVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualWareHouseResponse
   */
  async deleteVirtualWareHouseWithOptions(request: DeleteVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new DeleteVirtualWareHouseResponse({}));
  }

  /**
   * 删除计算组
   * 
   * @param request - DeleteVirtualWareHouseRequest
   * @returns DeleteVirtualWareHouseResponse
   */
  async deleteVirtualWareHouse(request: DeleteVirtualWareHouseRequest): Promise<DeleteVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 查看实例账户详情
   * 
   * @param request - DescribeAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountResponse
   */
  async describeAccountWithOptions(request: DescribeAccountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountResponse>(await this.callApi(params, req, runtime), new DescribeAccountResponse({}));
  }

  /**
   * 查看实例账户详情
   * 
   * @param request - DescribeAccountRequest
   * @returns DescribeAccountResponse
   */
  async describeAccount(request: DescribeAccountRequest): Promise<DescribeAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountWithOptions(request, runtime);
  }

  /**
   * 查看实例详情
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  /**
   * 查看实例详情
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * 查看实例白名单配置
   * 
   * @param request - DescribeClusterSecurityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterSecurityInfoResponse
   */
  async describeClusterSecurityInfoWithOptions(request: DescribeClusterSecurityInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterSecurityInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterSecurityInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterSecurityInfoResponse>(await this.callApi(params, req, runtime), new DescribeClusterSecurityInfoResponse({}));
  }

  /**
   * 查看实例白名单配置
   * 
   * @param request - DescribeClusterSecurityInfoRequest
   * @returns DescribeClusterSecurityInfoResponse
   */
  async describeClusterSecurityInfo(request: DescribeClusterSecurityInfoRequest): Promise<DescribeClusterSecurityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterSecurityInfoWithOptions(request, runtime);
  }

  /**
   * 查看实例状态集合
   * 
   * @param request - DescribeClusterStatusSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterStatusSetResponse
   */
  async describeClusterStatusSetWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeClusterStatusSetResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeClusterStatusSet",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterStatusSetResponse>(await this.callApi(params, req, runtime), new DescribeClusterStatusSetResponse({}));
  }

  /**
   * 查看实例状态集合
   * @returns DescribeClusterStatusSetResponse
   */
  async describeClusterStatusSet(): Promise<DescribeClusterStatusSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterStatusSetWithOptions(runtime);
  }

  /**
   * 查看可服务Region和Zone
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * 查看可服务Region和Zone
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 查看计算组正在运行查询列表
   * 
   * @param request - DescribeRunningQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRunningQueryResponse
   */
  async describeRunningQueryWithOptions(request: DescribeRunningQueryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRunningQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!Util.isUnset(request.queryKeyWord)) {
      query["QueryKeyWord"] = request.queryKeyWord;
    }

    if (!Util.isUnset(request.queryUser)) {
      query["QueryUser"] = request.queryUser;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRunningQuery",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRunningQueryResponse>(await this.callApi(params, req, runtime), new DescribeRunningQueryResponse({}));
  }

  /**
   * 查看计算组正在运行查询列表
   * 
   * @param request - DescribeRunningQueryRequest
   * @returns DescribeRunningQueryResponse
   */
  async describeRunningQuery(request: DescribeRunningQueryRequest): Promise<DescribeRunningQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRunningQueryWithOptions(request, runtime);
  }

  /**
   * 查看计算组慢查询详情
   * 
   * @param request - DescribeSlowQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowQueryResponse
   */
  async describeSlowQueryWithOptions(request: DescribeSlowQueryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowQuery",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowQueryResponse>(await this.callApi(params, req, runtime), new DescribeSlowQueryResponse({}));
  }

  /**
   * 查看计算组慢查询详情
   * 
   * @param request - DescribeSlowQueryRequest
   * @returns DescribeSlowQueryResponse
   */
  async describeSlowQuery(request: DescribeSlowQueryRequest): Promise<DescribeSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowQueryWithOptions(request, runtime);
  }

  /**
   * 查看计算组慢查询趋势 以1分钟为间隔统计
   * 
   * @param request - DescribeSlowQueryTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowQueryTrendResponse
   */
  async describeSlowQueryTrendWithOptions(request: DescribeSlowQueryTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowQueryTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowQueryTrend",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowQueryTrendResponse>(await this.callApi(params, req, runtime), new DescribeSlowQueryTrendResponse({}));
  }

  /**
   * 查看计算组慢查询趋势 以1分钟为间隔统计
   * 
   * @param request - DescribeSlowQueryTrendRequest
   * @returns DescribeSlowQueryTrendResponse
   */
  async describeSlowQueryTrend(request: DescribeSlowQueryTrendRequest): Promise<DescribeSlowQueryTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowQueryTrendWithOptions(request, runtime);
  }

  /**
   * 查看计算组详情
   * 
   * @param request - DescribeVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualWareHouseResponse
   */
  async describeVirtualWareHouseWithOptions(request: DescribeVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new DescribeVirtualWareHouseResponse({}));
  }

  /**
   * 查看计算组详情
   * 
   * @param request - DescribeVirtualWareHouseRequest
   * @returns DescribeVirtualWareHouseResponse
   */
  async describeVirtualWareHouse(request: DescribeVirtualWareHouseRequest): Promise<DescribeVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 查看计算组规格码集合
   * 
   * @param request - DescribeVirtualWareHouseClassSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualWareHouseClassSetResponse
   */
  async describeVirtualWareHouseClassSetWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVirtualWareHouseClassSetResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualWareHouseClassSet",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualWareHouseClassSetResponse>(await this.callApi(params, req, runtime), new DescribeVirtualWareHouseClassSetResponse({}));
  }

  /**
   * 查看计算组规格码集合
   * @returns DescribeVirtualWareHouseClassSetResponse
   */
  async describeVirtualWareHouseClassSet(): Promise<DescribeVirtualWareHouseClassSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualWareHouseClassSetWithOptions(runtime);
  }

  /**
   * 查看计算组链接信息
   * 
   * @param request - DescribeVirtualWareHouseEndpointInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualWareHouseEndpointInfoResponse
   */
  async describeVirtualWareHouseEndpointInfoWithOptions(request: DescribeVirtualWareHouseEndpointInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualWareHouseEndpointInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualWareHouseEndpointInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualWareHouseEndpointInfoResponse>(await this.callApi(params, req, runtime), new DescribeVirtualWareHouseEndpointInfoResponse({}));
  }

  /**
   * 查看计算组链接信息
   * 
   * @param request - DescribeVirtualWareHouseEndpointInfoRequest
   * @returns DescribeVirtualWareHouseEndpointInfoResponse
   */
  async describeVirtualWareHouseEndpointInfo(request: DescribeVirtualWareHouseEndpointInfoRequest): Promise<DescribeVirtualWareHouseEndpointInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualWareHouseEndpointInfoWithOptions(request, runtime);
  }

  /**
   * 查看计算组状态集合
   * 
   * @param request - DescribeVirtualWareHouseStatusSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualWareHouseStatusSetResponse
   */
  async describeVirtualWareHouseStatusSetWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVirtualWareHouseStatusSetResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualWareHouseStatusSet",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualWareHouseStatusSetResponse>(await this.callApi(params, req, runtime), new DescribeVirtualWareHouseStatusSetResponse({}));
  }

  /**
   * 查看计算组状态集合
   * @returns DescribeVirtualWareHouseStatusSetResponse
   */
  async describeVirtualWareHouseStatusSet(): Promise<DescribeVirtualWareHouseStatusSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualWareHouseStatusSetWithOptions(runtime);
  }

  /**
   * 查询分布式表缓存大小
   * 
   * @param request - GetDistributedTablesBufferSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDistributedTablesBufferSizeResponse
   */
  async getDistributedTablesBufferSizeWithOptions(request: GetDistributedTablesBufferSizeRequest, runtime: $Util.RuntimeOptions): Promise<GetDistributedTablesBufferSizeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDistributedTablesBufferSize",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDistributedTablesBufferSizeResponse>(await this.callApi(params, req, runtime), new GetDistributedTablesBufferSizeResponse({}));
  }

  /**
   * 查询分布式表缓存大小
   * 
   * @param request - GetDistributedTablesBufferSizeRequest
   * @returns GetDistributedTablesBufferSizeResponse
   */
  async getDistributedTablesBufferSize(request: GetDistributedTablesBufferSizeRequest): Promise<GetDistributedTablesBufferSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDistributedTablesBufferSizeWithOptions(request, runtime);
  }

  /**
   * Kill计算组查询
   * 
   * @param request - KillQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillQueryResponse
   */
  async killQueryWithOptions(request: KillQueryRequest, runtime: $Util.RuntimeOptions): Promise<KillQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.queryIds)) {
      query["QueryIds"] = request.queryIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillQuery",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillQueryResponse>(await this.callApi(params, req, runtime), new KillQueryResponse({}));
  }

  /**
   * Kill计算组查询
   * 
   * @param request - KillQueryRequest
   * @returns KillQueryResponse
   */
  async killQuery(request: KillQueryRequest): Promise<KillQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killQueryWithOptions(request, runtime);
  }

  /**
   * 查看实例账户详情列表
   * 
   * @param request - ListAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsResponse
   */
  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccounts",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
  }

  /**
   * 查看实例账户详情列表
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * 查看实例详情列表
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * 查看实例详情列表
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查看计算组参数配置列表
   * 
   * @param request - ListVirtualWareHouseConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualWareHouseConfigsResponse
   */
  async listVirtualWareHouseConfigsWithOptions(request: ListVirtualWareHouseConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListVirtualWareHouseConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVirtualWareHouseConfigs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVirtualWareHouseConfigsResponse>(await this.callApi(params, req, runtime), new ListVirtualWareHouseConfigsResponse({}));
  }

  /**
   * 查看计算组参数配置列表
   * 
   * @param request - ListVirtualWareHouseConfigsRequest
   * @returns ListVirtualWareHouseConfigsResponse
   */
  async listVirtualWareHouseConfigs(request: ListVirtualWareHouseConfigsRequest): Promise<ListVirtualWareHouseConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualWareHouseConfigsWithOptions(request, runtime);
  }

  /**
   * 查看计算组详情列表
   * 
   * @param request - ListVirtualWareHousesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualWareHousesResponse
   */
  async listVirtualWareHousesWithOptions(request: ListVirtualWareHousesRequest, runtime: $Util.RuntimeOptions): Promise<ListVirtualWareHousesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVirtualWareHouses",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVirtualWareHousesResponse>(await this.callApi(params, req, runtime), new ListVirtualWareHousesResponse({}));
  }

  /**
   * 查看计算组详情列表
   * 
   * @param request - ListVirtualWareHousesRequest
   * @returns ListVirtualWareHousesResponse
   */
  async listVirtualWareHouses(request: ListVirtualWareHousesRequest): Promise<ListVirtualWareHousesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualWareHousesWithOptions(request, runtime);
  }

  /**
   * 修改实例账户备注
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  /**
   * 修改实例账户备注
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改实例账户权限级别
   * 
   * @param request - ModifyAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilegeWithOptions(request: ModifyAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPrivilege",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new ModifyAccountPrivilegeResponse({}));
  }

  /**
   * 修改实例账户权限级别
   * 
   * @param request - ModifyAccountPrivilegeRequest
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilege(request: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * 修改实例描述信息
   * 
   * @param request - ModifyClusterDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterDescriptionResponse
   */
  async modifyClusterDescriptionWithOptions(request: ModifyClusterDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterDescription",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyClusterDescriptionResponse({}));
  }

  /**
   * 修改实例描述信息
   * 
   * @param request - ModifyClusterDescriptionRequest
   * @returns ModifyClusterDescriptionResponse
   */
  async modifyClusterDescription(request: ModifyClusterDescriptionRequest): Promise<ModifyClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改计算组参数配置
   * 
   * @param tmpReq - ModifyVirtualWareHouseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVirtualWareHouseConfigResponse
   */
  async modifyVirtualWareHouseConfigWithOptions(tmpReq: ModifyVirtualWareHouseConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVirtualWareHouseConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyVirtualWareHouseConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configChanges)) {
      request.configChangesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configChanges, "ConfigChanges", "json");
    }

    let query = { };
    if (!Util.isUnset(request.configChangesShrink)) {
      query["ConfigChanges"] = request.configChangesShrink;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVirtualWareHouseConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVirtualWareHouseConfigResponse>(await this.callApi(params, req, runtime), new ModifyVirtualWareHouseConfigResponse({}));
  }

  /**
   * 修改计算组参数配置
   * 
   * @param request - ModifyVirtualWareHouseConfigRequest
   * @returns ModifyVirtualWareHouseConfigResponse
   */
  async modifyVirtualWareHouseConfig(request: ModifyVirtualWareHouseConfigRequest): Promise<ModifyVirtualWareHouseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVirtualWareHouseConfigWithOptions(request, runtime);
  }

  /**
   * 修改计算组描述信息
   * 
   * @param request - ModifyVirtualWareHouseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVirtualWareHouseDescriptionResponse
   */
  async modifyVirtualWareHouseDescriptionWithOptions(request: ModifyVirtualWareHouseDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVirtualWareHouseDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseDescription)) {
      query["VirtualWareHouseDescription"] = request.virtualWareHouseDescription;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVirtualWareHouseDescription",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVirtualWareHouseDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyVirtualWareHouseDescriptionResponse({}));
  }

  /**
   * 修改计算组描述信息
   * 
   * @param request - ModifyVirtualWareHouseDescriptionRequest
   * @returns ModifyVirtualWareHouseDescriptionResponse
   */
  async modifyVirtualWareHouseDescription(request: ModifyVirtualWareHouseDescriptionRequest): Promise<ModifyVirtualWareHouseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVirtualWareHouseDescriptionWithOptions(request, runtime);
  }

  /**
   * 计算组变配
   * 
   * @param request - ModifyVirtualWareHouseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVirtualWareHouseResourceResponse
   */
  async modifyVirtualWareHouseResourceWithOptions(request: ModifyVirtualWareHouseResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVirtualWareHouseResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseCacheStorage)) {
      query["VirtualWareHouseCacheStorage"] = request.virtualWareHouseCacheStorage;
    }

    if (!Util.isUnset(request.virtualWareHouseClass)) {
      query["VirtualWareHouseClass"] = request.virtualWareHouseClass;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVirtualWareHouseResource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVirtualWareHouseResourceResponse>(await this.callApi(params, req, runtime), new ModifyVirtualWareHouseResourceResponse({}));
  }

  /**
   * 计算组变配
   * 
   * @param request - ModifyVirtualWareHouseResourceRequest
   * @returns ModifyVirtualWareHouseResourceResponse
   */
  async modifyVirtualWareHouseResource(request: ModifyVirtualWareHouseResourceRequest): Promise<ModifyVirtualWareHouseResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVirtualWareHouseResourceWithOptions(request, runtime);
  }

  /**
   * 实例IP白名单组添加IP
   * 
   * @param request - PatchClusterSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchClusterSecurityIPGroupResponse
   */
  async patchClusterSecurityIPGroupWithOptions(request: PatchClusterSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<PatchClusterSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PatchClusterSecurityIPGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PatchClusterSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new PatchClusterSecurityIPGroupResponse({}));
  }

  /**
   * 实例IP白名单组添加IP
   * 
   * @param request - PatchClusterSecurityIPGroupRequest
   * @returns PatchClusterSecurityIPGroupResponse
   */
  async patchClusterSecurityIPGroup(request: PatchClusterSecurityIPGroupRequest): Promise<PatchClusterSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.patchClusterSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * 释放计算组公网SLB
   * 
   * @param request - ReleaseVirtualWareHousePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseVirtualWareHousePublicConnectionResponse
   */
  async releaseVirtualWareHousePublicConnectionWithOptions(request: ReleaseVirtualWareHousePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseVirtualWareHousePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseVirtualWareHousePublicConnection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseVirtualWareHousePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseVirtualWareHousePublicConnectionResponse({}));
  }

  /**
   * 释放计算组公网SLB
   * 
   * @param request - ReleaseVirtualWareHousePublicConnectionRequest
   * @returns ReleaseVirtualWareHousePublicConnectionResponse
   */
  async releaseVirtualWareHousePublicConnection(request: ReleaseVirtualWareHousePublicConnectionRequest): Promise<ReleaseVirtualWareHousePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseVirtualWareHousePublicConnectionWithOptions(request, runtime);
  }

  /**
   * 重置实例账户密码
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordSha256Hex)) {
      query["PasswordSha256Hex"] = request.passwordSha256Hex;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
  }

  /**
   * 重置实例账户密码
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * 重启计算组
   * 
   * @param request - RestartVirtualWareHouseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartVirtualWareHouseResponse
   */
  async restartVirtualWareHouseWithOptions(request: RestartVirtualWareHouseRequest, runtime: $Util.RuntimeOptions): Promise<RestartVirtualWareHouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualWareHouseId)) {
      query["VirtualWareHouseId"] = request.virtualWareHouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartVirtualWareHouse",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartVirtualWareHouseResponse>(await this.callApi(params, req, runtime), new RestartVirtualWareHouseResponse({}));
  }

  /**
   * 重启计算组
   * 
   * @param request - RestartVirtualWareHouseRequest
   * @returns RestartVirtualWareHouseResponse
   */
  async restartVirtualWareHouse(request: RestartVirtualWareHouseRequest): Promise<RestartVirtualWareHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartVirtualWareHouseWithOptions(request, runtime);
  }

  /**
   * 实例小版本升级(内核向前兼容)
   * 
   * @param request - UpgradeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterResponse
   */
  async upgradeClusterWithOptions(request: UpgradeClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClusterResponse>(await this.callApi(params, req, runtime), new UpgradeClusterResponse({}));
  }

  /**
   * 实例小版本升级(内核向前兼容)
   * 
   * @param request - UpgradeClusterRequest
   * @returns UpgradeClusterResponse
   */
  async upgradeCluster(request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClusterWithOptions(request, runtime);
  }

  /**
   * 重置实例IP白名单组IP列表
   * 
   * @param request - UpsertClusterSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertClusterSecurityIPGroupResponse
   */
  async upsertClusterSecurityIPGroupWithOptions(request: UpsertClusterSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpsertClusterSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpsertClusterSecurityIPGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpsertClusterSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new UpsertClusterSecurityIPGroupResponse({}));
  }

  /**
   * 重置实例IP白名单组IP列表
   * 
   * @param request - UpsertClusterSecurityIPGroupRequest
   * @returns UpsertClusterSecurityIPGroupResponse
   */
  async upsertClusterSecurityIPGroup(request: UpsertClusterSecurityIPGroupRequest): Promise<UpsertClusterSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upsertClusterSecurityIPGroupWithOptions(request, runtime);
  }

}
