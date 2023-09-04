// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeDBInstanceForDmsRequest extends $tea.Model {
  DBInstanceId?: string;
  host?: string;
  ownerId?: number;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      host: 'Host',
      ownerId: 'OwnerId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      host: 'string',
      ownerId: 'number',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  httpStatusCode?: number;
  instance?: DescribeDBInstanceForDmsResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      httpStatusCode: 'number',
      instance: DescribeDBInstanceForDmsResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceForDmsResponseBody;
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
      body: DescribeDBInstanceForDmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsRequest extends $tea.Model {
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  result?: DescribeDBInstanceSecurityIpsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDBInstanceSecurityIpsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceSecurityIpsResponseBody;
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
      body: DescribeDBInstanceSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsRequest extends $tea.Model {
  aliUid?: number;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  httpStatusCode?: number;
  instances?: DescribeDBInstancesForDmsResponseBodyInstances[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      httpStatusCode: 'number',
      instances: { 'type': 'array', 'itemType': DescribeDBInstancesForDmsResponseBodyInstances },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstancesForDmsResponseBody;
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
      body: DescribeDBInstancesForDmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSecurityIpsRequest extends $tea.Model {
  aliUid?: number;
  groupName?: string;
  instanceId?: string;
  ownerId?: number;
  whileList?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      whileList: 'WhileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      groupName: 'string',
      instanceId: 'string',
      ownerId: 'number',
      whileList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSecurityIpsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBInstanceSecurityIpsResponseBody;
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
      body: ModifyDBInstanceSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponseBodyInstance extends $tea.Model {
  aliUid?: string;
  bid?: string;
  connectionString?: string;
  dbInstanceName?: string;
  dbType?: string;
  description?: string;
  instanceNetworkType?: string;
  port?: string;
  region?: string;
  vSwitchId?: string;
  version?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  vpcIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      connectionString: 'ConnectionString',
      dbInstanceName: 'DbInstanceName',
      dbType: 'DbType',
      description: 'Description',
      instanceNetworkType: 'InstanceNetworkType',
      port: 'Port',
      region: 'Region',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcIp: 'VpcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      connectionString: 'string',
      dbInstanceName: 'string',
      dbType: 'string',
      description: 'string',
      instanceNetworkType: 'string',
      port: 'string',
      region: 'string',
      vSwitchId: 'string',
      version: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsResponseBodyResult extends $tea.Model {
  groupName?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsResponseBodyInstances extends $tea.Model {
  aliUid?: string;
  bid?: string;
  connectionString?: string;
  dbInstanceName?: string;
  dbType?: string;
  description?: string;
  instanceNetworkType?: string;
  port?: string;
  region?: string;
  vSwitchId?: string;
  version?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  vpcIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      connectionString: 'ConnectionString',
      dbInstanceName: 'DbInstanceName',
      dbType: 'DbType',
      description: 'Description',
      instanceNetworkType: 'InstanceNetworkType',
      port: 'Port',
      region: 'Region',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcIp: 'VpcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      connectionString: 'string',
      dbInstanceName: 'string',
      dbType: 'string',
      description: 'string',
      instanceNetworkType: 'string',
      port: 'string',
      region: 'string',
      vSwitchId: 'string',
      version: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcIp: 'string',
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
      'cn-beijing': "gpdb.aliyuncs.com",
      'cn-hangzhou': "gpdb.aliyuncs.com",
      'cn-shanghai': "gpdb.aliyuncs.com",
      'cn-shenzhen': "gpdb.aliyuncs.com",
      'cn-hongkong': "gpdb.aliyuncs.com",
      'ap-southeast-1': "gpdb.aliyuncs.com",
      'us-west-1': "gpdb.aliyuncs.com",
      'us-east-1': "gpdb.aliyuncs.com",
      'cn-hangzhou-finance': "gpdb.aliyuncs.com",
      'cn-shanghai-finance-1': "gpdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "gpdb.aliyuncs.com",
      'cn-qingdao': "gpdb.aliyuncs.com",
      'cn-north-2-gov-1': "gpdb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gpdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeDBInstanceForDmsWithOptions(request: DescribeDBInstanceForDmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceForDmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceForDms",
      version: "2019-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceForDmsResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceForDmsResponse({}));
  }

  async describeDBInstanceForDms(request: DescribeDBInstanceForDmsRequest): Promise<DescribeDBInstanceForDmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceForDmsWithOptions(request, runtime);
  }

  async describeDBInstanceSecurityIpsWithOptions(request: DescribeDBInstanceSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSecurityIps",
      version: "2019-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSecurityIpsResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSecurityIpsResponse({}));
  }

  async describeDBInstanceSecurityIps(request: DescribeDBInstanceSecurityIpsRequest): Promise<DescribeDBInstanceSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSecurityIpsWithOptions(request, runtime);
  }

  async describeDBInstancesForDmsWithOptions(request: DescribeDBInstancesForDmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesForDmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstancesForDms",
      version: "2019-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesForDmsResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesForDmsResponse({}));
  }

  async describeDBInstancesForDms(request: DescribeDBInstancesForDmsRequest): Promise<DescribeDBInstancesForDmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesForDmsWithOptions(request, runtime);
  }

  async modifyDBInstanceSecurityIpsWithOptions(request: ModifyDBInstanceSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.whileList)) {
      query["WhileList"] = request.whileList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceSecurityIps",
      version: "2019-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceSecurityIpsResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceSecurityIpsResponse({}));
  }

  async modifyDBInstanceSecurityIps(request: ModifyDBInstanceSecurityIpsRequest): Promise<ModifyDBInstanceSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSecurityIpsWithOptions(request, runtime);
  }

}
