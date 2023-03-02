// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AssumeRoleRequest extends $tea.Model {
  durationSeconds?: number;
  externalId?: string;
  policy?: string;
  roleArn?: string;
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      externalId: 'ExternalId',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      externalId: 'string',
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
  assumedRoleUser?: AssumeRoleResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleResponseBodyCredentials;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleResponseBodyAssumedRoleUser,
      credentials: AssumeRoleResponseBodyCredentials,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssumeRoleResponseBody;
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
      body: AssumeRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCRequest extends $tea.Model {
  durationSeconds?: number;
  OIDCProviderArn?: string;
  OIDCToken?: string;
  policy?: string;
  roleArn?: string;
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      OIDCProviderArn: 'OIDCProviderArn',
      OIDCToken: 'OIDCToken',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      OIDCProviderArn: 'string',
      OIDCToken: 'string',
      policy: 'string',
      roleArn: 'string',
      roleSessionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBody extends $tea.Model {
  assumedRoleUser?: AssumeRoleWithOIDCResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleWithOIDCResponseBodyCredentials;
  OIDCTokenInfo?: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      OIDCTokenInfo: 'OIDCTokenInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithOIDCResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithOIDCResponseBodyCredentials,
      OIDCTokenInfo: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssumeRoleWithOIDCResponseBody;
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
      body: AssumeRoleWithOIDCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLRequest extends $tea.Model {
  durationSeconds?: number;
  policy?: string;
  roleArn?: string;
  SAMLAssertion?: string;
  SAMLProviderArn?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      policy: 'Policy',
      roleArn: 'RoleArn',
      SAMLAssertion: 'SAMLAssertion',
      SAMLProviderArn: 'SAMLProviderArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      policy: 'string',
      roleArn: 'string',
      SAMLAssertion: 'string',
      SAMLProviderArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBody extends $tea.Model {
  assumedRoleUser?: AssumeRoleWithSAMLResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleWithSAMLResponseBodyCredentials;
  requestId?: string;
  SAMLAssertionInfo?: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      SAMLAssertionInfo: 'SAMLAssertionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithSAMLResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithSAMLResponseBodyCredentials,
      requestId: 'string',
      SAMLAssertionInfo: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssumeRoleWithSAMLResponseBody;
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
      body: AssumeRoleWithSAMLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponseBody extends $tea.Model {
  accountId?: string;
  arn?: string;
  identityType?: string;
  principalId?: string;
  requestId?: string;
  roleId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      arn: 'Arn',
      identityType: 'IdentityType',
      principalId: 'PrincipalId',
      requestId: 'RequestId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      arn: 'string',
      identityType: 'string',
      principalId: 'string',
      requestId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCallerIdentityResponseBody;
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
      body: GetCallerIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBodyAssumedRoleUser extends $tea.Model {
  arn?: string;
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleResponseBodyCredentials extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBodyAssumedRoleUser extends $tea.Model {
  arn?: string;
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBodyCredentials extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithOIDCResponseBodyOIDCTokenInfo extends $tea.Model {
  clientIds?: string;
  issuer?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      issuer: 'Issuer',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      issuer: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodyAssumedRoleUser extends $tea.Model {
  arn?: string;
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodyCredentials extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleWithSAMLResponseBodySAMLAssertionInfo extends $tea.Model {
  issuer?: string;
  recipient?: string;
  subject?: string;
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      issuer: 'Issuer',
      recipient: 'Recipient',
      subject: 'Subject',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuer: 'string',
      recipient: 'string',
      subject: 'string',
      subjectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
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
      'cn-shenzhen-finance-1': "sts-vpc.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen-inner': "sts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "sts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "sts.aliyuncs.com",
      'cn-wuhan': "sts.aliyuncs.com",
      'cn-yushanfang': "sts.aliyuncs.com",
      'cn-zhangbei': "sts.aliyuncs.com",
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

  /**
    * ### Prerequisites
    * You cannot use an Alibaba Cloud account to call this operation. The requester of this operation can only be a RAM user or RAM role. Make sure that the AliyunSTSAssumeRoleAccess policy is attached to the requester. After this policy is attached to the requester, the requester has the management permissions on STS.
    * If you do not attach the AliyunSTSAssumeRoleAccess policy to the requester, the following error message is returned:
    * `You are not authorized to do this action. You should be authorized by RAM.`
    * You can refer to the following information to troubleshoot the error:
    * *   Cause of the error: The policy that is required to assume a RAM role is not attached to the requester. To resolve this issue, attach the AliyunSTSAssumeRoleAccess policy or a custom policy to the requester. For more information, see [Can I specify the RAM role that a RAM user can assume?](~~39744~~) and [Grant permissions to a RAM user](~~116146~~).
    * *   Cause of the error: The requester is not authorized to assume the RAM role. To resolve this issue, add the requester to the Principal element in the trust policy of the RAM role For more information, see [Edit the trust policy of a RAM role](~~116819~~).
    * ### Best practices
    * An STS token is valid for a period of time after it is issued, and the number of STS tokens that can be issued within an interval is also limited. Therefore, we recommend that you configure a proper validity period for an STS token and repeatedly use the token within this period. This prevents frequent issuing of STS tokens from adversely affecting your services if a large number of requests are sent. For more information about the limit, see [Is the number of STS API requests limited?](~~39744~~) You can configure the `DurationSeconds` parameter to specify a validity period for an STS token.
    * When you upload or download Object Storage Service (OSS) objects on mobile devices, a large number of STS API requests are sent. In this case, repeated use of an STS token may not meet your business requirements. To avoid the limit on STS API requests from affecting access to OSS, you can **add a signature to the URL of an OSS object**. For more information, see [Add signatures to URLs](~~31952~~) and [Obtain signature information from the server and upload data to OSS](~~31926~~).
    *
    * @param request AssumeRoleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssumeRoleResponse
   */
  async assumeRoleWithOptions(request: AssumeRoleRequest, runtime: $Util.RuntimeOptions): Promise<AssumeRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!Util.isUnset(request.externalId)) {
      query["ExternalId"] = request.externalId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.roleSessionName)) {
      query["RoleSessionName"] = request.roleSessionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssumeRole",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssumeRoleResponse>(await this.callApi(params, req, runtime), new AssumeRoleResponse({}));
  }

  /**
    * ### Prerequisites
    * You cannot use an Alibaba Cloud account to call this operation. The requester of this operation can only be a RAM user or RAM role. Make sure that the AliyunSTSAssumeRoleAccess policy is attached to the requester. After this policy is attached to the requester, the requester has the management permissions on STS.
    * If you do not attach the AliyunSTSAssumeRoleAccess policy to the requester, the following error message is returned:
    * `You are not authorized to do this action. You should be authorized by RAM.`
    * You can refer to the following information to troubleshoot the error:
    * *   Cause of the error: The policy that is required to assume a RAM role is not attached to the requester. To resolve this issue, attach the AliyunSTSAssumeRoleAccess policy or a custom policy to the requester. For more information, see [Can I specify the RAM role that a RAM user can assume?](~~39744~~) and [Grant permissions to a RAM user](~~116146~~).
    * *   Cause of the error: The requester is not authorized to assume the RAM role. To resolve this issue, add the requester to the Principal element in the trust policy of the RAM role For more information, see [Edit the trust policy of a RAM role](~~116819~~).
    * ### Best practices
    * An STS token is valid for a period of time after it is issued, and the number of STS tokens that can be issued within an interval is also limited. Therefore, we recommend that you configure a proper validity period for an STS token and repeatedly use the token within this period. This prevents frequent issuing of STS tokens from adversely affecting your services if a large number of requests are sent. For more information about the limit, see [Is the number of STS API requests limited?](~~39744~~) You can configure the `DurationSeconds` parameter to specify a validity period for an STS token.
    * When you upload or download Object Storage Service (OSS) objects on mobile devices, a large number of STS API requests are sent. In this case, repeated use of an STS token may not meet your business requirements. To avoid the limit on STS API requests from affecting access to OSS, you can **add a signature to the URL of an OSS object**. For more information, see [Add signatures to URLs](~~31952~~) and [Obtain signature information from the server and upload data to OSS](~~31926~~).
    *
    * @param request AssumeRoleRequest
    * @return AssumeRoleResponse
   */
  async assumeRole(request: AssumeRoleRequest): Promise<AssumeRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assumeRoleWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * - An OIDC token is obtained from an external identity provider (IdP).
    * - An OIDC IdP is created in the RAM console. For more information, see [Create an OIDC IdP](~~327123~~) or [CreateOIDCProvider](~~327135~~).
    * - A RAM role whose trusted entity is an OIDC IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](~~116805~~) or [CreateRole](~~28710~~).
    *
    * @param request AssumeRoleWithOIDCRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssumeRoleWithOIDCResponse
   */
  async assumeRoleWithOIDCWithOptions(request: AssumeRoleWithOIDCRequest, runtime: $Util.RuntimeOptions): Promise<AssumeRoleWithOIDCResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!Util.isUnset(request.OIDCProviderArn)) {
      query["OIDCProviderArn"] = request.OIDCProviderArn;
    }

    if (!Util.isUnset(request.OIDCToken)) {
      query["OIDCToken"] = request.OIDCToken;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.roleSessionName)) {
      query["RoleSessionName"] = request.roleSessionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssumeRoleWithOIDC",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssumeRoleWithOIDCResponse>(await this.callApi(params, req, runtime), new AssumeRoleWithOIDCResponse({}));
  }

  /**
    * ### Prerequisites
    * - An OIDC token is obtained from an external identity provider (IdP).
    * - An OIDC IdP is created in the RAM console. For more information, see [Create an OIDC IdP](~~327123~~) or [CreateOIDCProvider](~~327135~~).
    * - A RAM role whose trusted entity is an OIDC IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](~~116805~~) or [CreateRole](~~28710~~).
    *
    * @param request AssumeRoleWithOIDCRequest
    * @return AssumeRoleWithOIDCResponse
   */
  async assumeRoleWithOIDC(request: AssumeRoleWithOIDCRequest): Promise<AssumeRoleWithOIDCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assumeRoleWithOIDCWithOptions(request, runtime);
  }

  /**
    * ### Prerequisites
    * - A SAML response is obtained from an external identity provider (IdP).
    * - A SAML IdP is created in the RAM console. For more information, see [Create a SAML IdP](~~116083~~) or [CreateSAMLProvider](~~186846~~).
    * - A RAM role whose trusted entity is a SAML IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](~~116805~~) or [CreateRole](~~28710~~).
    *
    * @param request AssumeRoleWithSAMLRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssumeRoleWithSAMLResponse
   */
  async assumeRoleWithSAMLWithOptions(request: AssumeRoleWithSAMLRequest, runtime: $Util.RuntimeOptions): Promise<AssumeRoleWithSAMLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.SAMLAssertion)) {
      query["SAMLAssertion"] = request.SAMLAssertion;
    }

    if (!Util.isUnset(request.SAMLProviderArn)) {
      query["SAMLProviderArn"] = request.SAMLProviderArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssumeRoleWithSAML",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssumeRoleWithSAMLResponse>(await this.callApi(params, req, runtime), new AssumeRoleWithSAMLResponse({}));
  }

  /**
    * ### Prerequisites
    * - A SAML response is obtained from an external identity provider (IdP).
    * - A SAML IdP is created in the RAM console. For more information, see [Create a SAML IdP](~~116083~~) or [CreateSAMLProvider](~~186846~~).
    * - A RAM role whose trusted entity is a SAML IdP is created in the RAM console. For more information, see [Create a RAM role for a trusted IdP](~~116805~~) or [CreateRole](~~28710~~).
    *
    * @param request AssumeRoleWithSAMLRequest
    * @return AssumeRoleWithSAMLResponse
   */
  async assumeRoleWithSAML(request: AssumeRoleWithSAMLRequest): Promise<AssumeRoleWithSAMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assumeRoleWithSAMLWithOptions(request, runtime);
  }

  async getCallerIdentityWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCallerIdentityResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCallerIdentity",
      version: "2015-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCallerIdentityResponse>(await this.callApi(params, req, runtime), new GetCallerIdentityResponse({}));
  }

  async getCallerIdentity(): Promise<GetCallerIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallerIdentityWithOptions(runtime);
  }

}
