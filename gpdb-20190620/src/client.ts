// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeDBInstanceForDmsRequest extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  count?: number;
  instance?: DescribeDBInstanceForDmsResponseBodyInstance;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      count: 'Count',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      count: 'number',
      instance: DescribeDBInstanceForDmsResponseBodyInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceForDmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceForDmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  count?: number;
  result?: DescribeDBInstanceSecurityIpsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      count: 'Count',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      count: 'number',
      result: { 'type': 'array', 'itemType': DescribeDBInstanceSecurityIpsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceSecurityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsRequest extends $tea.Model {
  aliUid?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  count?: number;
  instances?: DescribeDBInstancesForDmsResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      count: 'Count',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      count: 'number',
      instances: { 'type': 'array', 'itemType': DescribeDBInstancesForDmsResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForDmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesForDmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesForDmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSecurityIpsRequest extends $tea.Model {
  aliUid?: number;
  instanceId?: string;
  groupName?: string;
  whileList?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      instanceId: 'InstanceId',
      groupName: 'GroupName',
      whileList: 'WhileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      instanceId: 'string',
      groupName: 'string',
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
  body: ModifyDBInstanceSecurityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceForDmsResponseBodyInstance extends $tea.Model {
  vpcId?: string;
  aliUid?: string;
  port?: string;
  bid?: string;
  vpcCloudInstanceId?: string;
  vSwitchId?: string;
  description?: string;
  dbType?: string;
  version?: string;
  connectionString?: string;
  region?: string;
  instanceNetworkType?: string;
  dbInstanceName?: string;
  vpcIp?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      aliUid: 'AliUid',
      port: 'Port',
      bid: 'Bid',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vSwitchId: 'VSwitchId',
      description: 'Description',
      dbType: 'DbType',
      version: 'Version',
      connectionString: 'ConnectionString',
      region: 'Region',
      instanceNetworkType: 'InstanceNetworkType',
      dbInstanceName: 'DbInstanceName',
      vpcIp: 'VpcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      aliUid: 'string',
      port: 'string',
      bid: 'string',
      vpcCloudInstanceId: 'string',
      vSwitchId: 'string',
      description: 'string',
      dbType: 'string',
      version: 'string',
      connectionString: 'string',
      region: 'string',
      instanceNetworkType: 'string',
      dbInstanceName: 'string',
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
  vpcId?: string;
  aliUid?: string;
  port?: string;
  bid?: string;
  vpcCloudInstanceId?: string;
  vSwitchId?: string;
  description?: string;
  dbType?: string;
  version?: string;
  connectionString?: string;
  region?: string;
  instanceNetworkType?: string;
  dbInstanceName?: string;
  vpcIp?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      aliUid: 'AliUid',
      port: 'Port',
      bid: 'Bid',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vSwitchId: 'VSwitchId',
      description: 'Description',
      dbType: 'DbType',
      version: 'Version',
      connectionString: 'ConnectionString',
      region: 'Region',
      instanceNetworkType: 'InstanceNetworkType',
      dbInstanceName: 'DbInstanceName',
      vpcIp: 'VpcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      aliUid: 'string',
      port: 'string',
      bid: 'string',
      vpcCloudInstanceId: 'string',
      vSwitchId: 'string',
      description: 'string',
      dbType: 'string',
      version: 'string',
      connectionString: 'string',
      region: 'string',
      instanceNetworkType: 'string',
      dbInstanceName: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceForDmsResponse>(await this.doRPCRequest("DescribeDBInstanceForDms", "2019-06-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceForDmsResponse({}));
  }

  async describeDBInstanceForDms(request: DescribeDBInstanceForDmsRequest): Promise<DescribeDBInstanceForDmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceForDmsWithOptions(request, runtime);
  }

  async describeDBInstanceSecurityIpsWithOptions(request: DescribeDBInstanceSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceSecurityIpsResponse>(await this.doRPCRequest("DescribeDBInstanceSecurityIps", "2019-06-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSecurityIpsResponse({}));
  }

  async describeDBInstanceSecurityIps(request: DescribeDBInstanceSecurityIpsRequest): Promise<DescribeDBInstanceSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSecurityIpsWithOptions(request, runtime);
  }

  async describeDBInstancesForDmsWithOptions(request: DescribeDBInstancesForDmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesForDmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesForDmsResponse>(await this.doRPCRequest("DescribeDBInstancesForDms", "2019-06-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesForDmsResponse({}));
  }

  async describeDBInstancesForDms(request: DescribeDBInstancesForDmsRequest): Promise<DescribeDBInstancesForDmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesForDmsWithOptions(request, runtime);
  }

  async modifyDBInstanceSecurityIpsWithOptions(request: ModifyDBInstanceSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSecurityIpsResponse>(await this.doRPCRequest("ModifyDBInstanceSecurityIps", "2019-06-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSecurityIpsResponse({}));
  }

  async modifyDBInstanceSecurityIps(request: ModifyDBInstanceSecurityIpsRequest): Promise<ModifyDBInstanceSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSecurityIpsWithOptions(request, runtime);
  }

}
