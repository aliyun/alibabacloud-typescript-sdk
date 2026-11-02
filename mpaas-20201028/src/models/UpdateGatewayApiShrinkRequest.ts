// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayApiShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  apiName?: string;
  apiStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apiType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  authRuleName?: string;
  cacheRuleShrink?: string;
  charset?: string;
  contentType?: string;
  defaultLimitRuleShrink?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  headerRulesShrink?: string;
  interfaceType?: string;
  limitRuleShrink?: string;
  method?: string;
  methodName?: string;
  migrateRuleShrink?: string;
  mockRuleShrink?: string;
  needEncrypt?: boolean;
  needJsonp?: boolean;
  needSign?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  operationType?: string;
  path?: string;
  requestBodyModel?: string;
  requestParamsShrink?: string;
  responseBodyModel?: string;
  rpcParameterTypesShrink?: string;
  serialization?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      cacheRuleShrink: 'CacheRule',
      charset: 'Charset',
      contentType: 'ContentType',
      defaultLimitRuleShrink: 'DefaultLimitRule',
      description: 'Description',
      groupId: 'GroupId',
      headerRulesShrink: 'HeaderRules',
      interfaceType: 'InterfaceType',
      limitRuleShrink: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRuleShrink: 'MigrateRule',
      mockRuleShrink: 'MockRule',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParamsShrink: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      rpcParameterTypesShrink: 'RpcParameterTypes',
      serialization: 'Serialization',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRuleShrink: 'string',
      charset: 'string',
      contentType: 'string',
      defaultLimitRuleShrink: 'string',
      description: 'string',
      groupId: 'number',
      headerRulesShrink: 'string',
      interfaceType: 'string',
      limitRuleShrink: 'string',
      method: 'string',
      methodName: 'string',
      migrateRuleShrink: 'string',
      mockRuleShrink: 'string',
      needEncrypt: 'boolean',
      needJsonp: 'boolean',
      needSign: 'boolean',
      operationType: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParamsShrink: 'string',
      responseBodyModel: 'string',
      rpcParameterTypesShrink: 'string',
      serialization: 'string',
      tenantId: 'string',
      timeout: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

