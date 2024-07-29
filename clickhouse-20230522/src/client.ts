// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NormalAccount
   */
  accountType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  description?: string;
  dmlAuthSetting?: CreateAccountRequestDmlAuthSetting;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4@
   */
  password?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
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
      account: 'Account',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      dmlAuthSetting: 'DmlAuthSetting',
      password: 'Password',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      description: 'string',
      dmlAuthSetting: CreateAccountRequestDmlAuthSetting,
      password: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NormalAccount
   */
  accountType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  description?: string;
  dmlAuthSettingShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4@
   */
  password?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
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
      account: 'Account',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      dmlAuthSettingShrink: 'DmlAuthSetting',
      password: 'Password',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      description: 'string',
      dmlAuthSettingShrink: 'string',
      password: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  data?: CreateAccountResponseBodyData;
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
      data: CreateAccountResponseBodyData,
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

export class CreateDBRequest extends $tea.Model {
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
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb001
   */
  DBName?: string;
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
      comment: 'Comment',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResponseBody extends $tea.Model {
  data?: CreateDBResponseBodyData;
  /**
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
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
      data: CreateDBResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBResponseBody;
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
      body: CreateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  /**
   * @example
   * AB
   */
  clientToken?: string;
  DBInstanceDescription?: string;
  /**
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @example
   * 23.8
   */
  engineVersion?: string;
  multiZone?: CreateDBInstanceRequestMultiZone[];
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
   * 32
   */
  scaleMax?: string;
  /**
   * @example
   * 8
   */
  scaleMin?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf6xmupdn7v6ui9f****
   */
  vpcId?: string;
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
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZone: 'MultiZone',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceDescription: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZone: { 'type': 'array', 'itemType': CreateDBInstanceRequestMultiZone },
      regionId: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceShrinkRequest extends $tea.Model {
  /**
   * @example
   * AB
   */
  clientToken?: string;
  DBInstanceDescription?: string;
  /**
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @example
   * 23.8
   */
  engineVersion?: string;
  multiZoneShrink?: string;
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
   * 32
   */
  scaleMax?: string;
  /**
   * @example
   * 8
   */
  scaleMin?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf6xmupdn7v6ui9f****
   */
  vpcId?: string;
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
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZoneShrink: 'MultiZone',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceDescription: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZoneShrink: 'string',
      regionId: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  data?: CreateDBInstanceResponseBodyData;
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
      data: CreateDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBInstanceResponseBody;
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
      body: CreateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointRequest extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * Public
   */
  DBInstanceNetType?: string;
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
      connectionPrefix: 'ConnectionPrefix',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPrefix: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponseBody extends $tea.Model {
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

export class CreateEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEndpointResponseBody;
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
      body: CreateEndpointResponseBody,
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
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  data?: DeleteAccountResponseBodyData;
  /**
   * @example
   * 21D06907-CEA5-561D-B6B1-198BCCE99ED1
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
      data: DeleteAccountResponseBodyData,
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

export class DeleteDBRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb001
   */
  DBName?: string;
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
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResponseBody extends $tea.Model {
  data?: DeleteDBResponseBodyData;
  /**
   * @example
   * 06798FEE-BEF2-5FAF-A30D-728973BBE97C
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
      data: DeleteDBResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBResponseBody;
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
      body: DeleteDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $tea.Model {
  data?: DeleteDBInstanceResponseBodyData;
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
      data: DeleteDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBInstanceResponseBody;
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
      body: DeleteDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointRequest extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointResponseBody extends $tea.Model {
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

export class DeleteEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEndpointResponseBody;
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
      body: DeleteEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityResponseBody extends $tea.Model {
  data?: DescribeAccountAuthorityResponseBodyData;
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
      data: DescribeAccountAuthorityResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountAuthorityResponseBody;
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
      body: DescribeAccountAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  data?: DescribeAccountsResponseBodyData;
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
      data: DescribeAccountsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountsResponseBody;
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
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  data?: DescribeDBInstanceAttributeResponseBodyData;
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
      data: DescribeDBInstanceAttributeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceAttributeResponseBody;
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
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * dbtest
   */
  DBName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * tableTest
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesResponseBody extends $tea.Model {
  data?: DescribeDBInstanceDataSourcesResponseBodyData;
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
      data: DescribeDBInstanceDataSourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceDataSourcesResponseBody;
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
      body: DescribeDBInstanceDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  /**
   * @example
   * cc-xxxxx,cx-xxxx
   */
  DBInstanceIds?: string;
  /**
   * @example
   * active
   */
  DBInstanceStatus?: string;
  /**
   * @example
   * test
   */
  description?: string;
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceStatus: 'DBInstanceStatus',
      description: 'Description',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: 'string',
      DBInstanceStatus: 'string',
      description: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  data?: DescribeDBInstancesResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: DescribeDBInstancesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancesResponseBody;
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
      body: DescribeDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $tea.Model {
  data?: DescribeEndpointsResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: DescribeEndpointsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndpointsResponseBody;
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
      body: DescribeEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * 1
   */
  initialQueryId?: string;
  /**
   * @example
   * testuser
   */
  initialUser?: string;
  /**
   * @example
   * SELECT
   */
  keyword?: string;
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
  queryDurationMs?: string;
  /**
   * @example
   * id
   */
  queryOrder?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      queryOrder: 'QueryOrder',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'string',
      queryOrder: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $tea.Model {
  data?: DescribeProcessListResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: DescribeProcessListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessListResponseBody;
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
      body: DescribeProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBody extends $tea.Model {
  data?: DescribeSecurityIPListResponseBodyData;
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
      data: DescribeSecurityIPListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityIPListResponseBody;
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
      body: DescribeSecurityIPListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 2023-09-15 16:00:00
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
   * 3000
   */
  queryDurationMs?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2023-09-11 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  data?: DescribeSlowLogRecordsResponseBodyData;
  /**
   * @example
   * DF203CC8-5F68-5E3F-8050-3C77DD65731A
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
      data: DescribeSlowLogRecordsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogRecordsResponseBody;
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
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 2023-06-07 10:03:00
   */
  endTime?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
  /**
   * @example
   * 3000
   */
  queryDurationMs?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2023-04-13 17:48:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      product: 'Product',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      product: 'string',
      queryDurationMs: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBody extends $tea.Model {
  data?: DescribeSlowLogTrendResponseBodyData;
  /**
   * @example
   * 7D3ECB0E-98CA-5E08-A9CA-F70C5A1E9BDF
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
      data: DescribeSlowLogTrendResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogTrendResponseBody;
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
      body: DescribeSlowLogTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * 1
   */
  initialQueryId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      initialQueryId: 'InitialQueryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      initialQueryId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponseBody extends $tea.Model {
  data?: KillProcessResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: KillProcessResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillProcessResponseBody;
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
      body: KillProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dmlAuthSetting?: ModifyAccountAuthorityRequestDmlAuthSetting;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      dmlAuthSetting: 'DmlAuthSetting',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      dmlAuthSetting: ModifyAccountAuthorityRequestDmlAuthSetting,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dmlAuthSettingShrink?: string;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      dmlAuthSettingShrink: 'DmlAuthSetting',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      dmlAuthSettingShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponseBody extends $tea.Model {
  data?: ModifyAccountAuthorityResponseBodyData;
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
      data: ModifyAccountAuthorityResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountAuthorityResponseBody;
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
      body: ModifyAccountAuthorityResponseBody,
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
   * testuser
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
  data?: ModifyAccountDescriptionResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: ModifyAccountDescriptionResponseBodyData,
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

export class ModifyDBInstanceAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  attributeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  attributeValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
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
      attributeType: 'AttributeType',
      attributeValue: 'AttributeValue',
      DBInstanceId: 'DBInstanceId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeType: 'string',
      attributeValue: 'string',
      DBInstanceId: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAttributeResponseBody extends $tea.Model {
  /**
   * @example
   * xxx-xxx-xxx
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

export class ModifyDBInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceAttributeResponseBody;
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
      body: ModifyDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @example
   * 2
   */
  scaleMin?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassResponseBody extends $tea.Model {
  data?: ModifyDBInstanceClassResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: ModifyDBInstanceClassResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceClassResponseBody;
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
      body: ModifyDBInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  /**
   * @example
   * cc-2ze34****-clickhouse..clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * cc-****-clickhouse
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $tea.Model {
  data?: ModifyDBInstanceConnectionStringResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: ModifyDBInstanceConnectionStringResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceConnectionStringResponseBody;
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
      body: ModifyDBInstanceConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 192.168.0.0/24,172.16.0.0/24
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      groupName: 'string',
      modifyMode: 'string',
      regionId: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListResponseBody extends $tea.Model {
  data?: ModifySecurityIPListResponseBodyData;
  /**
   * @example
   * xxx-xxx-xxx
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
      data: ModifySecurityIPListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityIPListResponseBody;
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
      body: ModifySecurityIPListResponseBody,
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
   * test1
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  password?: string;
  /**
   * @example
   * clickhouse
   */
  product?: string;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      password: 'Password',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      password: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  data?: ResetAccountPasswordResponseBodyData;
  /**
   * @example
   * 5A6A077A-577C-536E-AC13-8E715D7A34C8
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
      data: ResetAccountPasswordResponseBodyData,
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

export class RestartDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponseBody extends $tea.Model {
  data?: RestartDBInstanceResponseBodyData;
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
      data: RestartDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBInstanceResponseBody;
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
      body: RestartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceResponseBody extends $tea.Model {
  data?: StartDBInstanceResponseBodyData;
  /**
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F76
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
      data: StartDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDBInstanceResponseBody;
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
      body: StartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceResponseBody extends $tea.Model {
  data?: StopDBInstanceResponseBodyData;
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
      data: StopDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDBInstanceResponseBody;
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
      body: StopDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc-bp1jyis8p15we****
   */
  DBInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2023-01-09T05:00:00Z
   */
  switchTime?: string;
  /**
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @example
   * 23.8.1.41495_6
   */
  targetMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetMinorVersion: 'TargetMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetMinorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBody extends $tea.Model {
  data?: UpgradeMinorVersionResponseBodyData;
  /**
   * @example
   * FE242962-6DA3-5FC8-9691-37B62A3210F7
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
      data: UpgradeMinorVersionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeMinorVersionResponseBody;
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
      body: UpgradeMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequestDmlAuthSetting extends $tea.Model {
  allowDatabases?: string[];
  allowDictionaries?: string[];
  /**
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @example
   * 0
   */
  dmlAuthority?: number;
  static names(): { [key: string]: string } {
    return {
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBodyData extends $tea.Model {
  /**
   * @example
   * test1
   */
  account?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * testdb001
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestMultiZone extends $tea.Model {
  vSwitchIds?: string[];
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 21154955706****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBodyData extends $tea.Model {
  /**
   * @example
   * test1
   */
  account?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * testdb001
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityResponseBodyData extends $tea.Model {
  /**
   * @example
   * test1
   */
  account?: string;
  allowDatabases?: string[];
  allowDictionaries?: string[];
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @example
   * 0
   */
  dmlAuthority?: number;
  totalDatabases?: string[];
  totalDictionaries?: string[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBInstanceId: 'DBInstanceId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      DBInstanceId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
      totalDatabases: { 'type': 'array', 'itemType': 'string' },
      totalDictionaries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyDataAccounts extends $tea.Model {
  /**
   * @example
   * test
   */
  account?: string;
  /**
   * @example
   * NormalAccount
   */
  accountType?: string;
  description?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountType: 'AccountType',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      description: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyData extends $tea.Model {
  accounts?: DescribeAccountsResponseBodyDataAccounts[];
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
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyDataAccounts },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDataNodes extends $tea.Model {
  /**
   * @example
   * active
   */
  nodeStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDataTags extends $tea.Model {
  /**
   * @example
   * id
   */
  key?: string;
  /**
   * @example
   * ck
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyData extends $tea.Model {
  /**
   * @example
   * 140692647406****
   */
  aliUid?: number;
  /**
   * @example
   * PD39050615820269****
   */
  bid?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2023-09-14T08:14:48Z
   */
  createTime?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 0/1
   */
  deletionProtection?: boolean;
  description?: string;
  /**
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @example
   * 23.8.1.41495_6
   */
  engineMinorVersion?: string;
  /**
   * @example
   * 23.8
   */
  engineVersion?: string;
  /**
   * @example
   * 2024-04-17T08:14:48Z
   */
  expireTime?: string;
  latestEngineMinorVersion?: string;
  /**
   * @example
   * 0
   */
  lockMode?: string;
  /**
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @example
   * 21:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 12:00
   */
  maintainStartTime?: string;
  nodes?: DescribeDBInstanceAttributeResponseBodyDataNodes[];
  /**
   * @example
   * 13
   */
  objectStoreSize?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmzygvt54****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @example
   * 8
   */
  scaleMin?: number;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 12
   */
  storageSize?: number;
  /**
   * @example
   * 100
   */
  storageType?: string;
  tags?: DescribeDBInstanceAttributeResponseBodyDataTags[];
  /**
   * @example
   * vsw-uf67ij56zm9x4uc6hmilg
   */
  vSwitchId?: string;
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
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      DBInstanceId: 'DBInstanceId',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      latestEngineMinorVersion: 'LatestEngineMinorVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      nodes: 'Nodes',
      objectStoreSize: 'ObjectStoreSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bid: 'string',
      chargeType: 'string',
      createTime: 'string',
      DBInstanceId: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      latestEngineMinorVersion: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDataNodes },
      objectStoreSize: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDataTags },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesResponseBodyDataColumns extends $tea.Model {
  /**
   * @example
   * c31
   */
  columnName?: string;
  comment?: string;
  /**
   * @example
   * dbtest
   */
  DBName?: string;
  /**
   * @example
   * false
   */
  primaryKey?: string;
  /**
   * @example
   * tableTest
   */
  tableName?: string;
  /**
   * @example
   * UInt64
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      comment: 'Comment',
      DBName: 'DBName',
      primaryKey: 'PrimaryKey',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      comment: 'string',
      DBName: 'string',
      primaryKey: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesResponseBodyData extends $tea.Model {
  columns?: DescribeDBInstanceDataSourcesResponseBodyDataColumns[];
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @example
   * default
   */
  schemas?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      DBInstanceId: 'DBInstanceId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': DescribeDBInstanceDataSourcesResponseBodyDataColumns },
      DBInstanceId: 'string',
      schemas: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDataDBInstancesTags extends $tea.Model {
  /**
   * @example
   * tag
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDataDBInstances extends $tea.Model {
  /**
   * @example
   * 1294****
   */
  aliUid?: string;
  /**
   * @example
   * 186681****
   */
  bid?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * 2022-12-04 21:16:15
   */
  createTime?: string;
  /**
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * False
   */
  deletionProtection?: string;
  /**
   * @example
   * test_desc
   */
  description?: string;
  /**
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @example
   * 22.8
   */
  engineVersion?: string;
  /**
   * @example
   * 2024-02-16 11:51:06
   */
  expireTime?: string;
  /**
   * @example
   * 0
   */
  lockMode?: string;
  /**
   * @example
   * null
   */
  lockReason?: string;
  /**
   * @example
   * 04:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmzy****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 13
   */
  scaleMax?: number;
  /**
   * @example
   * 1
   */
  scaleMin?: number;
  /**
   * @example
   * active
   */
  status?: string;
  tags?: DescribeDBInstancesResponseBodyDataDBInstancesTags[];
  /**
   * @example
   * vsw-8vb5mw****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf6kg****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      DBInstanceId: 'DBInstanceId',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      chargeType: 'string',
      createTime: 'string',
      DBInstanceId: 'string',
      deletionProtection: 'string',
      description: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDataDBInstancesTags },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyData extends $tea.Model {
  DBInstances?: DescribeDBInstancesResponseBodyDataDBInstances[];
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
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDataDBInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyDataEndpointsPorts extends $tea.Model {
  /**
   * @example
   * 8123
   */
  port?: number;
  /**
   * @example
   * HttpPort
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyDataEndpoints extends $tea.Model {
  /**
   * @example
   * cc-****-clickhouse.clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 172.30.XX.XX
   */
  IPAddress?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  ports?: DescribeEndpointsResponseBodyDataEndpointsPorts[];
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * vsw-0xi8829****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf61z****
   */
  vpcId?: string;
  /**
   * @example
   * vpc-uf61z****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      ports: 'Ports',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      ports: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyDataEndpointsPorts },
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBodyData extends $tea.Model {
  endpoints?: DescribeEndpointsResponseBodyDataEndpoints[];
  /**
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      instanceNetworkType: 'InstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyDataEndpoints },
      instanceNetworkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyDataResultSet extends $tea.Model {
  /**
   * @example
   * 0:0:0:0:0:ffff:1edd65ea
   */
  initialAddress?: string;
  /**
   * @example
   * \\"79f7e40b-87e2-4ef4-b6df-21889a3a030e\\"
   */
  initialQueryId?: string;
  /**
   * @example
   * bany
   */
  initialUser?: string;
  /**
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @example
   * 2023-07-23T10:13:23Z
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

export class DescribeProcessListResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-xxxx
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  resultSet?: DescribeProcessListResponseBodyDataResultSet[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyDataResultSet },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBodyDataGroupItems extends $tea.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  /**
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @example
   * 127.0.XX.XX
   */
  securityIPList?: string;
  /**
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      whitelistNetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  groupItems?: DescribeSecurityIPListResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIPListResponseBodyDataGroupItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyDataResultSet extends $tea.Model {
  /**
   * @example
   * 0:0:0:0:0:ffff:1edd65ea
   */
  initialAddress?: string;
  /**
   * @example
   * \\"ae915a3ad30e77e67a7215d05b658cc6\\"
   */
  initialQueryId?: string;
  /**
   * @example
   * bany
   */
  initialUser?: string;
  /**
   * @example
   * 4941696
   */
  memoryUsage?: number;
  /**
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @example
   * 3000
   */
  queryDurationMs?: number;
  /**
   * @example
   * 2023-09-11 16:00:00
   */
  queryStartTime?: string;
  /**
   * @example
   * 4507128020832
   */
  readBytes?: number;
  /**
   * @example
   * 10
   */
  readRows?: number;
  /**
   * @example
   * 10
   */
  resultBytes?: number;
  /**
   * @example
   * ExceptionWhileProcessing
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      memoryUsage: 'MemoryUsage',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
      readBytes: 'ReadBytes',
      readRows: 'ReadRows',
      resultBytes: 'ResultBytes',
      type: 'Type',
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
      readBytes: 'number',
      readRows: 'number',
      resultBytes: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z32****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  resultSet?: DescribeSlowLogRecordsResponseBodyDataResultSet[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyDataResultSet },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyDataResultSet extends $tea.Model {
  /**
   * @example
   * 2000
   */
  avgQueryDurationMs?: number;
  /**
   * @example
   * 1
   */
  cnt?: number;
  /**
   * @example
   * 3000
   */
  maxQueryDurationMs?: number;
  /**
   * @example
   * 1000
   */
  minQueryDurationMs?: number;
  /**
   * @example
   * 2023-04-13 17:48:00
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgQueryDurationMs: 'AvgQueryDurationMs',
      cnt: 'Cnt',
      maxQueryDurationMs: 'MaxQueryDurationMs',
      minQueryDurationMs: 'MinQueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQueryDurationMs: 'number',
      cnt: 'number',
      maxQueryDurationMs: 'number',
      minQueryDurationMs: 'number',
      queryStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  resultSet?: DescribeSlowLogTrendResponseBodyDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodyDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * cc-xxxxxxx
   */
  DBInstanceID?: number;
  /**
   * @example
   * cc-xxxxxxx
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      DBInstanceID: 'number',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityRequestDmlAuthSetting extends $tea.Model {
  allowDatabases?: string[];
  allowDictionaries?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dmlAuthority?: number;
  static names(): { [key: string]: string } {
    return {
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponseBodyData extends $tea.Model {
  /**
   * @example
   * test1
   */
  account?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBodyData extends $tea.Model {
  /**
   * @example
   * testuser
   */
  account?: string;
  /**
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-xxxxxxx
   */
  DBInstanceID?: number;
  /**
   * @example
   * cc-xxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @example
   * 2
   */
  scaleMin?: number;
  /**
   * @example
   * 10000****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-2ze34****-clickhouse..clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * cc-xxxxx
   */
  DBInstanceID?: number;
  /**
   * @example
   * cc-xxxxx
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceID: 'number',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-xxxx
   */
  DBInstanceID?: number;
  /**
   * @example
   * cc-xxxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @example
   * 192.168.0.0/24,172.16.0.0/24
   */
  securityIPList?: string;
  /**
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      taskId: 'TaskId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      taskId: 'number',
      whitelistNetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBodyData extends $tea.Model {
  /**
   * @example
   * test1
   */
  account?: string;
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  /**
   * @example
   * 100001080
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  /**
   * @example
   * 100000837
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  DBInstanceName?: string;
  /**
   * @example
   * 100000785
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeMinorVersionResponseBodyData extends $tea.Model {
  /**
   * @example
   * cc-uf6x229yeq166****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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
   * 创建账号
   * 
   * @param tmpReq - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(tmpReq: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dmlAuthSetting)) {
      request.dmlAuthSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dmlAuthSetting, "DmlAuthSetting", "json");
    }

    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dmlAuthSettingShrink)) {
      query["DmlAuthSetting"] = request.dmlAuthSettingShrink;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2023-05-22",
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
   * 创建账号
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * 创建数据库
   * 
   * @param request - CreateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResponse
   */
  async createDBWithOptions(request: CreateDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBResponse>(await this.callApi(params, req, runtime), new CreateDBResponse({}));
  }

  /**
   * 创建数据库
   * 
   * @param request - CreateDBRequest
   * @returns CreateDBResponse
   */
  async createDB(request: CreateDBRequest): Promise<CreateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBWithOptions(request, runtime);
  }

  /**
   * 创建企业版Clickhouse实例
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.multiZone)) {
      request.multiZoneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiZone, "MultiZone", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.multiZoneShrink)) {
      query["MultiZone"] = request.multiZoneShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!Util.isUnset(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
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
      action: "CreateDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
  }

  /**
   * 创建企业版Clickhouse实例
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * 创建链接地址
   * 
   * @param request - CreateEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: CreateEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionPrefix)) {
      query["ConnectionPrefix"] = request.connectionPrefix;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEndpoint",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEndpointResponse>(await this.callApi(params, req, runtime), new CreateEndpointResponse({}));
  }

  /**
   * 创建链接地址
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: CreateEndpointRequest): Promise<CreateEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointWithOptions(request, runtime);
  }

  /**
   * 删除账号
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

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2023-05-22",
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
   * 删除账号
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * 删除数据库
   * 
   * @param request - DeleteDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResponse
   */
  async deleteDBWithOptions(request: DeleteDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBResponse>(await this.callApi(params, req, runtime), new DeleteDBResponse({}));
  }

  /**
   * 删除数据库
   * 
   * @param request - DeleteDBRequest
   * @returns DeleteDBResponse
   */
  async deleteDB(request: DeleteDBRequest): Promise<DeleteDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBWithOptions(request, runtime);
  }

  /**
   * 释放实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteDBInstanceResponse({}));
  }

  /**
   * 释放实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * 删除链接地址
   * 
   * @param request - DeleteEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(request: DeleteEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEndpoint",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEndpointResponse>(await this.callApi(params, req, runtime), new DeleteEndpointResponse({}));
  }

  /**
   * 删除链接地址
   * 
   * @param request - DeleteEndpointRequest
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(request: DeleteEndpointRequest): Promise<DeleteEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointWithOptions(request, runtime);
  }

  /**
   * 查询账号的授权信息
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthorityWithOptions(request: DescribeAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAuthorityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountAuthority",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAuthorityResponse>(await this.callApi(params, req, runtime), new DescribeAccountAuthorityResponse({}));
  }

  /**
   * 查询账号的授权信息
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthority(request: DescribeAccountAuthorityRequest): Promise<DescribeAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * 查询账号列表
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAccountsResponse({}));
  }

  /**
   * 查询账号列表
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * 查询实例详情
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  /**
   * 查询实例详情
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询DB或者Table数据结构
   * 
   * @param request - DescribeDBInstanceDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDataSourcesResponse
   */
  async describeDBInstanceDataSourcesWithOptions(request: DescribeDBInstanceDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceDataSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceDataSources",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceDataSourcesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceDataSourcesResponse({}));
  }

  /**
   * 查询DB或者Table数据结构
   * 
   * @param request - DescribeDBInstanceDataSourcesRequest
   * @returns DescribeDBInstanceDataSourcesResponse
   */
  async describeDBInstanceDataSources(request: DescribeDBInstanceDataSourcesRequest): Promise<DescribeDBInstanceDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceDataSourcesWithOptions(request, runtime);
  }

  /**
   * 查询实例列表
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!Util.isUnset(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstances",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesResponse({}));
  }

  /**
   * 查询实例列表
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * 查询实例访问地址
   * 
   * @param request - DescribeEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointsResponse
   */
  async describeEndpointsWithOptions(request: DescribeEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndpoints",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeEndpointsResponse({}));
  }

  /**
   * 查询实例访问地址
   * 
   * @param request - DescribeEndpointsRequest
   * @returns DescribeEndpointsResponse
   */
  async describeEndpoints(request: DescribeEndpointsRequest): Promise<DescribeEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  /**
   * 查看正在运行的查询
   * 
   * @param request - DescribeProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessListResponse
   */
  async describeProcessListWithOptions(request: DescribeProcessListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!Util.isUnset(request.initialUser)) {
      query["InitialUser"] = request.initialUser;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!Util.isUnset(request.queryOrder)) {
      query["QueryOrder"] = request.queryOrder;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProcessList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessListResponse>(await this.callApi(params, req, runtime), new DescribeProcessListResponse({}));
  }

  /**
   * 查看正在运行的查询
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: DescribeProcessListRequest): Promise<DescribeProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * 查询白名单
   * 
   * @param request - DescribeSecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPListWithOptions(request: DescribeSecurityIPListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIPListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityIPListResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIPListResponse({}));
  }

  /**
   * 查询白名单
   * 
   * @param request - DescribeSecurityIPListRequest
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPList(request: DescribeSecurityIPListRequest): Promise<DescribeSecurityIPListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIPListWithOptions(request, runtime);
  }

  /**
   * 查看慢日志明细
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogRecords",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  /**
   * 查看慢日志明细
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * 慢查询趋势
   * 
   * @param request - DescribeSlowLogTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrendWithOptions(request: DescribeSlowLogTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogTrend",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogTrendResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogTrendResponse({}));
  }

  /**
   * 慢查询趋势
   * 
   * @param request - DescribeSlowLogTrendRequest
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrend(request: DescribeSlowLogTrendRequest): Promise<DescribeSlowLogTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogTrendWithOptions(request, runtime);
  }

  /**
   * 终止正在进行的任务
   * 
   * @param request - KillProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessResponse
   */
  async killProcessWithOptions(request: KillProcessRequest, runtime: $Util.RuntimeOptions): Promise<KillProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillProcess",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillProcessResponse>(await this.callApi(params, req, runtime), new KillProcessResponse({}));
  }

  /**
   * 终止正在进行的任务
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: KillProcessRequest): Promise<KillProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * 修改账号的授权信息
   * 
   * @param tmpReq - ModifyAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthorityWithOptions(tmpReq: ModifyAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountAuthorityResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAccountAuthorityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dmlAuthSetting)) {
      request.dmlAuthSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dmlAuthSetting, "DmlAuthSetting", "json");
    }

    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.dmlAuthSettingShrink)) {
      query["DmlAuthSetting"] = request.dmlAuthSettingShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountAuthority",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountAuthorityResponse>(await this.callApi(params, req, runtime), new ModifyAccountAuthorityResponse({}));
  }

  /**
   * 修改账号的授权信息
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthority(request: ModifyAccountAuthorityRequest): Promise<ModifyAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * 修改账号备注
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

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2023-05-22",
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
   * 修改账号备注
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * 修改实例的配置属性，包括名称、运维时间等
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttributeWithOptions(request: ModifyDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attributeType)) {
      query["AttributeType"] = request.attributeType;
    }

    if (!Util.isUnset(request.attributeValue)) {
      query["AttributeValue"] = request.attributeValue;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceAttributeResponse({}));
  }

  /**
   * 修改实例的配置属性，包括名称、运维时间等
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttribute(request: ModifyDBInstanceAttributeRequest): Promise<ModifyDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 修改实例弹性配置
   * 
   * @param request - ModifyDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClassWithOptions(request: ModifyDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceClassResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceClass",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceClassResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceClassResponse({}));
  }

  /**
   * 修改实例弹性配置
   * 
   * @param request - ModifyDBInstanceClassRequest
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClass(request: ModifyDBInstanceClassRequest): Promise<ModifyDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceClassWithOptions(request, runtime);
  }

  /**
   * 修改链接地址
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  /**
   * 修改链接地址
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * 变更白名单
   * 
   * @param request - ModifySecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPListWithOptions(request: ModifySecurityIPListRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIPListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityIPListResponse>(await this.callApi(params, req, runtime), new ModifySecurityIPListResponse({}));
  }

  /**
   * 变更白名单
   * 
   * @param request - ModifySecurityIPListRequest
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPList(request: ModifySecurityIPListRequest): Promise<ModifySecurityIPListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIPListWithOptions(request, runtime);
  }

  /**
   * 重置账号密码
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

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2023-05-22",
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
   * 重置账号密码
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * 重启实例
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartDBInstanceResponse({}));
  }

  /**
   * 重启实例
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * 启动实例
   * 
   * @param request - StartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDBInstanceResponse
   */
  async startDBInstanceWithOptions(request: StartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDBInstanceResponse>(await this.callApi(params, req, runtime), new StartDBInstanceResponse({}));
  }

  /**
   * 启动实例
   * 
   * @param request - StartDBInstanceRequest
   * @returns StartDBInstanceResponse
   */
  async startDBInstance(request: StartDBInstanceRequest): Promise<StartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDBInstanceWithOptions(request, runtime);
  }

  /**
   * 暂停实例
   * 
   * @param request - StopDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDBInstanceResponse
   */
  async stopDBInstanceWithOptions(request: StopDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDBInstanceResponse>(await this.callApi(params, req, runtime), new StopDBInstanceResponse({}));
  }

  /**
   * 暂停实例
   * 
   * @param request - StopDBInstanceRequest
   * @returns StopDBInstanceResponse
   */
  async stopDBInstance(request: StopDBInstanceRequest): Promise<StopDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDBInstanceWithOptions(request, runtime);
  }

  /**
   * 升级实例内核小版本
   * 
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: UpgradeMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeMinorVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!Util.isUnset(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!Util.isUnset(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeMinorVersion",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeMinorVersionResponse>(await this.callApi(params, req, runtime), new UpgradeMinorVersionResponse({}));
  }

  /**
   * 升级实例内核小版本
   * 
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: UpgradeMinorVersionRequest): Promise<UpgradeMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

}
