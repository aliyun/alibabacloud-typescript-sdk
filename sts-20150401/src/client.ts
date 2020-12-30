// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AssumeRoleRequest extends $tea.Model {
  durationSeconds?: number;
  policy?: string;
  roleArn?: string;
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      policy: 'string',
      roleArn: 'string',
      roleSessionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBody extends $tea.Model {
  requestId?: string;
  assumedRoleUser?: AssumeRoleResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleResponseBodyCredentials;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assumedRoleUser: AssumeRoleResponseBodyAssumedRoleUser,
      credentials: AssumeRoleResponseBodyCredentials,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssumeRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssumeRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLRequest extends $tea.Model {
  SAMLProviderArn?: string;
  roleArn?: string;
  SAMLAssertion?: string;
  policy?: string;
  durationSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderArn: 'SAMLProviderArn',
      roleArn: 'RoleArn',
      SAMLAssertion: 'SAMLAssertion',
      policy: 'Policy',
      durationSeconds: 'DurationSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderArn: 'string',
      roleArn: 'string',
      SAMLAssertion: 'string',
      policy: 'string',
      durationSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBody extends $tea.Model {
  requestId?: string;
  SAMLAssertionInfo?: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo;
  assumedRoleUser?: AssumeRoleWithSAMLResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleWithSAMLResponseBodyCredentials;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLAssertionInfo: 'SAMLAssertionInfo',
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLAssertionInfo: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo,
      assumedRoleUser: AssumeRoleWithSAMLResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithSAMLResponseBodyCredentials,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssumeRoleWithSAMLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssumeRoleWithSAMLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponseBody extends $tea.Model {
  identityType?: string;
  accountId?: string;
  requestId?: string;
  principalId?: string;
  userId?: string;
  arn?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      accountId: 'AccountId',
      requestId: 'RequestId',
      principalId: 'PrincipalId',
      userId: 'UserId',
      arn: 'Arn',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      accountId: 'string',
      requestId: 'string',
      principalId: 'string',
      userId: 'string',
      arn: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallerIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallerIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBodyAssumedRoleUser extends $tea.Model {
  assumedRoleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleId: 'AssumedRoleId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBodyCredentials extends $tea.Model {
  securityToken?: string;
  expiration?: string;
  accessKeySecret?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      expiration: 'Expiration',
      accessKeySecret: 'AccessKeySecret',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      expiration: 'string',
      accessKeySecret: 'string',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodySAMLAssertionInfo extends $tea.Model {
  subjectType?: string;
  subject?: string;
  issuer?: string;
  recipient?: string;
  static names(): { [key: string]: string } {
    return {
      subjectType: 'SubjectType',
      subject: 'Subject',
      issuer: 'Issuer',
      recipient: 'Recipient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectType: 'string',
      subject: 'string',
      issuer: 'string',
      recipient: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodyAssumedRoleUser extends $tea.Model {
  assumedRoleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleId: 'AssumedRoleId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodyCredentials extends $tea.Model {
  securityToken?: string;
  expiration?: string;
  accessKeySecret?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      expiration: 'Expiration',
      accessKeySecret: 'AccessKeySecret',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      expiration: 'string',
      accessKeySecret: 'string',
      accessKeyId: 'string',
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
      'ap-northeast-2-pop': "sts.aliyuncs.com",
      'cn-beijing-finance-1': "sts.aliyuncs.com",
      'cn-beijing-finance-pop': "sts.aliyuncs.com",
      'cn-beijing-gov-1': "sts.aliyuncs.com",
      'cn-beijing-nu16-b01': "sts.aliyuncs.com",
      'cn-edge-1': "sts.aliyuncs.com",
      'cn-fujian': "sts.aliyuncs.com",
      'cn-haidian-cm12-c01': "sts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "sts.aliyuncs.com",
      'cn-hangzhou-finance': "sts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "sts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "sts.aliyuncs.com",
      'cn-hangzhou-test-306': "sts.aliyuncs.com",
      'cn-hongkong-finance-pop': "sts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "sts.aliyuncs.com",
      'cn-north-2-gov-1': "sts-vpc.cn-north-2-gov-1.aliyuncs.com",
      'cn-qingdao-nebula': "sts.aliyuncs.com",
      'cn-shanghai-et15-b01': "sts.aliyuncs.com",
      'cn-shanghai-et2-b01': "sts.aliyuncs.com",
      'cn-shanghai-inner': "sts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "sts.aliyuncs.com",
      'cn-shenzhen-finance-1': "sts.aliyuncs.com",
      'cn-shenzhen-inner': "sts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "sts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "sts.aliyuncs.com",
      'cn-wuhan': "sts.aliyuncs.com",
      'cn-yushanfang': "sts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "sts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "sts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "sts.aliyuncs.com",
      'eu-west-1-oxs': "sts.aliyuncs.com",
      'rus-west-1-pop': "sts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async assumeRoleWithOptions(request: AssumeRoleRequest, runtime: $Util.RuntimeOptions): Promise<AssumeRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssumeRoleResponse>(await this.doRPCRequest("AssumeRole", "2015-04-01", "HTTPS", "POST", "AK", "json", req, runtime), new AssumeRoleResponse({}));
  }

  async assumeRole(request: AssumeRoleRequest): Promise<AssumeRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assumeRoleWithOptions(request, runtime);
  }

  async assumeRoleWithSAMLWithOptions(request: AssumeRoleWithSAMLRequest, runtime: $Util.RuntimeOptions): Promise<AssumeRoleWithSAMLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssumeRoleWithSAMLResponse>(await this.doRPCRequest("AssumeRoleWithSAML", "2015-04-01", "HTTPS", "POST", "AK", "json", req, runtime), new AssumeRoleWithSAMLResponse({}));
  }

  async assumeRoleWithSAML(request: AssumeRoleWithSAMLRequest): Promise<AssumeRoleWithSAMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assumeRoleWithSAMLWithOptions(request, runtime);
  }

  async getCallerIdentityWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCallerIdentityResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetCallerIdentityResponse>(await this.doRPCRequest("GetCallerIdentity", "2015-04-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCallerIdentityResponse({}));
  }

  async getCallerIdentity(): Promise<GetCallerIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallerIdentityWithOptions(runtime);
  }

}
