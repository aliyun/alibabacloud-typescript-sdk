// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EnrollAccountRequest extends $tea.Model {
  accountNamePrefix?: string;
  accountUid?: number;
  baselineId?: string;
  baselineItems?: EnrollAccountRequestBaselineItems[];
  displayName?: string;
  folderId?: string;
  payerAccountUid?: number;
  regionId?: string;
  resellAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      regionId: 'RegionId',
      resellAccountType: 'ResellAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': EnrollAccountRequestBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      regionId: 'string',
      resellAccountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountResponseBody extends $tea.Model {
  accountUid?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnrollAccountResponseBody;
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
      body: EnrollAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineRequest extends $tea.Model {
  baselineId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponseBody extends $tea.Model {
  baselineId?: string;
  baselineItems?: GetAccountFactoryBaselineResponseBodyBaselineItems[];
  baselineName?: string;
  createTime?: string;
  description?: string;
  requestId?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetAccountFactoryBaselineResponseBodyBaselineItems },
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountFactoryBaselineResponseBody;
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
      body: GetAccountFactoryBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountRequest extends $tea.Model {
  accountUid?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBody extends $tea.Model {
  accountUid?: number;
  baselineId?: string;
  baselineItems?: GetEnrolledAccountResponseBodyBaselineItems[];
  createTime?: string;
  displayName?: string;
  errorInfo?: GetEnrolledAccountResponseBodyErrorInfo;
  folderId?: string;
  initialized?: boolean;
  inputs?: GetEnrolledAccountResponseBodyInputs;
  masterAccountUid?: number;
  payerAccountUid?: number;
  progress?: GetEnrolledAccountResponseBodyProgress[];
  requestId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      errorInfo: 'ErrorInfo',
      folderId: 'FolderId',
      initialized: 'Initialized',
      inputs: 'Inputs',
      masterAccountUid: 'MasterAccountUid',
      payerAccountUid: 'PayerAccountUid',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyBaselineItems },
      createTime: 'string',
      displayName: 'string',
      errorInfo: GetEnrolledAccountResponseBodyErrorInfo,
      folderId: 'string',
      initialized: 'boolean',
      inputs: GetEnrolledAccountResponseBodyInputs,
      masterAccountUid: 'number',
      payerAccountUid: 'number',
      progress: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyProgress },
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnrolledAccountResponseBody;
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
      body: GetEnrolledAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponseBody extends $tea.Model {
  baselines?: ListAccountFactoryBaselinesResponseBodyBaselines[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselines: 'Baselines',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselines: { 'type': 'array', 'itemType': ListAccountFactoryBaselinesResponseBodyBaselines },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountFactoryBaselinesResponseBody;
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
      body: ListAccountFactoryBaselinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponseBody extends $tea.Model {
  enrolledAccounts?: ListEnrolledAccountsResponseBodyEnrolledAccounts[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enrolledAccounts: 'EnrolledAccounts',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrolledAccounts: { 'type': 'array', 'itemType': ListEnrolledAccountsResponseBodyEnrolledAccounts },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnrolledAccountsResponseBody;
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
      body: ListEnrolledAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequestBaselineItems extends $tea.Model {
  config?: string;
  name?: string;
  skip?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponseBodyBaselineItems extends $tea.Model {
  config?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyBaselineItems extends $tea.Model {
  config?: string;
  name?: string;
  skip?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyErrorInfo extends $tea.Model {
  code?: string;
  message?: string;
  recommend?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recommend: 'Recommend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recommend: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputsBaselineItems extends $tea.Model {
  config?: string;
  name?: string;
  skip?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputs extends $tea.Model {
  accountNamePrefix?: string;
  accountUid?: number;
  baselineItems?: GetEnrolledAccountResponseBodyInputsBaselineItems[];
  displayName?: string;
  folderId?: string;
  payerAccountUid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineItems: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyInputsBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyProgress extends $tea.Model {
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponseBodyBaselines extends $tea.Model {
  baselineId?: string;
  baselineName?: string;
  createTime?: string;
  description?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponseBodyEnrolledAccounts extends $tea.Model {
  accountUid?: number;
  baselineId?: string;
  createTime?: string;
  displayName?: string;
  folderId?: string;
  payerAccountUid?: number;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      createTime: 'string',
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      status: 'string',
      updateTime: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("governance", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
    * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
    *
    * @param request EnrollAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnrollAccountResponse
   */
  async enrollAccountWithOptions(request: EnrollAccountRequest, runtime: $Util.RuntimeOptions): Promise<EnrollAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!Util.isUnset(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.payerAccountUid)) {
      query["PayerAccountUid"] = request.payerAccountUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnrollAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnrollAccountResponse>(await this.callApi(params, req, runtime), new EnrollAccountResponse({}));
  }

  /**
    * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
    * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
    *
    * @param request EnrollAccountRequest
    * @return EnrollAccountResponse
   */
  async enrollAccount(request: EnrollAccountRequest): Promise<EnrollAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enrollAccountWithOptions(request, runtime);
  }

  async getAccountFactoryBaselineWithOptions(request: GetAccountFactoryBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountFactoryBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new GetAccountFactoryBaselineResponse({}));
  }

  async getAccountFactoryBaseline(request: GetAccountFactoryBaselineRequest): Promise<GetAccountFactoryBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountFactoryBaselineWithOptions(request, runtime);
  }

  async getEnrolledAccountWithOptions(request: GetEnrolledAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetEnrolledAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnrolledAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnrolledAccountResponse>(await this.callApi(params, req, runtime), new GetEnrolledAccountResponse({}));
  }

  async getEnrolledAccount(request: GetEnrolledAccountRequest): Promise<GetEnrolledAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnrolledAccountWithOptions(request, runtime);
  }

  async listAccountFactoryBaselinesWithOptions(request: ListAccountFactoryBaselinesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountFactoryBaselinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountFactoryBaselines",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountFactoryBaselinesResponse>(await this.callApi(params, req, runtime), new ListAccountFactoryBaselinesResponse({}));
  }

  async listAccountFactoryBaselines(request: ListAccountFactoryBaselinesRequest): Promise<ListAccountFactoryBaselinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountFactoryBaselinesWithOptions(request, runtime);
  }

  async listEnrolledAccountsWithOptions(request: ListEnrolledAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListEnrolledAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnrolledAccounts",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnrolledAccountsResponse>(await this.callApi(params, req, runtime), new ListEnrolledAccountsResponse({}));
  }

  async listEnrolledAccounts(request: ListEnrolledAccountsRequest): Promise<ListEnrolledAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnrolledAccountsWithOptions(request, runtime);
  }

}
