// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class WafBatchRuleShared extends $tea.Model {
  action?: string;
  actions?: WafBatchRuleSharedActions;
  crossSiteId?: number;
  expression?: string;
  match?: WafRuleMatch2;
  mode?: string;
  name?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actions: 'Actions',
      crossSiteId: 'CrossSiteId',
      expression: 'Expression',
      match: 'Match',
      mode: 'Mode',
      name: 'Name',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actions: WafBatchRuleSharedActions,
      crossSiteId: 'number',
      expression: 'string',
      match: WafRuleMatch2,
      mode: 'string',
      name: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafQuotaInteger extends $tea.Model {
  equal?: number;
  greaterThan?: number;
  greaterThanOrEqual?: number;
  lessThan?: number;
  lessThanOrEqual?: number;
  static names(): { [key: string]: string } {
    return {
      equal: 'Equal',
      greaterThan: 'GreaterThan',
      greaterThanOrEqual: 'GreaterThanOrEqual',
      lessThan: 'LessThan',
      lessThanOrEqual: 'LessThanOrEqual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equal: 'number',
      greaterThan: 'number',
      greaterThanOrEqual: 'number',
      lessThan: 'number',
      lessThanOrEqual: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafQuotaString extends $tea.Model {
  regexp?: string;
  static names(): { [key: string]: string } {
    return {
      regexp: 'Regexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regexp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfig extends $tea.Model {
  action?: string;
  actions?: WafRuleConfigActions;
  appPackage?: WafRuleConfigAppPackage;
  appSdk?: WafRuleConfigAppSdk;
  expression?: string;
  id?: number;
  managedGroupId?: number;
  managedList?: string;
  managedRulesets?: WafRuleConfigManagedRulesets[];
  match?: WafRuleMatch;
  name?: string;
  rateLimit?: WafRuleConfigRateLimit;
  sigchl?: string[];
  status?: string;
  timer?: WafTimer;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actions: 'Actions',
      appPackage: 'AppPackage',
      appSdk: 'AppSdk',
      expression: 'Expression',
      id: 'Id',
      managedGroupId: 'ManagedGroupId',
      managedList: 'ManagedList',
      managedRulesets: 'ManagedRulesets',
      match: 'Match',
      name: 'Name',
      rateLimit: 'RateLimit',
      sigchl: 'Sigchl',
      status: 'Status',
      timer: 'Timer',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actions: WafRuleConfigActions,
      appPackage: WafRuleConfigAppPackage,
      appSdk: WafRuleConfigAppSdk,
      expression: 'string',
      id: 'number',
      managedGroupId: 'number',
      managedList: 'string',
      managedRulesets: { 'type': 'array', 'itemType': WafRuleConfigManagedRulesets },
      match: WafRuleMatch,
      name: 'string',
      rateLimit: WafRuleConfigRateLimit,
      sigchl: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      timer: WafTimer,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleMatch extends $tea.Model {
  convertToLower?: boolean;
  criteria?: WafRuleMatch[];
  logic?: string;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      criteria: { 'type': 'array', 'itemType': WafRuleMatch },
      logic: 'string',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleMatch2 extends $tea.Model {
  convertToLower?: boolean;
  criteria?: WafRuleMatch2Criteria[];
  logic?: string;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2Criteria },
      logic: 'string',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettings extends $tea.Model {
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  addSecurityHeaders?: WafSiteSettingsAddSecurityHeaders;
  clientIpIdentifier?: WafSiteSettingsClientIpIdentifier;
  securityLevel?: WafSiteSettingsSecurityLevel;
  static names(): { [key: string]: string } {
    return {
      addBotProtectionHeaders: 'AddBotProtectionHeaders',
      addSecurityHeaders: 'AddSecurityHeaders',
      clientIpIdentifier: 'ClientIpIdentifier',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBotProtectionHeaders: WafSiteSettingsAddBotProtectionHeaders,
      addSecurityHeaders: WafSiteSettingsAddSecurityHeaders,
      clientIpIdentifier: WafSiteSettingsClientIpIdentifier,
      securityLevel: WafSiteSettingsSecurityLevel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimer extends $tea.Model {
  periods?: WafTimerPeriods[];
  scopes?: string;
  weeklyPeriods?: WafTimerWeeklyPeriods[];
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      periods: 'Periods',
      scopes: 'Scopes',
      weeklyPeriods: 'WeeklyPeriods',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periods: { 'type': 'array', 'itemType': WafTimerPeriods },
      scopes: 'string',
      weeklyPeriods: { 'type': 'array', 'itemType': WafTimerWeeklyPeriods },
      zone: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDeliveryHeaderParamValue extends $tea.Model {
  staticValue?: string;
  static names(): { [key: string]: string } {
    return {
      staticValue: 'StaticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDeliveryQueryParamValue extends $tea.Model {
  staticValue?: string;
  static names(): { [key: string]: string } {
    return {
      staticValue: 'StaticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staticValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldContentValue extends $tea.Model {
  /**
   * @example
   * 1
   */
  sortOrder?: number;
  fieldList?: FieldContentValueFieldList[];
  static names(): { [key: string]: string } {
    return {
      sortOrder: 'SortOrder',
      fieldList: 'FieldList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sortOrder: 'number',
      fieldList: { 'type': 'array', 'itemType': FieldContentValueFieldList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaListItemsValue extends $tea.Model {
  enable?: boolean;
  value?: WafQuotaString;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      value: WafQuotaString,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaPageContentTypesValue extends $tea.Model {
  enable?: boolean;
  contentLength?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      contentLength: 'ContentLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      contentLength: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateClientCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * babaded901474b9693acf530e0fb****
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateClientCertificateResponseBody extends $tea.Model {
  /**
   * @example
   * babaded901474b9693acf530e0fb****
   */
  id?: string;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateClientCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateClientCertificateResponseBody;
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
      body: ActivateClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordList?: BatchCreateRecordsRequestRecordList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordList: 'RecordList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordList: { 'type': 'array', 'itemType': BatchCreateRecordsRequestRecordList },
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordListShrink: 'RecordList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordListShrink: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBody extends $tea.Model {
  recordResultList?: BatchCreateRecordsResponseBodyRecordResultList;
  /**
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordResultList: 'RecordResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordResultList: BatchCreateRecordsResponseBodyRecordResultList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateRecordsResponseBody;
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
      body: BatchCreateRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateWafRulesRequest extends $tea.Model {
  configs?: WafRuleConfig[];
  /**
   * @example
   * http_custom
   */
  phase?: string;
  shared?: WafBatchRuleShared;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      phase: 'Phase',
      shared: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': WafRuleConfig },
      phase: 'string',
      shared: WafBatchRuleShared,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateWafRulesShrinkRequest extends $tea.Model {
  configsShrink?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  sharedShrink?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      phase: 'Phase',
      sharedShrink: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      phase: 'string',
      sharedShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateWafRulesResponseBody extends $tea.Model {
  ids?: number[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesetId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      rulesetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateWafRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateWafRulesResponseBody;
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
      body: BatchCreateWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keys?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvResponseBody extends $tea.Model {
  failKeys?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  successKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      failKeys: 'FailKeys',
      requestId: 'RequestId',
      successKeys: 'SuccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteKvResponseBody;
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
      body: BatchDeleteKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvWithHighCapacityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvWithHighCapacityAdvanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvWithHighCapacityResponseBody extends $tea.Model {
  failKeys?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  successKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      failKeys: 'FailKeys',
      requestId: 'RequestId',
      successKeys: 'SuccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteKvWithHighCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteKvWithHighCapacityResponseBody;
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
      body: BatchDeleteKvWithHighCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  expressions?: BatchGetExpressionFieldsRequestExpressions[];
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      expressions: 'Expressions',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressions: { 'type': 'array', 'itemType': BatchGetExpressionFieldsRequestExpressions },
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsShrinkRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  expressionsShrink?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      expressionsShrink: 'Expressions',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionsShrink: 'string',
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsResponseBody extends $tea.Model {
  fields?: BatchGetExpressionFieldsResponseBodyFields[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': BatchGetExpressionFieldsResponseBodyFields },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetExpressionFieldsResponseBody;
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
      body: BatchGetExpressionFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvList?: BatchPutKvRequestKvList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      kvList: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvList: { 'type': 'array', 'itemType': BatchPutKvRequestKvList },
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      kvListShrink: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListShrink: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvResponseBody extends $tea.Model {
  failKeys?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  successKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      failKeys: 'FailKeys',
      requestId: 'RequestId',
      successKeys: 'SuccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchPutKvResponseBody;
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
      body: BatchPutKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvWithHighCapacityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvWithHighCapacityAdvanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvWithHighCapacityResponseBody extends $tea.Model {
  failKeys?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  successKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      failKeys: 'FailKeys',
      requestId: 'RequestId',
      successKeys: 'SuccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvWithHighCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchPutKvWithHighCapacityResponseBody;
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
      body: BatchPutKvWithHighCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateWafRulesRequest extends $tea.Model {
  configs?: WafRuleConfig[];
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  shared?: WafBatchRuleShared;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      shared: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': WafRuleConfig },
      phase: 'string',
      rulesetId: 'number',
      shared: WafBatchRuleShared,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateWafRulesShrinkRequest extends $tea.Model {
  configsShrink?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  sharedShrink?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      sharedShrink: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      phase: 'string',
      rulesetId: 'number',
      sharedShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateWafRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class BatchUpdateWafRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUpdateWafRulesResponseBody;
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
      body: BatchUpdateWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlockObjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string[];
  extension?: string;
  maxage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BlockObject
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extension: 'Extension',
      maxage: 'Maxage',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      extension: 'string',
      maxage: 'number',
      siteId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlockObjectShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentShrink?: string;
  extension?: string;
  maxage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BlockObject
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      extension: 'Extension',
      maxage: 'Maxage',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      extension: 'string',
      maxage: 'number',
      siteId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlockObjectResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlockObjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BlockObjectResponseBody;
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
      body: BlockObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-axxxxxx
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteNameRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteNameResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  description?: string;
  /**
   * @example
   * false
   */
  isSubSite?: boolean;
  messeage?: string;
  /**
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isSubSite: 'IsSubSite',
      messeage: 'Messeage',
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isSubSite: 'boolean',
      messeage: 'string',
      passed: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSiteNameResponseBody;
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
      body: CheckSiteNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteProjectNameRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_log
   */
  projectName?: string;
  /**
   * @example
   * 12312312213212
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteProjectNameResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  check?: boolean;
  /**
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @example
   * dcdn_waf_userAccount_log
   */
  projectName?: string;
  /**
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      description: 'Description',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      description: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSiteProjectNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSiteProjectNameResponseBody;
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
      body: CheckSiteProjectNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserProjectNameRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-dcdn-log-56
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserProjectNameResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  check?: boolean;
  /**
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @example
   * ali-dcdn-log-56
   */
  projectName?: string;
  /**
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      description: 'Description',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      description: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserProjectNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUserProjectNameResponseBody;
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
      body: CheckUserProjectNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomScenePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 7096621098****
   */
  objects?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomScenePolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 2021-11-07T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  objects?: string[];
  /**
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      requestId: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomScenePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomScenePolicyResponseBody;
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
      body: CreateCustomScenePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKvNamespaceRequest extends $tea.Model {
  /**
   * @example
   * this is a test namespace.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKvNamespaceResponseBody extends $tea.Model {
  /**
   * @example
   * this is a test namespace.
   */
  description?: string;
  /**
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @example
   * 657717877171818496
   */
  namespaceId?: string;
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKvNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKvNamespaceResponseBody;
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
      body: CreateKvNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListRequest extends $tea.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @example
   * a custom list
   */
  items?: string[];
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      items: 'Items',
      kind: 'Kind',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      kind: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListShrinkRequest extends $tea.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      itemsShrink: 'Items',
      kind: 'Kind',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      itemsShrink: 'string',
      kind: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListResponseBody extends $tea.Model {
  /**
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateListResponseBody;
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
      body: CreateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePageRequest extends $tea.Model {
  /**
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePageResponseBody extends $tea.Model {
  /**
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePageResponseBody;
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
      body: CreatePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordRequest extends $tea.Model {
  authConf?: CreateRecordRequestAuthConf;
  /**
   * @remarks
   * 业务场景
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: CreateRecordRequestData;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * 记录名称
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * 记录类型
   * 
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: CreateRecordRequestAuthConf,
      bizName: 'string',
      comment: 'string',
      data: CreateRecordRequestData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordShrinkRequest extends $tea.Model {
  authConfShrink?: string;
  /**
   * @remarks
   * 业务场景
   * 
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * This is a remark.
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  dataShrink?: string;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * 记录名称
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @remarks
   * 记录类型
   * 
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfShrink: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      dataShrink: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfShrink: 'string',
      bizName: 'string',
      comment: 'string',
      dataShrink: 'string',
      hostPolicy: 'string',
      proxied: 'boolean',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordResponseBody extends $tea.Model {
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRecordResponseBody;
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
      body: CreateRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executions?: CreateScheduledPreloadExecutionsRequestExecutions[];
  /**
   * @example
   * CreateScheduledPreloadExecutions
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsRequestExecutions },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executionsShrink?: string;
  /**
   * @example
   * CreateScheduledPreloadExecutions
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executionsShrink: 'Executions',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionsShrink: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponseBody extends $tea.Model {
  failedExecutions?: CreateScheduledPreloadExecutionsResponseBodyFailedExecutions[];
  failedMessages?: string[];
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  successCount?: number;
  successExecutions?: CreateScheduledPreloadExecutionsResponseBodySuccessExecutions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedExecutions: 'FailedExecutions',
      failedMessages: 'FailedMessages',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successExecutions: 'SuccessExecutions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodyFailedExecutions },
      failedMessages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      successExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodySuccessExecutions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledPreloadExecutionsResponseBody;
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
      body: CreateScheduledPreloadExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ossUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  urlList?: string;
  static names(): { [key: string]: string } {
    return {
      insertWay: 'InsertWay',
      name: 'Name',
      ossUrl: 'OssUrl',
      siteId: 'SiteId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insertWay: 'string',
      name: 'string',
      ossUrl: 'string',
      siteId: 'number',
      urlList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadJobResponseBody extends $tea.Model {
  aliUid?: string;
  createdAt?: string;
  domains?: string;
  errorInfo?: string;
  failedFileOss?: string;
  fileId?: string;
  id?: string;
  insertWay?: string;
  name?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  siteId?: number;
  taskSubmitted?: number;
  taskType?: string;
  urlCount?: number;
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      requestId: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledPreloadJobResponseBody;
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
      body: CreateScheduledPreloadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-nwy349jdb03
   */
  instanceId?: string;
  /**
   * @example
   * rg-acfmw4znnok****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 记录名称
   * 
   * This parameter is required.
   * 
   * @example
   * CreateSite
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteResponseBody extends $tea.Model {
  /**
   * @example
   * ns1.example.com,ns2.example.com
   */
  nameServerList?: string;
  /**
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * verify_aah9dioasmov****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      nameServerList: 'NameServerList',
      requestId: 'RequestId',
      siteId: 'SiteId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServerList: 'string',
      requestId: 'string',
      siteId: 'number',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSiteResponseBody;
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
      body: CreateSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteCustomLogRequest extends $tea.Model {
  cookies?: string[];
  requestHeaders?: string[];
  responseHeaders?: string[];
  /**
   * @example
   * 11223
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookies: 'Cookies',
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookies: { 'type': 'array', 'itemType': 'string' },
      requestHeaders: { 'type': 'array', 'itemType': 'string' },
      responseHeaders: { 'type': 'array', 'itemType': 'string' },
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteCustomLogShrinkRequest extends $tea.Model {
  cookiesShrink?: string;
  requestHeadersShrink?: string;
  responseHeadersShrink?: string;
  /**
   * @example
   * 11223
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookiesShrink: 'Cookies',
      requestHeadersShrink: 'RequestHeaders',
      responseHeadersShrink: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookiesShrink: 'string',
      requestHeadersShrink: 'string',
      responseHeadersShrink: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteCustomLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 073bd613-6e72-4461-b6bc-19326dfc6a9c
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

export class CreateSiteCustomLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSiteCustomLogResponseBody;
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
      body: CreateSiteCustomLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_adress,ip_port
   */
  fieldName?: string;
  httpDelivery?: CreateSiteDeliveryTaskRequestHttpDelivery;
  kafkaDelivery?: CreateSiteDeliveryTaskRequestKafkaDelivery;
  ossDelivery?: CreateSiteDeliveryTaskRequestOssDelivery;
  s3Delivery?: CreateSiteDeliveryTaskRequestS3Delivery;
  /**
   * @example
   * 12312312112***
   */
  siteId?: number;
  slsDelivery?: CreateSiteDeliveryTaskRequestSlsDelivery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      httpDelivery: 'HttpDelivery',
      kafkaDelivery: 'KafkaDelivery',
      ossDelivery: 'OssDelivery',
      s3Delivery: 'S3Delivery',
      siteId: 'SiteId',
      slsDelivery: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      httpDelivery: CreateSiteDeliveryTaskRequestHttpDelivery,
      kafkaDelivery: CreateSiteDeliveryTaskRequestKafkaDelivery,
      ossDelivery: CreateSiteDeliveryTaskRequestOssDelivery,
      s3Delivery: CreateSiteDeliveryTaskRequestS3Delivery,
      siteId: 'number',
      slsDelivery: CreateSiteDeliveryTaskRequestSlsDelivery,
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_adress,ip_port
   */
  fieldName?: string;
  httpDeliveryShrink?: string;
  kafkaDeliveryShrink?: string;
  ossDeliveryShrink?: string;
  s3DeliveryShrink?: string;
  /**
   * @example
   * 12312312112***
   */
  siteId?: number;
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      httpDeliveryShrink: 'HttpDelivery',
      kafkaDeliveryShrink: 'KafkaDelivery',
      ossDeliveryShrink: 'OssDelivery',
      s3DeliveryShrink: 'S3Delivery',
      siteId: 'SiteId',
      slsDeliveryShrink: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      httpDeliveryShrink: 'string',
      kafkaDeliveryShrink: 'string',
      ossDeliveryShrink: 'string',
      s3DeliveryShrink: 'string',
      siteId: 'number',
      slsDeliveryShrink: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9358E852-992D-5BC7-8BD7-975CA02773A8
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: string;
  /**
   * @example
   * er-oss
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      requestId: 'string',
      siteId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSiteDeliveryTaskResponseBody;
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
      body: CreateSiteDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_address,ip_port
   */
  fieldName?: string;
  httpDelivery?: CreateUserDeliveryTaskRequestHttpDelivery;
  kafkaDelivery?: CreateUserDeliveryTaskRequestKafkaDelivery;
  ossDelivery?: CreateUserDeliveryTaskRequestOssDelivery;
  s3Delivery?: CreateUserDeliveryTaskRequestS3Delivery;
  slsDelivery?: CreateUserDeliveryTaskRequestSlsDelivery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      httpDelivery: 'HttpDelivery',
      kafkaDelivery: 'KafkaDelivery',
      ossDelivery: 'OssDelivery',
      s3Delivery: 'S3Delivery',
      slsDelivery: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      httpDelivery: CreateUserDeliveryTaskRequestHttpDelivery,
      kafkaDelivery: CreateUserDeliveryTaskRequestKafkaDelivery,
      ossDelivery: CreateUserDeliveryTaskRequestOssDelivery,
      s3Delivery: CreateUserDeliveryTaskRequestS3Delivery,
      slsDelivery: CreateUserDeliveryTaskRequestSlsDelivery,
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_address,ip_port
   */
  fieldName?: string;
  httpDeliveryShrink?: string;
  kafkaDeliveryShrink?: string;
  ossDeliveryShrink?: string;
  s3DeliveryShrink?: string;
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      httpDeliveryShrink: 'HttpDelivery',
      kafkaDeliveryShrink: 'KafkaDelivery',
      ossDeliveryShrink: 'OssDelivery',
      s3DeliveryShrink: 'S3Delivery',
      slsDeliveryShrink: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      httpDeliveryShrink: 'string',
      kafkaDeliveryShrink: 'string',
      ossDeliveryShrink: 'string',
      s3DeliveryShrink: 'string',
      slsDeliveryShrink: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2CCD40B1-3F20-5FF0-8A67-E3F34B87744F
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * er-http
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      requestId: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserDeliveryTaskResponseBody;
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
      body: CreateUserDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWafRuleRequest extends $tea.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      phase: 'Phase',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      phase: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWafRuleShrinkRequest extends $tea.Model {
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      phase: 'Phase',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      phase: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWafRuleResponseBody extends $tea.Model {
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesetId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      rulesetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWafRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWafRuleResponseBody;
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
      body: CreateWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostNameAndPath?: CreateWaitingRoomRequestHostNameAndPath[];
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * enus
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPath: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPath: { 'type': 'array', 'itemType': CreateWaitingRoomRequestHostNameAndPath },
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      totalActiveUsers: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostNameAndPathShrink?: string;
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * enus
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPathShrink: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPathShrink: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      totalActiveUsers: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomResponseBody extends $tea.Model {
  /**
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
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

export class CreateWaitingRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWaitingRoomResponseBody;
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
      body: CreateWaitingRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomEventRequest extends $tea.Model {
  /**
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1719849600
   */
  endTime?: string;
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * zhcn
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @example
   * 1719763200
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * random
   */
  queuingMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202
   */
  queuingStatusCode?: string;
  /**
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalActiveUsers?: string;
  /**
   * @example
   * 6a51d5bc6460887abd1291dc7d4db28b
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      preQueueEnable: 'PreQueueEnable',
      preQueueStartTime: 'PreQueueStartTime',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      randomPreQueueEnable: 'RandomPreQueueEnable',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      endTime: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      preQueueEnable: 'string',
      preQueueStartTime: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      randomPreQueueEnable: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomEventResponseBody extends $tea.Model {
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
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

export class CreateWaitingRoomEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWaitingRoomEventResponseBody;
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
      body: CreateWaitingRoomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25133f536f1b1f6b6091f6a92c614dd4
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      siteId: 'number',
      waitingRoomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomRuleResponseBody extends $tea.Model {
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
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

export class CreateWaitingRoomRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWaitingRoomRuleResponseBody;
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
      body: CreateWaitingRoomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomScenePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomScenePolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5CC228B4-7A67-4016-9C9F-4A4133494A91
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomScenePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomScenePolicyResponseBody;
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
      body: DeleteCustomScenePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKvRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKvResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
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

export class DeleteKvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKvResponseBody;
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
      body: DeleteKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKvNamespaceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKvNamespaceResponseBody extends $tea.Model {
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
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

export class DeleteKvNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKvNamespaceResponseBody;
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
      body: DeleteKvNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class DeleteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteListResponseBody;
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
      body: DeleteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePageResponseBody extends $tea.Model {
  /**
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePageResponseBody;
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
      body: DeletePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
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

export class DeleteRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRecordResponseBody;
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
      body: DeleteRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPreloadExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DeleteScheduledPreloadExecution
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPreloadExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
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

export class DeleteScheduledPreloadExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduledPreloadExecutionResponseBody;
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
      body: DeleteScheduledPreloadExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPreloadJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DeleteScheduledPreloadJob
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledPreloadJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
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

export class DeleteScheduledPreloadJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduledPreloadJobResponseBody;
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
      body: DeleteScheduledPreloadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteResponseBody extends $tea.Model {
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
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

export class DeleteSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSiteResponseBody;
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
      body: DeleteSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteDeliveryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
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

export class DeleteSiteDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSiteDeliveryTaskResponseBody;
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
      body: DeleteSiteDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDeliveryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 952ea16b-1f05-4a76-bb32-420282d8aeb9
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

export class DeleteUserDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserDeliveryTaskResponseBody;
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
      body: DeleteUserDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWafRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWafRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class DeleteWafRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWafRuleResponseBody;
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
      body: DeleteWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWafRulesetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWafRulesetResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class DeleteWafRulesetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWafRulesetResponseBody;
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
      body: DeleteWafRulesetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25133f536f1b1f6b6091f6a92c614dd4
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomResponseBody extends $tea.Model {
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
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

export class DeleteWaitingRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWaitingRoomResponseBody;
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
      body: DeleteWaitingRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomEventRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 302909890***
   */
  waitingRoomEventId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomEventId: 'WaitingRoomEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomEventId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomEventResponseBody extends $tea.Model {
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
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

export class DeleteWaitingRoomEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWaitingRoomEventResponseBody;
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
      body: DeleteWaitingRoomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 3672886****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWaitingRoomRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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

export class DeleteWaitingRoomRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWaitingRoomRuleResponseBody;
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
      body: DeleteWaitingRoomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1234****
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesResponseBody extends $tea.Model {
  dataModule?: DescribeCustomScenePoliciesResponseBodyDataModule[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quota: 'Quota',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeCustomScenePoliciesResponseBodyDataModule },
      pageNumber: 'number',
      pageSize: 'number',
      quota: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomScenePoliciesResponseBody;
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
      body: DescribeCustomScenePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSAllEventListRequest extends $tea.Model {
  /**
   * @example
   * 2023-02-22T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * A short description of struct
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-12T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSAllEventListResponseBody extends $tea.Model {
  dataList?: DescribeDDoSAllEventListResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D73A4243-CFBD-5110-876F-09237E77ECBD
   */
  requestId?: string;
  /**
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteId: 'SiteId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDDoSAllEventListResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteId: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSAllEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSAllEventListResponseBody;
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
      body: DescribeDDoSAllEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackIntelligentProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackIntelligentProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiTemplate: 'AiTemplate',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiTemplate: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackIntelligentProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHttpDDoSAttackIntelligentProtectionResponseBody;
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
      body: DescribeHttpDDoSAttackIntelligentProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35C66C7B-671H-4297-9187-2C4477247A78
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      globalMode: 'GlobalMode',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalMode: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHttpDDoSAttackProtectionResponseBody;
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
      body: DescribeHttpDDoSAttackProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPRangeListResponseBody extends $tea.Model {
  content?: DescribeIPRangeListResponseBodyContent[];
  /**
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeIPRangeListResponseBodyContent },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPRangeListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIPRangeListResponseBody;
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
      body: DescribeIPRangeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKvAccountStatusResponseBody extends $tea.Model {
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKvAccountStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKvAccountStatusResponseBody;
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
      body: DescribeKvAccountStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadTasksRequest extends $tea.Model {
  /**
   * @example
   * http://a.com/1.jpg?b=2
   */
  content?: string;
  /**
   * @example
   * 2023-03-23T06:23:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @example
   * 2023-03-22T17:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  tasks?: DescribePreloadTasksResponseBodyTasks[];
  /**
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribePreloadTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePreloadTasksResponseBody;
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
      body: DescribePreloadTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurgeTasksRequest extends $tea.Model {
  /**
   * @example
   * http://a.com/1.jpg?b=1
   */
  content?: string;
  /**
   * @example
   * 2022-11-18T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @example
   * 2022-11-16T05:33:00Z
   */
  startTime?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  /**
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurgeTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  tasks?: DescribePurgeTasksResponseBodyTasks[];
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribePurgeTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurgeTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePurgeTasksResponseBody;
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
      body: DescribePurgeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCustomScenePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100001
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCustomScenePolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 100001
   */
  policyId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableCustomScenePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableCustomScenePolicyResponseBody;
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
      body: DisableCustomScenePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditSiteWafSettingsRequest extends $tea.Model {
  settings?: WafSiteSettings;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: WafSiteSettings,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditSiteWafSettingsShrinkRequest extends $tea.Model {
  settingsShrink?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      settingsShrink: 'Settings',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settingsShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditSiteWafSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class EditSiteWafSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditSiteWafSettingsResponseBody;
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
      body: EditSiteWafSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCustomScenePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCustomScenePolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableCustomScenePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableCustomScenePolicyResponseBody;
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
      body: EnableCustomScenePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordsRequest extends $tea.Model {
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * ;; site:example.com.\\n;; Exported:2024-01-24 15:54:35\\n\\n;; A Records\\na1.example.com. 30 IN A 1.1.1.1 direct\\na2.example.com. 30 IN A 1.1.1.1 direct\\na3.example.com. 30 IN A 1.1.1.1 direct\\n
   */
  content?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C69B5894-D1BA-592C-95D0-DADBE7AEAC63
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportRecordsResponseBody;
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
      body: ExportRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCacheReserveSpecificationResponseBody extends $tea.Model {
  cacheReserveCapacity?: string[];
  cacheReserveRegion?: string[];
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheReserveCapacity: 'CacheReserveCapacity',
      cacheReserveRegion: 'CacheReserveRegion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveCapacity: { 'type': 'array', 'itemType': 'string' },
      cacheReserveRegion: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCacheReserveSpecificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCacheReserveSpecificationResponseBody;
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
      body: GetCacheReserveSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErServiceResponseBody extends $tea.Model {
  /**
   * @example
   * er_paymode
   */
  planName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      planName: 'PlanName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErServiceResponseBody;
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
      body: GetErServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  base64?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      key: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvResponseBody extends $tea.Model {
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKvResponseBody;
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
      body: GetKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @example
   * 1 GB
   */
  capacityString?: string;
  /**
   * @example
   * 10048576
   */
  capacityUsed?: number;
  /**
   * @example
   * 100 MB
   */
  capacityUsedString?: string;
  namespaceList?: GetKvAccountResponseBodyNamespaceList[];
  /**
   * @example
   * 10
   */
  namespaceQuota?: number;
  /**
   * @example
   * 1
   */
  namespaceUsed?: number;
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      capacityString: 'CapacityString',
      capacityUsed: 'CapacityUsed',
      capacityUsedString: 'CapacityUsedString',
      namespaceList: 'NamespaceList',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsed: 'NamespaceUsed',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      capacityString: 'string',
      capacityUsed: 'number',
      capacityUsedString: 'string',
      namespaceList: { 'type': 'array', 'itemType': GetKvAccountResponseBodyNamespaceList },
      namespaceQuota: 'number',
      namespaceUsed: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKvAccountResponseBody;
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
      body: GetKvAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvNamespaceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvNamespaceResponseBody extends $tea.Model {
  /**
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @example
   * 1 GB
   */
  capacityString?: string;
  /**
   * @example
   * 10048576
   */
  capacityUsed?: number;
  /**
   * @example
   * 100 MB
   */
  capacityUsedString?: string;
  /**
   * @example
   * this is a test namespace.
   */
  description?: string;
  /**
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @example
   * 643355322374688768
   */
  namespaceId?: string;
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      capacityString: 'CapacityString',
      capacityUsed: 'CapacityUsed',
      capacityUsedString: 'CapacityUsedString',
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      capacityString: 'string',
      capacityUsed: 'number',
      capacityUsedString: 'string',
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKvNamespaceResponseBody;
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
      body: GetKvNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListRequest extends $tea.Model {
  /**
   * @example
   * 40000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListResponseBody extends $tea.Model {
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 40000001
   */
  id?: number;
  items?: string[];
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      items: 'Items',
      kind: 'Kind',
      name: 'Name',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      items: { 'type': 'array', 'itemType': 'string' },
      kind: 'string',
      name: 'string',
      requestId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetListResponseBody;
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
      body: GetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageRequest extends $tea.Model {
  /**
   * @example
   * 50000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageResponseBody extends $tea.Model {
  /**
   * @remarks
   * 自定义响应页面内容BASE64编码
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @example
   * custom
   */
  kind?: string;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      name: 'Name',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      kind: 'string',
      name: 'string',
      requestId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPageResponseBody;
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
      body: GetPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurgeQuotaRequest extends $tea.Model {
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurgeQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * 100000
   */
  quota?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      requestId: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurgeQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPurgeQuotaResponseBody;
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
      body: GetPurgeQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeDeliveryFieldRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeDeliveryFieldResponseBody extends $tea.Model {
  fieldContent?: { [key: string]: FieldContentValue };
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fieldContent: 'FieldContent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldContent: { 'type': 'map', 'keyType': 'string', 'valueType': FieldContentValue },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeDeliveryFieldResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealtimeDeliveryFieldResponseBody;
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
      body: GetRealtimeDeliveryFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBody extends $tea.Model {
  recordModel?: GetRecordResponseBodyRecordModel;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordModel: 'RecordModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordModel: GetRecordResponseBodyRecordModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordResponseBody;
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
      body: GetRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledPreloadJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GetScheduledPreloadJob
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledPreloadJobResponseBody extends $tea.Model {
  aliUid?: string;
  createdAt?: string;
  domains?: string;
  errorInfo?: string;
  failedFileOss?: string;
  fileId?: string;
  id?: string;
  insertWay?: string;
  name?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  siteId?: number;
  taskSubmitted?: number;
  taskType?: string;
  urlCount?: number;
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      requestId: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledPreloadJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScheduledPreloadJobResponseBody;
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
      body: GetScheduledPreloadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  siteModel?: GetSiteResponseBodySiteModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteModel: 'SiteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteModel: GetSiteResponseBodySiteModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteResponseBody;
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
      body: GetSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCurrentNSRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCurrentNSResponseBody extends $tea.Model {
  NSList?: string[];
  /**
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      NSList: 'NSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      NSList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCurrentNSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteCurrentNSResponseBody;
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
      body: GetSiteCurrentNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCustomLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11223***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCustomLogResponseBody extends $tea.Model {
  /**
   * @example
   * 6befa4aa-2a94-4f51-a245-295787192d2c
   */
  configId?: number;
  /**
   * @example
   * true
   */
  isExist?: boolean;
  logCustomField?: GetSiteCustomLogResponseBodyLogCustomField;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6befa4aa-2a94-4f51-a245-295787192d2c
   */
  requestId?: string;
  /**
   * @example
   * 167026711***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      isExist: 'IsExist',
      logCustomField: 'LogCustomField',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      isExist: 'boolean',
      logCustomField: GetSiteCustomLogResponseBodyLogCustomField,
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCustomLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteCustomLogResponseBody;
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
      body: GetSiteCustomLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteDeliveryTaskRequest extends $tea.Model {
  /**
   * @example
   * 123456***
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @example
   * Client,UserAgent
   */
  fieldList?: string;
  /**
   * @example
   * []
   */
  filterRules?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @example
   * {\\"Region\\": \\"cn-hangzhou\\", \\"Endpoint\\": \\"https://***.oss-cn-hangzhou.aliyuncs.com\\", \\"BucketPath\\": \\"hjy-test002/online-logs\\"}
   */
  sinkConfig?: any;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * test.***.com
   */
  siteName?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      requestId: 'string',
      sinkConfig: 'any',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteDeliveryTaskResponseBody;
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
      body: GetSiteDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteLogDeliveryQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteLogDeliveryQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * 3
   */
  freeQuota?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4C14840EF0EAAB6D97CDE0C5F6554ACE
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      freeQuota: 'FreeQuota',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      freeQuota: 'number',
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteLogDeliveryQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteLogDeliveryQuotaResponseBody;
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
      body: GetSiteLogDeliveryQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteWafSettingsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteWafSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  settings?: WafSiteSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      settings: WafSiteSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteWafSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSiteWafSettingsResponseBody;
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
      body: GetSiteWafSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadTaskRequest extends $tea.Model {
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 159253299357****
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      uploadId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadTaskResponseBody extends $tea.Model {
  /**
   * @example
   * invalid url
   */
  description?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A52****
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadTaskResponseBody;
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
      body: GetUploadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeliveryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @example
   * oss
   */
  deliveryType?: string;
  /**
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @example
   * ClientRequestID,ClientRequestHost
   */
  fieldList?: string;
  /**
   * @example
   * [{"ClientSSLProtocol": {"equals": ["TLSv1.3"]}}]
   */
  filterRules?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7072132a-bd3c-46a6-9e81-aba3e0e3f861
   */
  requestId?: string;
  /**
   * @example
   * {\\"Project\\": \\"er-online-hjy-pro\\", \\"Logstore\\": \\"er-online-hjy-log\\", \\"Region\\": \\"cn-hangzhou\\", \\"Endpoint\\": \\"cn-hangzhou.log.aliyuncs.com\\", \\"Aliuid\\": \\"1077912128805410\\"}
   */
  sinkConfig?: any;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * testoss11
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      requestId: 'string',
      sinkConfig: 'any',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserDeliveryTaskResponseBody;
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
      body: GetUserDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLogDeliveryQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLogDeliveryQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * 3
   */
  freeQuota?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      freeQuota: 'FreeQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      freeQuota: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLogDeliveryQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserLogDeliveryQuotaResponseBody;
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
      body: GetUserLogDeliveryQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafBotAppKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * APP key
   * 
   * @example
   * example_appkey
   */
  appKey?: string;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafBotAppKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWafBotAppKeyResponseBody;
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
      body: GetWafBotAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @example
   * http_custom_cc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      siteId: 'SiteId',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      siteId: 'number',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBody extends $tea.Model {
  filter?: GetWafFilterResponseBodyFilter;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: GetWafFilterResponseBodyFilter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWafFilterResponseBody;
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
      body: GetWafFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaRequest extends $tea.Model {
  /**
   * @example
   * page
   */
  paths?: string;
  static names(): { [key: string]: string } {
    return {
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paths: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBody extends $tea.Model {
  quota?: GetWafQuotaResponseBodyQuota;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetWafQuotaResponseBodyQuota,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWafQuotaResponseBody;
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
      body: GetWafQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRuleResponseBody extends $tea.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 2000001
   */
  id?: number;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWafRuleResponseBody;
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
      body: GetWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRulesetRequest extends $tea.Model {
  /**
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRulesetResponseBody extends $tea.Model {
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rules?: WafRuleConfig[];
  shared?: WafBatchRuleShared;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      requestId: 'RequestId',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      phase: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafRulesetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWafRulesetResponseBody;
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
      body: GetWafRulesetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCacheReserveInstancesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  /**
   * @example
   * ListCacheReserveInstances
   * 
   * **if can be null:**
   * false
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCacheReserveInstancesResponseBody extends $tea.Model {
  instanceInfo?: ListCacheReserveInstancesResponseBodyInstanceInfo[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListCacheReserveInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCacheReserveInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCacheReserveInstancesResponseBody;
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
      body: ListCacheReserveInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificatesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificatesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  result?: ListClientCertificatesResponseBodyResult[];
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClientCertificatesResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientCertificatesResponseBody;
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
      body: ListClientCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @example
   * CreateTime
   */
  orderKey?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ver-1006157458290860032
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderKey: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: ListEdgeContainerAppRecordsResponseBodyRecords[];
  /**
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEdgeContainerAppRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEdgeContainerAppRecordsResponseBody;
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
      body: ListEdgeContainerAppRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppsRequest extends $tea.Model {
  /**
   * @example
   * CreateTime
   */
  orderKey?: string;
  /**
   * @example
   * Asc
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ver-1005682639679266816
   */
  searchKey?: string;
  /**
   * @example
   * Appid
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      searchType: 'SearchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderKey: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      searchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppsResponseBody extends $tea.Model {
  apps?: ListEdgeContainerAppsResponseBodyApps[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListEdgeContainerAppsResponseBodyApps },
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

export class ListEdgeContainerAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEdgeContainerAppsResponseBody;
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
      body: ListEdgeContainerAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerRecordsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  records?: ListEdgeContainerRecordsResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEdgeContainerRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEdgeContainerRecordsResponseBody;
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
      body: ListEdgeContainerRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutinePlansResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  planInfo?: ListEdgeRoutinePlansResponseBodyPlanInfo[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planInfo: 'PlanInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planInfo: { 'type': 'array', 'itemType': ListEdgeRoutinePlansResponseBodyPlanInfo },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutinePlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEdgeRoutinePlansResponseBody;
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
      body: ListEdgeRoutinePlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutineRecordsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutineRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: ListEdgeRoutineRecordsResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEdgeRoutineRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutineRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEdgeRoutineRecordsResponseBody;
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
      body: ListEdgeRoutineRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasRequest extends $tea.Model {
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * preload, free_cert
   */
  quotaNames?: string;
  /**
   * @example
   * 2882900****
   * 
   * **if can be null:**
   * false
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaNames: 'QuotaNames',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaNames: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasResponseBody extends $tea.Model {
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  quotas?: ListInstanceQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceQuotasResponseBody;
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
      body: ListInstanceQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasWithUsageRequest extends $tea.Model {
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * customHttpCert
   */
  quotaNames?: string;
  /**
   * @example
   * 1232223****
   * 
   * **if can be null:**
   * false
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaNames: 'QuotaNames',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaNames: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasWithUsageResponseBody extends $tea.Model {
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  quotas?: ListInstanceQuotasWithUsageResponseBodyQuotas[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasWithUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceQuotasWithUsageResponseBody;
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
      body: ListInstanceQuotasWithUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKvsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * prefix-
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKvsResponseBody extends $tea.Model {
  keys?: ListKvsResponseBodyKeys[];
  /**
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * 1024
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': ListKvsResponseBodyKeys },
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

export class ListKvsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKvsResponseBody;
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
      body: ListKvsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ListLists
   */
  queryArgs?: ListListsRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: ListListsRequestQueryArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ListLists
   */
  queryArgsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgsShrink: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsResponseBody extends $tea.Model {
  lists?: ListListsResponseBodyLists[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      lists: 'Lists',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lists: { 'type': 'array', 'itemType': ListListsResponseBodyLists },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListListsResponseBody;
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
      body: ListListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerRegionsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1024
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerRegionsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1024
   */
  pageSize?: number;
  regions?: ListLoadBalancerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 81A5E222-24BF-17EF-9E80-A68D9B8F363D
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regions: { 'type': 'array', 'itemType': ListLoadBalancerRegionsResponseBodyRegions },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLoadBalancerRegionsResponseBody;
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
      body: ListLoadBalancerRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesGroupsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesGroupsResponseBody extends $tea.Model {
  managedRulesGroups?: ListManagedRulesGroupsResponseBodyManagedRulesGroups[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      managedRulesGroups: 'ManagedRulesGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRulesGroups: { 'type': 'array', 'itemType': ListManagedRulesGroupsResponseBodyManagedRulesGroups },
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

export class ListManagedRulesGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListManagedRulesGroupsResponseBody;
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
      body: ListManagedRulesGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  pages?: ListPagesResponseBodyPages[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: { 'type': 'array', 'itemType': ListPagesResponseBodyPages },
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPagesResponseBody;
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
      body: ListPagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsRequest extends $tea.Model {
  /**
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  proxied?: string;
  /**
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * CNAME
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      proxied: 'Proxied',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      proxied: 'string',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: ListRecordsResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecordsResponseBody;
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
      body: ListRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ListScheduledPreloadExecutions
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadExecutionsResponseBody extends $tea.Model {
  executions?: ListScheduledPreloadExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListScheduledPreloadExecutionsResponseBodyExecutions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledPreloadExecutionsResponseBody;
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
      body: ListScheduledPreloadExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadJobsRequest extends $tea.Model {
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ListScheduledPreloadJobs
   */
  siteId?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadJobsResponseBody extends $tea.Model {
  jobs?: ListScheduledPreloadJobsResponseBodyJobs[];
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListScheduledPreloadJobsResponseBodyJobs },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledPreloadJobsResponseBody;
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
      body: ListScheduledPreloadJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteDeliveryTasksRequest extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteDeliveryTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  tasks?: ListSiteDeliveryTasksResponseBodyTasks[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListSiteDeliveryTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteDeliveryTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSiteDeliveryTasksResponseBody;
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
      body: ListSiteDeliveryTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesRequest extends $tea.Model {
  accessType?: string;
  coverage?: string;
  /**
   * @example
   * false
   */
  onlyEnterprise?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  planSubscribeType?: string;
  /**
   * @example
   * rg-aekzd3styujvyei
   */
  resourceGroupId?: string;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * fuzzy
   */
  siteSearchType?: string;
  /**
   * @example
   * pending
   */
  status?: string;
  tagFilter?: ListSitesRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      onlyEnterprise: 'OnlyEnterprise',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planSubscribeType: 'PlanSubscribeType',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
      siteSearchType: 'SiteSearchType',
      status: 'Status',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      onlyEnterprise: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      planSubscribeType: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
      siteSearchType: 'string',
      status: 'string',
      tagFilter: { 'type': 'array', 'itemType': ListSitesRequestTagFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesShrinkRequest extends $tea.Model {
  accessType?: string;
  coverage?: string;
  /**
   * @example
   * false
   */
  onlyEnterprise?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  planSubscribeType?: string;
  /**
   * @example
   * rg-aekzd3styujvyei
   */
  resourceGroupId?: string;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * fuzzy
   */
  siteSearchType?: string;
  /**
   * @example
   * pending
   */
  status?: string;
  tagFilterShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      onlyEnterprise: 'OnlyEnterprise',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planSubscribeType: 'PlanSubscribeType',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
      siteSearchType: 'SiteSearchType',
      status: 'Status',
      tagFilterShrink: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      onlyEnterprise: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      planSubscribeType: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
      siteSearchType: 'string',
      status: 'string',
      tagFilterShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  sites?: ListSitesResponseBodySites[];
  /**
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sites: 'Sites',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sites: { 'type': 'array', 'itemType': ListSitesResponseBodySites },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSitesResponseBody;
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
      body: ListSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxItem?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * 要创建并绑定标签的资源所在的地域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源ID,最多 50个子项
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * site
   */
  resourceType?: string;
  securityToken?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxItem: 'MaxItem',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxItem: 'number',
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * AAAAAYwsxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  /**
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksRequest extends $tea.Model {
  /**
   * @example
   * 2019-12-06T12:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 2018-11-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      siteId: 'number',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6D****
   */
  requestId?: string;
  tasks?: ListUploadTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListUploadTasksResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUploadTasksResponseBody;
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
      body: ListUploadTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDeliveryTasksRequest extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDeliveryTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1f94c47f-3a1a-4f69-8d6c-bfeee1b49aab
   */
  requestId?: string;
  tasks?: ListUserDeliveryTasksResponseBodyTasks[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListUserDeliveryTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDeliveryTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserDeliveryTasksResponseBody;
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
      body: ListUserDeliveryTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRatePlanInstancesRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @example
   * online
   * 
   * **if can be null:**
   * false
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkRemainingSiteQuota: 'CheckRemainingSiteQuota',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRemainingSiteQuota: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRatePlanInstancesResponseBody extends $tea.Model {
  instanceInfo?: ListUserRatePlanInstancesResponseBodyInstanceInfo[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @example
   * 68
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListUserRatePlanInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRatePlanInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserRatePlanInstancesResponseBody;
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
      body: ListUserRatePlanInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  queryArgs?: ListWafManagedRulesRequestQueryArgs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      id: 'Id',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      id: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: ListWafManagedRulesRequestQueryArgs,
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  queryArgsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      id: 'Id',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      id: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryArgsShrink: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rules?: ListWafManagedRulesResponseBodyRules[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafManagedRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafManagedRulesResponseBody;
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
      body: ListWafManagedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafPhasesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafPhasesResponseBody extends $tea.Model {
  phases?: ListWafPhasesResponseBodyPhases[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      phases: 'Phases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phases: { 'type': 'array', 'itemType': ListWafPhasesResponseBodyPhases },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafPhasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafPhasesResponseBody;
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
      body: ListWafPhasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesRequest extends $tea.Model {
  /**
   * @example
   * http_custom
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  phase?: string;
  /**
   * @example
   * http_custom
   */
  queryArgs?: ListWafRulesRequestQueryArgs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgs: ListWafRulesRequestQueryArgs,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesShrinkRequest extends $tea.Model {
  /**
   * @example
   * http_custom
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  phase?: string;
  /**
   * @example
   * http_custom
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgsShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rules?: ListWafRulesResponseBodyRules[];
  /**
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      siteUsage: 'SiteUsage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafRulesResponseBodyRules },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafRulesResponseBody;
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
      body: ListWafRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * http_bot
   */
  queryArgs?: ListWafRulesetsRequestQueryArgs;
  /**
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgs: ListWafRulesetsRequestQueryArgs,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * http_bot
   */
  queryArgsShrink?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgsShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesets?: ListWafRulesetsResponseBodyRulesets[];
  /**
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rulesets: 'Rulesets',
      siteUsage: 'SiteUsage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rulesets: { 'type': 'array', 'itemType': ListWafRulesetsResponseBodyRulesets },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafRulesetsResponseBody;
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
      body: ListWafRulesetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesRequest extends $tea.Model {
  /**
   * @example
   * http_anti_scan
   */
  phase?: string;
  queryArgs?: ListWafTemplateRulesRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      queryArgs: ListWafTemplateRulesRequestQueryArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesShrinkRequest extends $tea.Model {
  /**
   * @example
   * http_anti_scan
   */
  phase?: string;
  queryArgsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      queryArgsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rules?: ListWafTemplateRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafTemplateRulesResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafTemplateRulesResponseBody;
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
      body: ListWafTemplateRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafUsageOfRulesRequest extends $tea.Model {
  /**
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @example
   * ListWafUsageOfRules
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafUsageOfRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  sites?: ListWafUsageOfRulesResponseBodySites[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sites: 'Sites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sites: { 'type': 'array', 'itemType': ListWafUsageOfRulesResponseBodySites },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafUsageOfRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWafUsageOfRulesResponseBody;
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
      body: ListWafUsageOfRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomEventsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomEventId: 'WaitingRoomEventId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomEventId: 'number',
      waitingRoomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * f3c3700a-4c0f-4a24-b576-fd7dbf9e7c55
   */
  requestId?: string;
  waitingRoomEvents?: ListWaitingRoomEventsResponseBodyWaitingRoomEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEvents: 'WaitingRoomEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEvents: { 'type': 'array', 'itemType': ListWaitingRoomEventsResponseBodyWaitingRoomEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWaitingRoomEventsResponseBody;
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
      body: ListWaitingRoomEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomRulesRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
   */
  waitingRoomId?: string;
  /**
   * @example
   * 37286782688****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      siteId: 'number',
      waitingRoomId: 'string',
      waitingRoomRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  waitingRoomRules?: ListWaitingRoomRulesResponseBodyWaitingRoomRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomRules: 'WaitingRoomRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomRules: { 'type': 'array', 'itemType': ListWaitingRoomRulesResponseBodyWaitingRoomRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWaitingRoomRulesResponseBody;
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
      body: ListWaitingRoomRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 120876698010528
   */
  siteId?: number;
  /**
   * @example
   * 6a51d5bc6460887abd1291dc7d4d****
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  waitingRooms?: ListWaitingRoomsResponseBodyWaitingRooms[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRooms: 'WaitingRooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRooms: { 'type': 'array', 'itemType': ListWaitingRoomsResponseBodyWaitingRooms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWaitingRoomsResponseBody;
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
      body: ListWaitingRoomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadCachesRequest extends $tea.Model {
  content?: string[];
  headers?: { [key: string]: string };
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      headers: 'Headers',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadCachesShrinkRequest extends $tea.Model {
  contentShrink?: string;
  headersShrink?: string;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      headersShrink: 'Headers',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      headersShrink: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadCachesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  /**
   * @example
   * 16401427840
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreloadCachesResponseBody;
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
      body: PreloadCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesRequest extends $tea.Model {
  content?: PurgeCachesRequestContent;
  /**
   * @example
   * true
   */
  edgeComputePurge?: boolean;
  /**
   * @example
   * true
   */
  force?: boolean;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      edgeComputePurge: 'EdgeComputePurge',
      force: 'Force',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: PurgeCachesRequestContent,
      edgeComputePurge: 'boolean',
      force: 'boolean',
      siteId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesShrinkRequest extends $tea.Model {
  contentShrink?: string;
  /**
   * @example
   * true
   */
  edgeComputePurge?: boolean;
  /**
   * @example
   * true
   */
  force?: boolean;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      edgeComputePurge: 'EdgeComputePurge',
      force: 'Force',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      edgeComputePurge: 'boolean',
      force: 'boolean',
      siteId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
   */
  requestId?: string;
  /**
   * @example
   * 15940956620
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PurgeCachesResponseBody;
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
      body: PurgeCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  base64?: boolean;
  /**
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      namespace: 'Namespace',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      namespace: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvResponseBody extends $tea.Model {
  /**
   * @example
   * 4
   */
  length?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutKvResponseBody;
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
      body: PutKvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvWithHighCapacityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namesapce
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvWithHighCapacityAdvanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namesapce
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvWithHighCapacityResponseBody extends $tea.Model {
  /**
   * @example
   * 4
   */
  length?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutKvWithHighCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutKvWithHighCapacityResponseBody;
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
      body: PutKvWithHighCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetScheduledPreloadJobRequest extends $tea.Model {
  /**
   * @example
   * ResetScheduledPreloadJob
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetScheduledPreloadJobResponseBody extends $tea.Model {
  aliUid?: string;
  createdAt?: string;
  domains?: string;
  errorInfo?: string;
  failedFileOss?: string;
  fileId?: string;
  id?: string;
  insertWay?: string;
  name?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  siteId?: number;
  taskSubmitted?: number;
  taskType?: string;
  urlCount?: number;
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      requestId: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetScheduledPreloadJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetScheduledPreloadJobResponseBody;
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
      body: ResetScheduledPreloadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCertificateRequest extends $tea.Model {
  /**
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @example
   * 30001303
   */
  id?: string;
  /**
   * @example
   * yourCertName
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cas
   */
  type?: string;
  /**
   * @example
   * true
   */
  update?: boolean;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      certificate: 'Certificate',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      privateKey: 'PrivateKey',
      region: 'Region',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
      type: 'Type',
      update: 'Update',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      certificate: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      privateKey: 'string',
      region: 'string',
      securityToken: 'string',
      siteId: 'number',
      type: 'string',
      update: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
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

export class SetCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetCertificateResponseBody;
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
      body: SetCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackIntelligentProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiTemplate: 'AiTemplate',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiTemplate: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackIntelligentProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiTemplate: 'AiTemplate',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiTemplate: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackIntelligentProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetHttpDDoSAttackIntelligentProtectionResponseBody;
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
      body: SetHttpDDoSAttackIntelligentProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      globalMode: 'GlobalMode',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalMode: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackProtectionResponseBody extends $tea.Model {
  /**
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      globalMode: 'GlobalMode',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalMode: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHttpDDoSAttackProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetHttpDDoSAttackProtectionResponseBody;
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
      body: SetHttpDDoSAttackProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartScheduledPreloadExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * StartScheduledPreloadExecution
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartScheduledPreloadExecutionResponseBody extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  /**
   * @example
   * 60
   */
  interval?: number;
  jobId?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      requestId: 'RequestId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      requestId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartScheduledPreloadExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartScheduledPreloadExecutionResponseBody;
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
      body: StartScheduledPreloadExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopScheduledPreloadExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * StopScheduledPreloadExecution
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopScheduledPreloadExecutionResponseBody extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      requestId: 'RequestId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      requestId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopScheduledPreloadExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopScheduledPreloadExecutionResponseBody;
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
      body: StopScheduledPreloadExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformExpressionToMatchRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  expression?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformExpressionToMatchResponseBody extends $tea.Model {
  match?: WafRuleMatch;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: WafRuleMatch,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformExpressionToMatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformExpressionToMatchResponseBody;
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
      body: TransformExpressionToMatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformMatchToExpressionRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  match?: WafRuleMatch;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: WafRuleMatch,
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformMatchToExpressionShrinkRequest extends $tea.Model {
  /**
   * @example
   * http_bot
   */
  matchShrink?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      matchShrink: 'Match',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchShrink: 'string',
      phase: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformMatchToExpressionResponseBody extends $tea.Model {
  expression?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformMatchToExpressionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformMatchToExpressionResponseBody;
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
      body: TransformMatchToExpressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * 是否全部删除，只针对TagKey.N为空时有效
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * 要创建并绑定标签的资源所在的地域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源ID,最多 50个子项
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * site
   */
  resourceType?: string;
  securityToken?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      securityToken: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomScenePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 123456****
   */
  objects?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: 'string',
      policyId: 'number',
      startTime: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomScenePolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 2023-04-03T19:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  objects?: string[];
  /**
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 2023-04-03T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      requestId: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomScenePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomScenePolicyResponseBody;
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
      body: UpdateCustomScenePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKvNamespaceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * new_ns
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKvNamespaceResponseBody extends $tea.Model {
  /**
   * @example
   * this is a test ns.
   */
  description?: string;
  /**
   * @example
   * new_ns1
   */
  namespace?: string;
  /**
   * @example
   * 643355322374688768
   */
  namespaceId?: string;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKvNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKvNamespaceResponseBody;
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
      body: UpdateKvNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListRequest extends $tea.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @example
   * a custom list
   */
  items?: string[];
  /**
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      items: 'Items',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      items: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListShrinkRequest extends $tea.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      itemsShrink: 'Items',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      itemsShrink: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListResponseBody extends $tea.Model {
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class UpdateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateListResponseBody;
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
      body: UpdateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class UpdatePageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePageResponseBody;
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
      body: UpdatePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRequest extends $tea.Model {
  authConf?: UpdateRecordRequestAuthConf;
  bizName?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: UpdateRecordRequestData;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   */
  proxied?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: number;
  sourceType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordId: 'RecordId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: UpdateRecordRequestAuthConf,
      bizName: 'string',
      comment: 'string',
      data: UpdateRecordRequestData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordId: 'number',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordShrinkRequest extends $tea.Model {
  authConfShrink?: string;
  bizName?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataShrink?: string;
  hostPolicy?: string;
  /**
   * @remarks
   * 是否代理加速
   */
  proxied?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  recordId?: number;
  sourceType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      authConfShrink: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      dataShrink: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordId: 'RecordId',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfShrink: 'string',
      bizName: 'string',
      comment: 'string',
      dataShrink: 'string',
      hostPolicy: 'string',
      proxied: 'boolean',
      recordId: 'number',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordResponseBody extends $tea.Model {
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

export class UpdateRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordResponseBody;
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
      body: UpdateRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPreloadExecutionRequest extends $tea.Model {
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UpdateScheduledPreloadExecution
   */
  id?: string;
  interval?: number;
  sliceLen?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'string',
      interval: 'number',
      sliceLen: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPreloadExecutionResponseBody extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      requestId: 'RequestId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      requestId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledPreloadExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScheduledPreloadExecutionResponseBody;
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
      body: UpdateScheduledPreloadExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteAccessTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteAccessTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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

export class UpdateSiteAccessTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteAccessTypeResponseBody;
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
      body: UpdateSiteAccessTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteCoverageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteCoverageResponseBody extends $tea.Model {
  /**
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
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

export class UpdateSiteCoverageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteCoverageResponseBody;
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
      body: UpdateSiteCoverageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteCustomLogRequest extends $tea.Model {
  cookies?: string[];
  requestHeaders?: string[];
  responseHeaders?: string[];
  /**
   * @remarks
   * site id
   * 
   * @example
   * 11223****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookies: 'Cookies',
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookies: { 'type': 'array', 'itemType': 'string' },
      requestHeaders: { 'type': 'array', 'itemType': 'string' },
      responseHeaders: { 'type': 'array', 'itemType': 'string' },
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteCustomLogShrinkRequest extends $tea.Model {
  cookiesShrink?: string;
  requestHeadersShrink?: string;
  responseHeadersShrink?: string;
  /**
   * @remarks
   * site id
   * 
   * @example
   * 11223****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookiesShrink: 'Cookies',
      requestHeadersShrink: 'RequestHeaders',
      responseHeadersShrink: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookiesShrink: 'string',
      requestHeadersShrink: 'string',
      responseHeadersShrink: 'string',
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteCustomLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
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

export class UpdateSiteCustomLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteCustomLogResponseBody;
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
      body: UpdateSiteCustomLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteDeliveryTaskRequest extends $tea.Model {
  /**
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ClientIP,UserAgent
   */
  fieldName?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      siteId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
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

export class UpdateSiteDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteDeliveryTaskResponseBody;
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
      body: UpdateSiteDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteDeliveryTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * online
   */
  method?: string;
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      siteId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteDeliveryTaskStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteDeliveryTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteDeliveryTaskStatusResponseBody;
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
      body: UpdateSiteDeliveryTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteVanityNSRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * ns1.example.com,ns2.example.com
   */
  vanityNSList?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      vanityNSList: 'VanityNSList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      vanityNSList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSiteVanityNSResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
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

export class UpdateSiteVanityNSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSiteVanityNSResponseBody;
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
      body: UpdateSiteVanityNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDeliveryTaskRequest extends $tea.Model {
  /**
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ClientRequestID,ClientRequestHost
   */
  fieldName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDeliveryTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
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

export class UpdateUserDeliveryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDeliveryTaskResponseBody;
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
      body: UpdateUserDeliveryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDeliveryTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * online
   */
  method?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDeliveryTaskStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDeliveryTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDeliveryTaskStatusResponseBody;
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
      body: UpdateUserDeliveryTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRuleRequest extends $tea.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      position: 'Position',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      position: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRuleShrinkRequest extends $tea.Model {
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      id: 'Id',
      position: 'Position',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      id: 'number',
      position: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRuleResponseBody extends $tea.Model {
  id?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWafRuleResponseBody;
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
      body: UpdateWafRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRulesetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWafRulesetResponseBody extends $tea.Model {
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

export class UpdateWafRulesetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWafRulesetResponseBody;
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
      body: UpdateWafRulesetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomRequest extends $tea.Model {
  /**
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  hostNameAndPath?: UpdateWaitingRoomRequestHostNameAndPath[];
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * zhcn
   */
  language?: string;
  name?: string;
  /**
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @example
   * random
   */
  queuingMethod?: string;
  /**
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
   */
  waitingRoomId?: string;
  /**
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPath: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPath: { 'type': 'array', 'itemType': UpdateWaitingRoomRequestHostNameAndPath },
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      totalActiveUsers: 'string',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomShrinkRequest extends $tea.Model {
  /**
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  hostNameAndPathShrink?: string;
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * zhcn
   */
  language?: string;
  name?: string;
  /**
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @example
   * random
   */
  queuingMethod?: string;
  /**
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
   */
  waitingRoomId?: string;
  /**
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPathShrink: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPathShrink: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      totalActiveUsers: 'string',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomResponseBody extends $tea.Model {
  /**
   * @example
   * 0195619f-eab3-4a66-ac00-ed53d913e72e
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

export class UpdateWaitingRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWaitingRoomResponseBody;
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
      body: UpdateWaitingRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomEventRequest extends $tea.Model {
  /**
   * @example
   * html-yets-maqi1111
   */
  customPageHtml?: string;
  /**
   * @example
   * http://yywyyw.com
   */
  description?: string;
  /**
   * @example
   * off
   */
  disableSessionRenewalEnable?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  /**
   * @example
   * 1719849600
   */
  endTime?: string;
  /**
   * @example
   * off
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * enus
   */
  language?: string;
  name?: string;
  /**
   * @example
   * 300
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @example
   * 1719763200
   */
  preQueueStartTime?: string;
  /**
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @example
   * 200
   */
  totalActiveUsers?: string;
  /**
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @example
   * custom
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      preQueueEnable: 'PreQueueEnable',
      preQueueStartTime: 'PreQueueStartTime',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      randomPreQueueEnable: 'RandomPreQueueEnable',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomEventId: 'WaitingRoomEventId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      endTime: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      preQueueEnable: 'string',
      preQueueStartTime: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      randomPreQueueEnable: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomEventId: 'number',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomEventResponseBody extends $tea.Model {
  /**
   * @example
   * 0195619f-eab3-4a66-ac00-ed53d913e72e
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

export class UpdateWaitingRoomEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWaitingRoomEventResponseBody;
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
      body: UpdateWaitingRoomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * 8987739839****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      siteId: 'number',
      waitingRoomRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 9bfe9d95-7bf6-469d-a628-ed7bc9f25073
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

export class UpdateWaitingRoomRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWaitingRoomRuleResponseBody;
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
      body: UpdateWaitingRoomRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * purge_task_2024_11_11
   */
  uploadTaskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxxx.oss-cn-shenzhen.aliyuncs.com/test_oss_file?Expires=1708659191&OSSAccessKeyId=**********&Signature=**********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
      uploadTaskName: 'UploadTaskName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
      uploadTaskName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileAdvanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * purge_task_2024_11_11
   */
  uploadTaskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxxx.oss-cn-shenzhen.aliyuncs.com/test_oss_file?Expires=1708659191&OSSAccessKeyId=**********&Signature=**********
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
      uploadTaskName: 'UploadTaskName',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
      uploadTaskName: 'string',
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @example
   * 159253299357****
   */
  uploadId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadFileResponseBody;
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
      body: UploadFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySiteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySiteResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySiteResponseBody;
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
      body: VerifySiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafBatchRuleSharedActionsResponse extends $tea.Model {
  code?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafBatchRuleSharedActions extends $tea.Model {
  response?: WafBatchRuleSharedActionsResponse;
  static names(): { [key: string]: string } {
    return {
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      response: WafBatchRuleSharedActionsResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigActionsBypass extends $tea.Model {
  regularRules?: number[];
  regularTypes?: string[];
  skip?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      regularRules: 'RegularRules',
      regularTypes: 'RegularTypes',
      skip: 'Skip',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regularRules: { 'type': 'array', 'itemType': 'number' },
      regularTypes: { 'type': 'array', 'itemType': 'string' },
      skip: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigActionsResponse extends $tea.Model {
  code?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigActions extends $tea.Model {
  bypass?: WafRuleConfigActionsBypass;
  response?: WafRuleConfigActionsResponse;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypass: WafRuleConfigActionsBypass,
      response: WafRuleConfigActionsResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppPackagePackageSigns extends $tea.Model {
  name?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppPackage extends $tea.Model {
  packageSigns?: WafRuleConfigAppPackagePackageSigns[];
  static names(): { [key: string]: string } {
    return {
      packageSigns: 'PackageSigns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageSigns: { 'type': 'array', 'itemType': WafRuleConfigAppPackagePackageSigns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigAppSdkCustomSign extends $tea.Model {
  key?: string;
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

export class WafRuleConfigAppSdk extends $tea.Model {
  customSign?: WafRuleConfigAppSdkCustomSign;
  customSignStatus?: string;
  featureAbnormal?: string[];
  static names(): { [key: string]: string } {
    return {
      customSign: 'CustomSign',
      customSignStatus: 'CustomSignStatus',
      featureAbnormal: 'FeatureAbnormal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSign: WafRuleConfigAppSdkCustomSign,
      customSignStatus: 'string',
      featureAbnormal: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigManagedRulesetsManagedRules extends $tea.Model {
  action?: string;
  id?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigManagedRulesets extends $tea.Model {
  action?: string;
  attackType?: number;
  managedRules?: WafRuleConfigManagedRulesetsManagedRules[];
  numberEnabled?: number;
  numberTotal?: number;
  protectionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      attackType: 'AttackType',
      managedRules: 'ManagedRules',
      numberEnabled: 'NumberEnabled',
      numberTotal: 'NumberTotal',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      attackType: 'number',
      managedRules: { 'type': 'array', 'itemType': WafRuleConfigManagedRulesetsManagedRules },
      numberEnabled: 'number',
      numberTotal: 'number',
      protectionLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimitThresholdResponseStatus extends $tea.Model {
  code?: number;
  count?: number;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      ratio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimitThreshold extends $tea.Model {
  distinctManagedRules?: number;
  managedRulesBlocked?: number;
  request?: number;
  responseStatus?: WafRuleConfigRateLimitThresholdResponseStatus;
  traffic?: string;
  static names(): { [key: string]: string } {
    return {
      distinctManagedRules: 'DistinctManagedRules',
      managedRulesBlocked: 'ManagedRulesBlocked',
      request: 'Request',
      responseStatus: 'ResponseStatus',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctManagedRules: 'number',
      managedRulesBlocked: 'number',
      request: 'number',
      responseStatus: WafRuleConfigRateLimitThresholdResponseStatus,
      traffic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleConfigRateLimit extends $tea.Model {
  characteristics?: WafRuleMatch2;
  interval?: number;
  onHit?: boolean;
  TTL?: number;
  threshold?: WafRuleConfigRateLimitThreshold;
  static names(): { [key: string]: string } {
    return {
      characteristics: 'Characteristics',
      interval: 'Interval',
      onHit: 'OnHit',
      TTL: 'TTL',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characteristics: WafRuleMatch2,
      interval: 'number',
      onHit: 'boolean',
      TTL: 'number',
      threshold: WafRuleConfigRateLimitThreshold,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleMatch2CriteriaCriteriaCriteria extends $tea.Model {
  convertToLower?: boolean;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleMatch2CriteriaCriteria extends $tea.Model {
  convertToLower?: boolean;
  criteria?: WafRuleMatch2CriteriaCriteriaCriteria[];
  logic?: string;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2CriteriaCriteriaCriteria },
      logic: 'string',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRuleMatch2Criteria extends $tea.Model {
  convertToLower?: boolean;
  criteria?: WafRuleMatch2CriteriaCriteria[];
  logic?: string;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2CriteriaCriteria },
      logic: 'string',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsAddBotProtectionHeaders extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsAddSecurityHeaders extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsClientIpIdentifier extends $tea.Model {
  headers?: string[];
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsSecurityLevel extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimerPeriods extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimerWeeklyPeriodsDailyPeriods extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimerWeeklyPeriods extends $tea.Model {
  dailyPeriods?: WafTimerWeeklyPeriodsDailyPeriods[];
  days?: string;
  static names(): { [key: string]: string } {
    return {
      dailyPeriods: 'DailyPeriods',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyPeriods: { 'type': 'array', 'itemType': WafTimerWeeklyPeriodsDailyPeriods },
      days: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldContentValueFieldList extends $tea.Model {
  /**
   * @example
   * ClientIp
   */
  fieldName?: string;
  /**
   * @example
   * IP address of the client.
   */
  description?: string;
  descriptionCn?: string;
  /**
   * @example
   * Client
   */
  category?: string;
  /**
   * @example
   * String
   */
  dataType?: string;
  /**
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      description: 'Description',
      descriptionCn: 'DescriptionCn',
      category: 'Category',
      dataType: 'DataType',
      sortOrder: 'SortOrder',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      description: 'string',
      descriptionCn: 'string',
      category: 'string',
      dataType: 'string',
      sortOrder: 'number',
      isDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsRequestRecordListData extends $tea.Model {
  /**
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @example
   * 0
   */
  port?: number;
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * 0
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 0
   */
  usage?: number;
  /**
   * @example
   * example.com
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsRequestRecordList extends $tea.Model {
  /**
   * @example
   * web
   */
  bizName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "value":"2.2.2.2"
   * }
   */
  data?: BatchCreateRecordsRequestRecordListData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A/AAAA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      proxied: 'Proxied',
      recordName: 'RecordName',
      sourceType: 'SourceType',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsRequestRecordListData,
      proxied: 'boolean',
      recordName: 'string',
      sourceType: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListFailedData extends $tea.Model {
  /**
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @example
   * RSA
   */
  matchingType?: number;
  /**
   * @example
   * 0
   */
  port?: number;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 0
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 0
   */
  usage?: number;
  /**
   * @example
   * example.com
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListFailed extends $tea.Model {
  /**
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * {"value":"2.2.2.2"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListFailedData;
  description?: string;
  /**
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListFailedData,
      description: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListSuccessData extends $tea.Model {
  /**
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @example
   * 0
   */
  port?: number;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 0
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 0
   */
  usage?: number;
  /**
   * @example
   * example.com
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultListSuccess extends $tea.Model {
  /**
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: BatchCreateRecordsResponseBodyRecordResultListSuccessData;
  /**
   * @example
   * success
   */
  description?: string;
  /**
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      data: 'Data',
      description: 'Description',
      proxied: 'Proxied',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordType: 'RecordType',
      sourceType: 'SourceType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      data: BatchCreateRecordsResponseBodyRecordResultListSuccessData,
      description: 'string',
      proxied: 'boolean',
      recordId: 'number',
      recordName: 'string',
      recordType: 'string',
      sourceType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateRecordsResponseBodyRecordResultList extends $tea.Model {
  failed?: BatchCreateRecordsResponseBodyRecordResultListFailed[];
  success?: BatchCreateRecordsResponseBodyRecordResultListSuccess[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListFailed },
      success: { 'type': 'array', 'itemType': BatchCreateRecordsResponseBodyRecordResultListSuccess },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsRequestExpressions extends $tea.Model {
  /**
   * @example
   * ip.src eq 1.1.1.1
   */
  expression?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetExpressionFieldsResponseBodyFields extends $tea.Model {
  fields?: string[];
  /**
   * @example
   * 1
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvRequestKvList extends $tea.Model {
  /**
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordRequestAuthConf extends $tea.Model {
  /**
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @example
   * private
   */
  authType?: string;
  /**
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  secretKey?: string;
  /**
   * @example
   * v4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordRequestData extends $tea.Model {
  /**
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @example
   * 0
   */
  port?: number;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * RSA
   */
  type?: number;
  /**
   * @example
   * 1
   */
  usage?: number;
  /**
   * @example
   * example.com
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsRequestExecutions extends $tea.Model {
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sliceLen?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      sliceLen: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponseBodyFailedExecutions extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledPreloadExecutionsResponseBodySuccessExecutions extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam extends $tea.Model {
  expiredTime?: number;
  privateKey?: string;
  urlPath?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      privateKey: 'PrivateKey',
      urlPath: 'UrlPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      privateKey: 'string',
      urlPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestHttpDelivery extends $tea.Model {
  compress?: string;
  destUrl?: string;
  headerParam?: { [key: string]: HttpDeliveryHeaderParamValue };
  logBodyPrefix?: string;
  logBodySuffix?: string;
  maxBatchMB?: number;
  maxBatchSize?: number;
  maxRetry?: number;
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  standardAuthOn?: boolean;
  standardAuthParam?: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  transformTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      compress: 'Compress',
      destUrl: 'DestUrl',
      headerParam: 'HeaderParam',
      logBodyPrefix: 'LogBodyPrefix',
      logBodySuffix: 'LogBodySuffix',
      maxBatchMB: 'MaxBatchMB',
      maxBatchSize: 'MaxBatchSize',
      maxRetry: 'MaxRetry',
      queryParam: 'QueryParam',
      standardAuthOn: 'StandardAuthOn',
      standardAuthParam: 'StandardAuthParam',
      transformTimeout: 'TransformTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compress: 'string',
      destUrl: 'string',
      headerParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryHeaderParamValue },
      logBodyPrefix: 'string',
      logBodySuffix: 'string',
      maxBatchMB: 'number',
      maxBatchSize: 'number',
      maxRetry: 'number',
      queryParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryQueryParamValue },
      standardAuthOn: 'boolean',
      standardAuthParam: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam,
      transformTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestKafkaDelivery extends $tea.Model {
  balancer?: string;
  brokers?: string[];
  /**
   * @example
   * gzip
   */
  compress?: string;
  machanismType?: string;
  password?: string;
  topic?: string;
  userAuth?: boolean;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      balancer: 'Balancer',
      brokers: 'Brokers',
      compress: 'Compress',
      machanismType: 'MachanismType',
      password: 'Password',
      topic: 'Topic',
      userAuth: 'UserAuth',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balancer: 'string',
      brokers: { 'type': 'array', 'itemType': 'string' },
      compress: 'string',
      machanismType: 'string',
      password: 'string',
      topic: 'string',
      userAuth: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestOssDelivery extends $tea.Model {
  aliuid?: string;
  bucketName?: string;
  /**
   * @example
   * logriver-test/log
   */
  prefixPath?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      bucketName: 'BucketName',
      prefixPath: 'PrefixPath',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      bucketName: 'string',
      prefixPath: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestS3Delivery extends $tea.Model {
  accessKey?: string;
  bucketPath?: string;
  endpoint?: string;
  prefixPath?: string;
  region?: string;
  s3Cmpt?: boolean;
  secretKey?: string;
  serverSideEncryption?: boolean;
  vertifyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucketPath: 'BucketPath',
      endpoint: 'Endpoint',
      prefixPath: 'PrefixPath',
      region: 'Region',
      s3Cmpt: 'S3Cmpt',
      secretKey: 'SecretKey',
      serverSideEncryption: 'ServerSideEncryption',
      vertifyType: 'VertifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      prefixPath: 'string',
      region: 'string',
      s3Cmpt: 'boolean',
      secretKey: 'string',
      serverSideEncryption: 'boolean',
      vertifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestSlsDelivery extends $tea.Model {
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam extends $tea.Model {
  expiredTime?: number;
  privateKey?: string;
  urlPath?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      privateKey: 'PrivateKey',
      urlPath: 'UrlPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      privateKey: 'string',
      urlPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestHttpDelivery extends $tea.Model {
  compress?: string;
  destUrl?: string;
  headerParam?: { [key: string]: HttpDeliveryHeaderParamValue };
  lastLogSplit?: string;
  logBodyPrefix?: string;
  logBodySuffix?: string;
  logSplit?: string;
  logSplitWords?: string;
  maxBackoffMS?: number;
  maxBatchMB?: number;
  maxBatchSize?: number;
  maxRetry?: number;
  minBackoffMS?: number;
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  responseBodyKey?: string;
  standardAuthOn?: boolean;
  standardAuthParam?: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  successCode?: number;
  transformTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      compress: 'Compress',
      destUrl: 'DestUrl',
      headerParam: 'HeaderParam',
      lastLogSplit: 'LastLogSplit',
      logBodyPrefix: 'LogBodyPrefix',
      logBodySuffix: 'LogBodySuffix',
      logSplit: 'LogSplit',
      logSplitWords: 'LogSplitWords',
      maxBackoffMS: 'MaxBackoffMS',
      maxBatchMB: 'MaxBatchMB',
      maxBatchSize: 'MaxBatchSize',
      maxRetry: 'MaxRetry',
      minBackoffMS: 'MinBackoffMS',
      queryParam: 'QueryParam',
      responseBodyKey: 'ResponseBodyKey',
      standardAuthOn: 'StandardAuthOn',
      standardAuthParam: 'StandardAuthParam',
      successCode: 'SuccessCode',
      transformTimeout: 'TransformTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compress: 'string',
      destUrl: 'string',
      headerParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryHeaderParamValue },
      lastLogSplit: 'string',
      logBodyPrefix: 'string',
      logBodySuffix: 'string',
      logSplit: 'string',
      logSplitWords: 'string',
      maxBackoffMS: 'number',
      maxBatchMB: 'number',
      maxBatchSize: 'number',
      maxRetry: 'number',
      minBackoffMS: 'number',
      queryParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryQueryParamValue },
      responseBodyKey: 'string',
      standardAuthOn: 'boolean',
      standardAuthParam: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam,
      successCode: 'number',
      transformTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestKafkaDelivery extends $tea.Model {
  balancer?: string;
  brokers?: string[];
  /**
   * @example
   * gzip
   */
  compress?: string;
  machanismType?: string;
  password?: string;
  topic?: string;
  userAuth?: boolean;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      balancer: 'Balancer',
      brokers: 'Brokers',
      compress: 'Compress',
      machanismType: 'MachanismType',
      password: 'Password',
      topic: 'Topic',
      userAuth: 'UserAuth',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balancer: 'string',
      brokers: { 'type': 'array', 'itemType': 'string' },
      compress: 'string',
      machanismType: 'string',
      password: 'string',
      topic: 'string',
      userAuth: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestOssDelivery extends $tea.Model {
  aliuid?: string;
  bucketName?: string;
  /**
   * @example
   * logriver-test/log
   */
  prefixPath?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      bucketName: 'BucketName',
      prefixPath: 'PrefixPath',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      bucketName: 'string',
      prefixPath: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestS3Delivery extends $tea.Model {
  accessKey?: string;
  bucketPath?: string;
  endpoint?: string;
  prefixPath?: string;
  region?: string;
  s3Cmpt?: boolean;
  secretKey?: string;
  serverSideEncryption?: boolean;
  vertifyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucketPath: 'BucketPath',
      endpoint: 'Endpoint',
      prefixPath: 'PrefixPath',
      region: 'Region',
      s3Cmpt: 'S3Cmpt',
      secretKey: 'SecretKey',
      serverSideEncryption: 'ServerSideEncryption',
      vertifyType: 'VertifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      prefixPath: 'string',
      region: 'string',
      s3Cmpt: 'boolean',
      secretKey: 'string',
      serverSideEncryption: 'boolean',
      vertifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserDeliveryTaskRequestSlsDelivery extends $tea.Model {
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWaitingRoomRequestHostNameAndPath extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.
   */
  subdomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      path: 'Path',
      subdomain: 'Subdomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      path: 'string',
      subdomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesResponseBodyDataModule extends $tea.Model {
  /**
   * @example
   * 2023-03-06T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  objects?: string[];
  /**
   * @example
   * 1234****
   */
  policyId?: number;
  /**
   * @example
   * 2023-03-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Expired
   */
  status?: string;
  /**
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      startTime: 'string',
      status: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSAllEventListResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * 800
   */
  bps?: number;
  /**
   * @example
   * 50
   */
  cps?: number;
  /**
   * @example
   * 2023-02-12T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * web-cc_1
   */
  eventId?: string;
  /**
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @example
   * 12000
   */
  pps?: number;
  /**
   * @example
   * 7692
   */
  qps?: number;
  /**
   * @example
   * 2023-02-12T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * example.com
   */
  target?: string;
  /**
   * @example
   * 000000000155****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventType: 'EventType',
      pps: 'Pps',
      qps: 'Qps',
      startTime: 'StartTime',
      target: 'Target',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      endTime: 'string',
      eventId: 'string',
      eventType: 'string',
      pps: 'number',
      qps: 'number',
      startTime: 'string',
      target: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPRangeListResponseBodyContent extends $tea.Model {
  /**
   * @example
   * 172.16.0.0/12
   */
  cidr?: string;
  /**
   * @example
   * IPv4
   */
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipType: 'IpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadTasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * http://a.com/1.jpg?b=2
   */
  content?: string;
  /**
   * @example
   * 2023-03-28 14:28:57
   */
  createTime?: string;
  /**
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @example
   * 100%
   */
  process?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  /**
   * @example
   * 1597854579687428
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      description: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurgeTasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * http://a.com/1.jpg?b=1
   */
  content?: string;
  /**
   * @example
   * 2023-07-26T01:56:15Z
   */
  createTime?: string;
  /**
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @example
   * 100%
   */
  process?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  /**
   * @example
   * 16346513304
   */
  taskId?: string;
  /**
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      description: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKvAccountResponseBodyNamespaceList extends $tea.Model {
  /**
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @example
   * 1 GB
   */
  capacityString?: string;
  /**
   * @example
   * 100048576
   */
  capacityUsed?: number;
  /**
   * @example
   * 100 MB
   */
  capacityUsedString?: string;
  /**
   * @example
   * the first namespace
   */
  description?: string;
  /**
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @example
   * 643355322374688768
   */
  namespaceId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      capacityString: 'CapacityString',
      capacityUsed: 'CapacityUsed',
      capacityUsedString: 'CapacityUsedString',
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      capacityString: 'string',
      capacityUsed: 'number',
      capacityUsedString: 'string',
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyRecordModelAuthConf extends $tea.Model {
  /**
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @example
   * public
   */
  authType?: string;
  /**
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @example
   * v2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyRecordModelData extends $tea.Model {
  /**
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @example
   * 8707
   */
  port?: number;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * RSA
   */
  type?: number;
  /**
   * @example
   * 0
   */
  usage?: number;
  /**
   * @example
   * example.com
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordResponseBodyRecordModel extends $tea.Model {
  authConf?: GetRecordResponseBodyRecordModelAuthConf;
  /**
   * @example
   * image_video
   */
  bizName?: string;
  comment?: string;
  /**
   * @example
   * 2023-03-10T13:30:39Z
   */
  createTime?: string;
  /**
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: GetRecordResponseBodyRecordModelData;
  hostPolicy?: string;
  /**
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @example
   * 2023-01-27T02:26:22Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      createTime: 'CreateTime',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordCname: 'RecordCname',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordSourceType: 'RecordSourceType',
      recordType: 'RecordType',
      siteId: 'SiteId',
      siteName: 'SiteName',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: GetRecordResponseBodyRecordModelAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: GetRecordResponseBodyRecordModelData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordCname: 'string',
      recordId: 'number',
      recordName: 'string',
      recordSourceType: 'string',
      recordType: 'string',
      siteId: 'number',
      siteName: 'string',
      ttl: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteResponseBodySiteModel extends $tea.Model {
  /**
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * cas-merge-q6h0bv
   */
  instanceId?: string;
  /**
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  /**
   * @example
   * plan-168777532****
   */
  planName?: string;
  /**
   * @example
   * normal
   */
  planSpecName?: string;
  /**
   * @example
   * rg-aek26g6i6se****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * pending
   */
  status?: string;
  /**
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  vanityNSList?: { [key: string]: string };
  /**
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  /**
   * @example
   * true
   */
  versionManagement?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      cnameZone: 'CnameZone',
      coverage: 'Coverage',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nameServerList: 'NameServerList',
      planName: 'PlanName',
      planSpecName: 'PlanSpecName',
      resourceGroupId: 'ResourceGroupId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      vanityNSList: 'VanityNSList',
      verifyCode: 'VerifyCode',
      versionManagement: 'VersionManagement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      cnameZone: 'string',
      coverage: 'string',
      createTime: 'string',
      instanceId: 'string',
      nameServerList: 'string',
      planName: 'string',
      planSpecName: 'string',
      resourceGroupId: 'string',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
      vanityNSList: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      verifyCode: 'string',
      versionManagement: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteCustomLogResponseBodyLogCustomField extends $tea.Model {
  cookies?: string[];
  requestHeaders?: string[];
  responseHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      cookies: 'Cookies',
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookies: { 'type': 'array', 'itemType': 'string' },
      requestHeaders: { 'type': 'array', 'itemType': 'string' },
      responseHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsLogicsValidator extends $tea.Model {
  /**
   * @example
   * Enter a valid expression
   */
  errMsg?: string;
  length?: WafQuotaInteger;
  /**
   * @example
   * ^example$
   */
  pattern?: string;
  range?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      length: 'Length',
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      length: WafQuotaInteger,
      pattern: 'string',
      range: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsLogics extends $tea.Model {
  /**
   * @example
   * 1
   */
  attributes?: number;
  /**
   * @example
   * input:single
   */
  kind?: string;
  negative?: boolean;
  /**
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @example
   * string
   */
  type?: string;
  validator?: GetWafFilterResponseBodyFilterFieldsLogicsValidator;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      kind: 'Kind',
      negative: 'Negative',
      operator: 'Operator',
      symbol: 'Symbol',
      tip: 'Tip',
      type: 'Type',
      validator: 'Validator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'number',
      kind: 'string',
      negative: 'boolean',
      operator: 'string',
      symbol: 'string',
      tip: 'string',
      type: 'string',
      validator: GetWafFilterResponseBodyFilterFieldsLogicsValidator,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsSelectorData extends $tea.Model {
  /**
   * @example
   * China
   */
  label?: string;
  /**
   * @example
   * CN
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsSelector extends $tea.Model {
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
   * @example
   * data
   */
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsSelectorData },
      kind: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFields extends $tea.Model {
  /**
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @example
   * Header
   */
  label?: string;
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  sub?: boolean;
  /**
   * @example
   * e.g. Content-Type
   */
  subTip?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      label: 'Label',
      logics: 'Logics',
      selector: 'Selector',
      sub: 'Sub',
      subTip: 'SubTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      logics: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsLogics },
      selector: GetWafFilterResponseBodyFilterFieldsSelector,
      sub: 'boolean',
      subTip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilter extends $tea.Model {
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @example
   * http_custom_cc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      phase: 'Phase',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFields },
      phase: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaList extends $tea.Model {
  enable?: boolean;
  items?: { [key: string]: QuotaListItemsValue };
  numberItemsPerList?: WafQuotaInteger;
  numberItemsTotal?: WafQuotaInteger;
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      items: 'Items',
      numberItemsPerList: 'NumberItemsPerList',
      numberItemsTotal: 'NumberItemsTotal',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      items: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaListItemsValue },
      numberItemsPerList: WafQuotaInteger,
      numberItemsTotal: WafQuotaInteger,
      numberTotal: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaManagedRulesGroup extends $tea.Model {
  enable?: boolean;
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaPage extends $tea.Model {
  contentTypes?: { [key: string]: QuotaPageContentTypesValue };
  enable?: boolean;
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      contentTypes: 'ContentTypes',
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypes: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaPageContentTypesValue },
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaScenePolicy extends $tea.Model {
  enable?: boolean;
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuota extends $tea.Model {
  list?: GetWafQuotaResponseBodyQuotaList;
  managedRulesGroup?: GetWafQuotaResponseBodyQuotaManagedRulesGroup;
  page?: GetWafQuotaResponseBodyQuotaPage;
  scenePolicy?: GetWafQuotaResponseBodyQuotaScenePolicy;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      managedRulesGroup: 'ManagedRulesGroup',
      page: 'Page',
      scenePolicy: 'ScenePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetWafQuotaResponseBodyQuotaList,
      managedRulesGroup: GetWafQuotaResponseBodyQuotaManagedRulesGroup,
      page: GetWafQuotaResponseBodyQuotaPage,
      scenePolicy: GetWafQuotaResponseBodyQuotaScenePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCacheReserveInstancesResponseBodyInstanceInfo extends $tea.Model {
  cacheReserveCapacity?: string;
  cacheReserveRegion?: string;
  createTime?: string;
  duration?: number;
  expireTime?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cacheReserveCapacity: 'CacheReserveCapacity',
      cacheReserveRegion: 'CacheReserveRegion',
      createTime: 'CreateTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveCapacity: 'string',
      cacheReserveRegion: 'string',
      createTime: 'string',
      duration: 'number',
      expireTime: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificatesResponseBodyResult extends $tea.Model {
  /**
   * @example
   * baba39055622c008b90285a8838ed09a
   */
  CACertificateId?: string;
  /**
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @example
   * 2024-06-24 07:48:51
   */
  createTime?: string;
  /**
   * @example
   * babab9db65ee5efcca9f3d41d4b50d66
   */
  id?: string;
  /**
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @example
   * 2023-03-31 02:08:00
   */
  notBefore?: string;
  /**
   * @example
   * RSA
   */
  pubkeyAlgorithm?: string;
  /**
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
  /**
   * @example
   * SHA256-RSA
   */
  signatureAlgorithm?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * dcdn
   */
  type?: string;
  /**
   * @example
   * 2024-07-20 06:18:42
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubkeyAlgorithm: 'PubkeyAlgorithm',
      SAN: 'SAN',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      commonName: 'string',
      createTime: 'string',
      id: 'string',
      issuer: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubkeyAlgorithm: 'string',
      SAN: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppRecordsResponseBodyRecords extends $tea.Model {
  /**
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @example
   * kdxceo****.yun****.com
   */
  cname?: string;
  /**
   * @example
   * 27522948436****
   */
  configId?: number;
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * 266****
   */
  recordId?: number;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * 123456
   */
  schemdId?: number;
  /**
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @example
   * 2021-12-22T08:32:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cname: 'Cname',
      configId: 'ConfigId',
      createTime: 'CreateTime',
      recordId: 'RecordId',
      recordName: 'RecordName',
      schemdId: 'SchemdId',
      siteId: 'SiteId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cname: 'string',
      configId: 'number',
      createTime: 'string',
      recordId: 'number',
      recordName: 'string',
      schemdId: 'number',
      siteId: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppsResponseBodyAppsHealthCheck extends $tea.Model {
  /**
   * @example
   * 5
   */
  failTimes?: number;
  /**
   * @example
   * test.com
   */
  host?: string;
  /**
   * @example
   * http_2XX
   */
  httpCode?: string;
  /**
   * @example
   * 5
   */
  interval?: number;
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 1
   */
  succTimes?: number;
  /**
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @example
   * l7
   */
  type?: string;
  /**
   * @example
   * /health_check
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      failTimes: 'FailTimes',
      host: 'Host',
      httpCode: 'HttpCode',
      interval: 'Interval',
      method: 'Method',
      port: 'Port',
      succTimes: 'SuccTimes',
      timeout: 'Timeout',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failTimes: 'number',
      host: 'string',
      httpCode: 'string',
      interval: 'number',
      method: 'string',
      port: 'number',
      succTimes: 'number',
      timeout: 'number',
      type: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppsResponseBodyApps extends $tea.Model {
  /**
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @example
   * 2022-12-01T16:16:27.418298794+08:00
   */
  createTime?: string;
  /**
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @example
   * l7
   */
  gatewayType?: string;
  healthCheck?: ListEdgeContainerAppsResponseBodyAppsHealthCheck;
  /**
   * @example
   * app-test
   */
  name?: string;
  percentage?: number;
  /**
   * @example
   * false
   */
  quicCid?: string;
  /**
   * @example
   * test app
   */
  remarks?: string;
  /**
   * @example
   * 80
   */
  servicePort?: number;
  /**
   * @example
   * created
   */
  status?: string;
  /**
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @example
   * 2023-11-15T12:11:02Z
   */
  updateTime?: string;
  /**
   * @example
   * 10
   */
  versionCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      gatewayType: 'GatewayType',
      healthCheck: 'HealthCheck',
      name: 'Name',
      percentage: 'Percentage',
      quicCid: 'QuicCid',
      remarks: 'Remarks',
      servicePort: 'ServicePort',
      status: 'Status',
      targetPort: 'TargetPort',
      updateTime: 'UpdateTime',
      versionCount: 'VersionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      domainName: 'string',
      gatewayType: 'string',
      healthCheck: ListEdgeContainerAppsResponseBodyAppsHealthCheck,
      name: 'string',
      percentage: 'number',
      quicCid: 'string',
      remarks: 'string',
      servicePort: 'number',
      status: 'string',
      targetPort: 'number',
      updateTime: 'string',
      versionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerRecordsResponseBodyRecords extends $tea.Model {
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 2021-12-22T08:32:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      recordCname: 'RecordCname',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      recordCname: 'string',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutinePlansResponseBodyPlanInfo extends $tea.Model {
  /**
   * @example
   * POSTPAY
   */
  billingMode?: string;
  /**
   * @example
   * 20
   */
  erRoutineCodeVersionQuota?: string;
  /**
   * @example
   * 100
   */
  erRoutineQuota?: string;
  /**
   * @example
   * 100
   */
  erRoutineRouteSiteCountQuota?: string;
  /**
   * @example
   * er_free
   */
  paymentMethod?: string;
  /**
   * @example
   * test_plan
   */
  planName?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'BillingMode',
      erRoutineCodeVersionQuota: 'ErRoutineCodeVersionQuota',
      erRoutineQuota: 'ErRoutineQuota',
      erRoutineRouteSiteCountQuota: 'ErRoutineRouteSiteCountQuota',
      paymentMethod: 'PaymentMethod',
      planName: 'PlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      erRoutineCodeVersionQuota: 'string',
      erRoutineQuota: 'string',
      erRoutineRouteSiteCountQuota: 'string',
      paymentMethod: 'string',
      planName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutineRecordsResponseBodyRecords extends $tea.Model {
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 2023-12-22T08:32:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      recordCname: 'RecordCname',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      recordCname: 'string',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasResponseBodyQuotas extends $tea.Model {
  /**
   * @example
   * customHttpCert
   */
  quotaName?: string;
  /**
   * @example
   * 10
   */
  quotaValue?: string;
  /**
   * @example
   * bool
   */
  quotaValueType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      quotaValueType: 'QuotaValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      quotaValueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage extends $tea.Model {
  /**
   * @example
   * 34818329392****
   */
  siteId?: number;
  /**
   * @example
   * test.top
   */
  siteName?: string;
  /**
   * @example
   * 1
   */
  siteUsage?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteUsage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasWithUsageResponseBodyQuotas extends $tea.Model {
  /**
   * @example
   * redirect_rules|rule_quota
   */
  quotaName?: string;
  /**
   * @example
   * 10
   */
  quotaValue?: string;
  siteUsage?: ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage[];
  /**
   * @example
   * 3
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      siteUsage: 'SiteUsage',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      siteUsage: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage },
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKvsResponseBodyKeys extends $tea.Model {
  /**
   * @example
   * Key1
   */
  name?: string;
  /**
   * @example
   * 2021-12-13T07:46:03Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsRequestQueryArgs extends $tea.Model {
  desc?: boolean;
  /**
   * @example
   * a custom list
   */
  descriptionLike?: string;
  /**
   * @example
   * 40000001
   */
  idLike?: string;
  /**
   * @example
   * 10.1.1.1
   */
  itemLike?: string;
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @example
   * 10.1.1.1
   */
  nameItemLike?: string;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      descriptionLike: 'DescriptionLike',
      idLike: 'IdLike',
      itemLike: 'ItemLike',
      kind: 'Kind',
      nameItemLike: 'NameItemLike',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'boolean',
      descriptionLike: 'string',
      idLike: 'string',
      itemLike: 'string',
      kind: 'string',
      nameItemLike: 'string',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsResponseBodyLists extends $tea.Model {
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @example
   * 100
   */
  length?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      length: 'Length',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      kind: 'string',
      length: 'number',
      name: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerRegionsResponseBodyRegionsSubRegions extends $tea.Model {
  subRegionCnName?: string;
  /**
   * @example
   * ID
   */
  subRegionCode?: string;
  /**
   * @example
   * Indonesia
   */
  subRegionEnName?: string;
  static names(): { [key: string]: string } {
    return {
      subRegionCnName: 'SubRegionCnName',
      subRegionCode: 'SubRegionCode',
      subRegionEnName: 'SubRegionEnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subRegionCnName: 'string',
      subRegionCode: 'string',
      subRegionEnName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancerRegionsResponseBodyRegions extends $tea.Model {
  regionCnName?: string;
  /**
   * @example
   * SEAS
   */
  regionCode?: string;
  /**
   * @example
   * South East Asia
   */
  regionEnName?: string;
  subRegions?: ListLoadBalancerRegionsResponseBodyRegionsSubRegions[];
  static names(): { [key: string]: string } {
    return {
      regionCnName: 'RegionCnName',
      regionCode: 'RegionCode',
      regionEnName: 'RegionEnName',
      subRegions: 'SubRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionCnName: 'string',
      regionCode: 'string',
      regionEnName: 'string',
      subRegions: { 'type': 'array', 'itemType': ListLoadBalancerRegionsResponseBodyRegionsSubRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesGroupsResponseBodyManagedRulesGroups extends $tea.Model {
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 1000
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBodyPages extends $tea.Model {
  /**
   * @remarks
   * 自定义响应页面内容BASE64编码
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @example
   * custom
   */
  kind?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      kind: 'string',
      name: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecordsAuthConf extends $tea.Model {
  /**
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @example
   * private
   */
  authType?: string;
  /**
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @example
   * v4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecordsData extends $tea.Model {
  /**
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @example
   * 128
   */
  flag?: number;
  /**
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * 0
   */
  selector?: number;
  /**
   * @example
   * issue
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 0
   */
  usage?: number;
  /**
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecordsResponseBodyRecords extends $tea.Model {
  authConf?: ListRecordsResponseBodyRecordsAuthConf;
  /**
   * @example
   * web
   */
  bizName?: string;
  /**
   * @example
   * this is a remark.
   */
  comment?: string;
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * {"value":"1.1.1.1"}
   */
  data?: ListRecordsResponseBodyRecordsData;
  hostPolicy?: string;
  /**
   * @example
   * true
   */
  proxied?: boolean;
  /**
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @example
   * OSS
   */
  recordSourceType?: string;
  /**
   * @example
   * A/AAAA
   */
  recordType?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * 30
   */
  ttl?: number;
  /**
   * @example
   * 2023-06-07T10:02:59Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authConf: 'AuthConf',
      bizName: 'BizName',
      comment: 'Comment',
      createTime: 'CreateTime',
      data: 'Data',
      hostPolicy: 'HostPolicy',
      proxied: 'Proxied',
      recordCname: 'RecordCname',
      recordId: 'RecordId',
      recordName: 'RecordName',
      recordSourceType: 'RecordSourceType',
      recordType: 'RecordType',
      siteId: 'SiteId',
      siteName: 'SiteName',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConf: ListRecordsResponseBodyRecordsAuthConf,
      bizName: 'string',
      comment: 'string',
      createTime: 'string',
      data: ListRecordsResponseBodyRecordsData,
      hostPolicy: 'string',
      proxied: 'boolean',
      recordCname: 'string',
      recordId: 'number',
      recordName: 'string',
      recordSourceType: 'string',
      recordType: 'string',
      siteId: 'number',
      siteName: 'string',
      ttl: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadExecutionsResponseBodyExecutions extends $tea.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadJobsResponseBodyJobs extends $tea.Model {
  aliUid?: string;
  createdAt?: string;
  domains?: string;
  errorInfo?: string;
  failedFileOss?: string;
  fileId?: string;
  id?: string;
  insertWay?: string;
  name?: string;
  siteId?: number;
  taskSubmitted?: number;
  taskType?: string;
  urlCount?: number;
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteDeliveryTasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesRequestTagFilter extends $tea.Model {
  /**
   * @example
   * tag1
   */
  key?: string;
  /**
   * @example
   * aaa
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

export class ListSitesResponseBodySites extends $tea.Model {
  /**
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @example
   * example.cname.com
   */
  cnameZone?: string;
  /**
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @example
   * onBvtlmIyeXLbiDw81F9
   */
  instanceId?: string;
  /**
   * @example
   * male1-1.ialicdn.com,female1-1.ialicdn.com
   */
  nameServerList?: string;
  /**
   * @example
   * plan-168656498****
   */
  planName?: string;
  /**
   * @example
   * normal
   */
  planSpecName?: string;
  /**
   * @example
   * rg-aek26g6i6se6pna
   */
  resourceGroupId?: string;
  /**
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * pending
   */
  status?: string;
  /**
   * @example
   * {"tag1":"value1"}
   */
  tags?: { [key: string]: any };
  /**
   * @example
   * 2023-12-24T02:01:11Z
   */
  updateTime?: string;
  /**
   * @example
   * verify_d516cb3740f81f0cef77d162edd1****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      cnameZone: 'CnameZone',
      coverage: 'Coverage',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nameServerList: 'NameServerList',
      planName: 'PlanName',
      planSpecName: 'PlanSpecName',
      resourceGroupId: 'ResourceGroupId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      cnameZone: 'string',
      coverage: 'string',
      createTime: 'string',
      instanceId: 'string',
      nameServerList: 'string',
      planName: 'string',
      planSpecName: 'string',
      resourceGroupId: 'string',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   * 
   * @example
   * value
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @example
   * example.com
   */
  resourceId?: string;
  /**
   * @example
   * site
   */
  resourceType?: string;
  /**
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * 2023-07-26T01:56:15Z
   */
  createTime?: string;
  /**
   * @example
   * invalid url
   */
  description?: string;
  /**
   * @example
   * InvalidUrl,InvalidDomain
   */
  errorCode?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  /**
   * @example
   * file
   */
  type?: string;
  /**
   * @example
   * 159253299357****
   */
  uploadId?: string;
  /**
   * @example
   * purge_file_task
   */
  uploadTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      errorCode: 'ErrorCode',
      status: 'Status',
      type: 'Type',
      uploadId: 'UploadId',
      uploadTaskName: 'UploadTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      errorCode: 'string',
      status: 'string',
      type: 'string',
      uploadId: 'string',
      uploadTaskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDeliveryTasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @example
   * oss
   */
  deliveryType?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * testoss11
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $tea.Model {
  /**
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @example
   * pending
   */
  siteStatus?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteStatus: 'SiteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRatePlanInstancesResponseBodyInstanceInfo extends $tea.Model {
  /**
   * @example
   * PREPAY
   */
  billingMode?: string;
  /**
   * @example
   * domestic,overseas
   */
  coverages?: string;
  /**
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @example
   * YYYY-MM-DDThh:mm:ssZ
   */
  expireTime?: string;
  /**
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @example
   * basic
   */
  planName?: string;
  /**
   * @example
   * normal
   */
  planType?: string;
  /**
   * @example
   * 1
   */
  siteQuota?: string;
  sites?: ListUserRatePlanInstancesResponseBodyInstanceInfoSites[];
  /**
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'BillingMode',
      coverages: 'Coverages',
      createTime: 'CreateTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      planName: 'PlanName',
      planType: 'PlanType',
      siteQuota: 'SiteQuota',
      sites: 'Sites',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      coverages: 'string',
      createTime: 'string',
      duration: 'number',
      expireTime: 'string',
      instanceId: 'string',
      planName: 'string',
      planType: 'string',
      siteQuota: 'string',
      sites: { 'type': 'array', 'itemType': ListUserRatePlanInstancesResponseBodyInstanceInfoSites },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesRequestQueryArgs extends $tea.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  /**
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @example
   * 1
   */
  protectionLevel?: number;
  protectionLevels?: number[];
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      idNameLike: 'IdNameLike',
      protectionLevel: 'ProtectionLevel',
      protectionLevels: 'ProtectionLevels',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      idNameLike: 'string',
      protectionLevel: 'number',
      protectionLevels: { 'type': 'array', 'itemType': 'number' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesResponseBodyRules extends $tea.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  /**
   * @example
   * 100001
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      name: 'Name',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      name: 'string',
      protectionLevel: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafPhasesResponseBodyPhasesRulesets extends $tea.Model {
  id?: number;
  name?: string;
  rules?: WafRuleConfig[];
  shared?: WafBatchRuleShared;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rules: 'Rules',
      shared: 'Shared',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafPhasesResponseBodyPhases extends $tea.Model {
  phase?: string;
  rulesets?: ListWafPhasesResponseBodyPhasesRulesets[];
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      rulesets: 'Rulesets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      rulesets: { 'type': 'array', 'itemType': ListWafPhasesResponseBodyPhasesRulesets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesRequestQueryArgs extends $tea.Model {
  desc?: boolean;
  /**
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @example
   * position
   */
  orderBy?: string;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      id: 'Id',
      idNameLike: 'IdNameLike',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
      rulesetId: 'RulesetId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'boolean',
      id: 'number',
      idNameLike: 'string',
      nameLike: 'string',
      orderBy: 'string',
      rulesetId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesResponseBodyRules extends $tea.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  characteristicsFields?: string[];
  config?: WafRuleConfig;
  fields?: string[];
  /**
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @example
   * part
   */
  skip?: string;
  /**
   * @example
   * on
   */
  status?: string;
  tags?: string[];
  timer?: WafTimer;
  /**
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      characteristicsFields: 'CharacteristicsFields',
      config: 'Config',
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      rulesetId: 'RulesetId',
      skip: 'Skip',
      status: 'Status',
      tags: 'Tags',
      timer: 'Timer',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      characteristicsFields: { 'type': 'array', 'itemType': 'string' },
      config: WafRuleConfig,
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      rulesetId: 'number',
      skip: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      timer: WafTimer,
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsRequestQueryArgs extends $tea.Model {
  /**
   * @example
   * example
   */
  anyLike?: string;
  desc?: boolean;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      anyLike: 'AnyLike',
      desc: 'Desc',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyLike: 'string',
      desc: 'boolean',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsResponseBodyRulesets extends $tea.Model {
  fields?: string[];
  /**
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * web
   */
  target?: string;
  types?: string[];
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      target: 'Target',
      types: 'Types',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      status: 'string',
      target: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesRequestQueryArgs extends $tea.Model {
  /**
   * @example
   * http_directory_traversal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesResponseBodyRules extends $tea.Model {
  config?: WafRuleConfig;
  /**
   * @example
   * HTTP Directory Traversal Rule [Template]
   */
  name?: string;
  /**
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * http_directory_traversal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      name: 'string',
      phase: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafUsageOfRulesResponseBodySites extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * example.com
   */
  name?: string;
  /**
   * @example
   * 1
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomEventsResponseBodyWaitingRoomEvents extends $tea.Model {
  /**
   * @example
   * html-yets-maqi1111
   */
  customPageHtml?: string;
  /**
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @example
   * off
   */
  disableSessionRenewalEnable?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  /**
   * @example
   * 1719814497
   */
  endTime?: string;
  /**
   * @example
   * off
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * zhcn
   */
  language?: string;
  name?: string;
  /**
   * @example
   * 11
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @example
   * 1719814097
   */
  preQueueStartTime?: string;
  /**
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @example
   * 3
   */
  sessionDuration?: string;
  /**
   * @example
   * 1719814398
   */
  startTime?: string;
  /**
   * @example
   * 22
   */
  totalActiveUsers?: string;
  /**
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @example
   * 5c938a045c9ca46607163d34966****
   */
  waitingRoomId?: string;
  /**
   * @example
   * custom
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      preQueueEnable: 'PreQueueEnable',
      preQueueStartTime: 'PreQueueStartTime',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      randomPreQueueEnable: 'RandomPreQueueEnable',
      sessionDuration: 'SessionDuration',
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomEventId: 'WaitingRoomEventId',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      endTime: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      preQueueEnable: 'string',
      preQueueStartTime: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      randomPreQueueEnable: 'string',
      sessionDuration: 'string',
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomEventId: 'number',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomRulesResponseBodyWaitingRoomRules extends $tea.Model {
  /**
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @example
   * ip
   */
  ruleName?: string;
  /**
   * @example
   * 37286782688****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      waitingRoomRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath extends $tea.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @example
   * test.
   */
  subdomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      path: 'Path',
      subdomain: 'Subdomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      path: 'string',
      subdomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomsResponseBodyWaitingRooms extends $tea.Model {
  /**
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  customPageHtml?: string;
  description?: string;
  /**
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  hostNameAndPath?: ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath[];
  /**
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @example
   * zhcn
   */
  language?: string;
  name?: string;
  /**
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @example
   * random
   */
  queuingMethod?: string;
  /**
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @example
   * 3600
   */
  sessionDuration?: string;
  /**
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @example
   * 6a51d5bc6460887abd1291dc7d4d****
   */
  waitingRoomId?: string;
  /**
   * @example
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPath: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPath: { 'type': 'array', 'itemType': ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath },
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      totalActiveUsers: 'string',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeCachesRequestContent extends $tea.Model {
  cacheTags?: string[];
  directories?: string[];
  files?: any[];
  hostnames?: string[];
  ignoreParams?: string[];
  /**
   * @example
   * true
   */
  purgeAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheTags: 'CacheTags',
      directories: 'Directories',
      files: 'Files',
      hostnames: 'Hostnames',
      ignoreParams: 'IgnoreParams',
      purgeAll: 'PurgeAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTags: { 'type': 'array', 'itemType': 'string' },
      directories: { 'type': 'array', 'itemType': 'string' },
      files: { 'type': 'array', 'itemType': 'any' },
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ignoreParams: { 'type': 'array', 'itemType': 'string' },
      purgeAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRequestAuthConf extends $tea.Model {
  accessKey?: string;
  authType?: string;
  region?: string;
  secretKey?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRequestData extends $tea.Model {
  algorithm?: number;
  certificate?: string;
  fingerprint?: string;
  flag?: number;
  keyTag?: number;
  matchingType?: number;
  port?: number;
  priority?: number;
  selector?: number;
  tag?: string;
  type?: number;
  usage?: number;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomRequestHostNameAndPath extends $tea.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @example
   * test.
   */
  subdomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      path: 'Path',
      subdomain: 'Subdomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      path: 'string',
      subdomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("esa", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 激活客户端证书
   * 
   * @param request - ActivateClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateClientCertificateResponse
   */
  async activateClientCertificateWithOptions(request: ActivateClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ActivateClientCertificateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateClientCertificateResponse>(await this.callApi(params, req, runtime), new ActivateClientCertificateResponse({}));
  }

  /**
   * 激活客户端证书
   * 
   * @param request - ActivateClientCertificateRequest
   * @returns ActivateClientCertificateResponse
   */
  async activateClientCertificate(request: ActivateClientCertificateRequest): Promise<ActivateClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateClientCertificateWithOptions(request, runtime);
  }

  /**
   * 创建记录
   * 
   * @param tmpReq - BatchCreateRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateRecordsResponse
   */
  async batchCreateRecordsWithOptions(tmpReq: BatchCreateRecordsRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateRecordsResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchCreateRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.recordList)) {
      request.recordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordList, "RecordList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.recordListShrink)) {
      query["RecordList"] = request.recordListShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateRecordsResponse>(await this.callApi(params, req, runtime), new BatchCreateRecordsResponse({}));
  }

  /**
   * 创建记录
   * 
   * @param request - BatchCreateRecordsRequest
   * @returns BatchCreateRecordsResponse
   */
  async batchCreateRecords(request: BatchCreateRecordsRequest): Promise<BatchCreateRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateRecordsWithOptions(request, runtime);
  }

  /**
   * 批量创建WAF规则
   * 
   * @param tmpReq - BatchCreateWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateWafRulesResponse
   */
  async batchCreateWafRulesWithOptions(tmpReq: BatchCreateWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateWafRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchCreateWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    if (!Util.isUnset(tmpReq.shared)) {
      request.sharedShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shared, "Shared", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.sharedShrink)) {
      body["Shared"] = request.sharedShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateWafRulesResponse>(await this.callApi(params, req, runtime), new BatchCreateWafRulesResponse({}));
  }

  /**
   * 批量创建WAF规则
   * 
   * @param request - BatchCreateWafRulesRequest
   * @returns BatchCreateWafRulesResponse
   */
  async batchCreateWafRules(request: BatchCreateWafRulesRequest): Promise<BatchCreateWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateWafRulesWithOptions(request, runtime);
  }

  /**
   * 批量删除Namespace的key-value对
   * 
   * @param tmpReq - BatchDeleteKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteKvResponse
   */
  async batchDeleteKvWithOptions(tmpReq: BatchDeleteKvRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteKvResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDeleteKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keysShrink)) {
      body["Keys"] = request.keysShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteKvResponse>(await this.callApi(params, req, runtime), new BatchDeleteKvResponse({}));
  }

  /**
   * 批量删除Namespace的key-value对
   * 
   * @param request - BatchDeleteKvRequest
   * @returns BatchDeleteKvResponse
   */
  async batchDeleteKv(request: BatchDeleteKvRequest): Promise<BatchDeleteKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteKvWithOptions(request, runtime);
  }

  /**
   * 批量删除Namespace下的KV队，支持大body的上传，上限100M
   * 
   * @param request - BatchDeleteKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteKvWithHighCapacityResponse
   */
  async batchDeleteKvWithHighCapacityWithOptions(request: BatchDeleteKvWithHighCapacityRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteKvWithHighCapacityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new BatchDeleteKvWithHighCapacityResponse({}));
  }

  /**
   * 批量删除Namespace下的KV队，支持大body的上传，上限100M
   * 
   * @param request - BatchDeleteKvWithHighCapacityRequest
   * @returns BatchDeleteKvWithHighCapacityResponse
   */
  async batchDeleteKvWithHighCapacity(request: BatchDeleteKvWithHighCapacityRequest): Promise<BatchDeleteKvWithHighCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchDeleteKvWithHighCapacityAdvance(request: BatchDeleteKvWithHighCapacityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let batchDeleteKvWithHighCapacityReq = new BatchDeleteKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchDeleteKvWithHighCapacityReq);
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      batchDeleteKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let batchDeleteKvWithHighCapacityResp = await this.batchDeleteKvWithHighCapacityWithOptions(batchDeleteKvWithHighCapacityReq, runtime);
    return batchDeleteKvWithHighCapacityResp;
  }

  /**
   * 批量获取表达式的匹配项
   * 
   * @param tmpReq - BatchGetExpressionFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetExpressionFieldsResponse
   */
  async batchGetExpressionFieldsWithOptions(tmpReq: BatchGetExpressionFieldsRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetExpressionFieldsResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchGetExpressionFieldsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.expressions)) {
      request.expressionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.expressions, "Expressions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expressionsShrink)) {
      body["Expressions"] = request.expressionsShrink;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetExpressionFields",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchGetExpressionFieldsResponse>(await this.callApi(params, req, runtime), new BatchGetExpressionFieldsResponse({}));
  }

  /**
   * 批量获取表达式的匹配项
   * 
   * @param request - BatchGetExpressionFieldsRequest
   * @returns BatchGetExpressionFieldsResponse
   */
  async batchGetExpressionFields(request: BatchGetExpressionFieldsRequest): Promise<BatchGetExpressionFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetExpressionFieldsWithOptions(request, runtime);
  }

  /**
   * 批量设置Namespace的key-value对
   * 
   * @param tmpReq - BatchPutKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutKvResponse
   */
  async batchPutKvWithOptions(tmpReq: BatchPutKvRequest, runtime: $Util.RuntimeOptions): Promise<BatchPutKvResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchPutKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.kvList)) {
      request.kvListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kvList, "KvList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.kvListShrink)) {
      body["KvList"] = request.kvListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchPutKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchPutKvResponse>(await this.callApi(params, req, runtime), new BatchPutKvResponse({}));
  }

  /**
   * 批量设置Namespace的key-value对
   * 
   * @param request - BatchPutKvRequest
   * @returns BatchPutKvResponse
   */
  async batchPutKv(request: BatchPutKvRequest): Promise<BatchPutKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchPutKvWithOptions(request, runtime);
  }

  /**
   * 批量设置Namespace的key-value对，支持最大100M的请求体
   * 
   * @param request - BatchPutKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutKvWithHighCapacityResponse
   */
  async batchPutKvWithHighCapacityWithOptions(request: BatchPutKvWithHighCapacityRequest, runtime: $Util.RuntimeOptions): Promise<BatchPutKvWithHighCapacityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchPutKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchPutKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new BatchPutKvWithHighCapacityResponse({}));
  }

  /**
   * 批量设置Namespace的key-value对，支持最大100M的请求体
   * 
   * @param request - BatchPutKvWithHighCapacityRequest
   * @returns BatchPutKvWithHighCapacityResponse
   */
  async batchPutKvWithHighCapacity(request: BatchPutKvWithHighCapacityRequest): Promise<BatchPutKvWithHighCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchPutKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchPutKvWithHighCapacityAdvance(request: BatchPutKvWithHighCapacityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<BatchPutKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let batchPutKvWithHighCapacityReq = new BatchPutKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchPutKvWithHighCapacityReq);
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      batchPutKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let batchPutKvWithHighCapacityResp = await this.batchPutKvWithHighCapacityWithOptions(batchPutKvWithHighCapacityReq, runtime);
    return batchPutKvWithHighCapacityResp;
  }

  /**
   * 批量修改WAF规则
   * 
   * @param tmpReq - BatchUpdateWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateWafRulesResponse
   */
  async batchUpdateWafRulesWithOptions(tmpReq: BatchUpdateWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateWafRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUpdateWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    if (!Util.isUnset(tmpReq.shared)) {
      request.sharedShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shared, "Shared", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.rulesetId)) {
      body["RulesetId"] = request.rulesetId;
    }

    if (!Util.isUnset(request.sharedShrink)) {
      body["Shared"] = request.sharedShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdateWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateWafRulesResponse>(await this.callApi(params, req, runtime), new BatchUpdateWafRulesResponse({}));
  }

  /**
   * 批量修改WAF规则
   * 
   * @param request - BatchUpdateWafRulesRequest
   * @returns BatchUpdateWafRulesResponse
   */
  async batchUpdateWafRules(request: BatchUpdateWafRulesRequest): Promise<BatchUpdateWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateWafRulesWithOptions(request, runtime);
  }

  /**
   * URL封禁
   * 
   * @param tmpReq - BlockObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlockObjectResponse
   */
  async blockObjectWithOptions(tmpReq: BlockObjectRequest, runtime: $Util.RuntimeOptions): Promise<BlockObjectResponse> {
    Util.validateModel(tmpReq);
    let request = new BlockObjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!Util.isUnset(request.maxage)) {
      query["Maxage"] = request.maxage;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BlockObject",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BlockObjectResponse>(await this.callApi(params, req, runtime), new BlockObjectResponse({}));
  }

  /**
   * URL封禁
   * 
   * @param request - BlockObjectRequest
   * @returns BlockObjectResponse
   */
  async blockObject(request: BlockObjectRequest): Promise<BlockObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.blockObjectWithOptions(request, runtime);
  }

  /**
   * 修改站点的企业资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 修改站点的企业资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 校验站点名称是否可用
   * 
   * @param request - CheckSiteNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSiteNameResponse
   */
  async checkSiteNameWithOptions(request: CheckSiteNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckSiteNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteName)) {
      query["SiteName"] = request.siteName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSiteName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSiteNameResponse>(await this.callApi(params, req, runtime), new CheckSiteNameResponse({}));
  }

  /**
   * 校验站点名称是否可用
   * 
   * @param request - CheckSiteNameRequest
   * @returns CheckSiteNameResponse
   */
  async checkSiteName(request: CheckSiteNameRequest): Promise<CheckSiteNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSiteNameWithOptions(request, runtime);
  }

  /**
   * 实时日志任务投递名检查
   * 
   * @param request - CheckSiteProjectNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSiteProjectNameResponse
   */
  async checkSiteProjectNameWithOptions(request: CheckSiteProjectNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckSiteProjectNameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSiteProjectName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSiteProjectNameResponse>(await this.callApi(params, req, runtime), new CheckSiteProjectNameResponse({}));
  }

  /**
   * 实时日志任务投递名检查
   * 
   * @param request - CheckSiteProjectNameRequest
   * @returns CheckSiteProjectNameResponse
   */
  async checkSiteProjectName(request: CheckSiteProjectNameRequest): Promise<CheckSiteProjectNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSiteProjectNameWithOptions(request, runtime);
  }

  /**
   * 实时日志用户任务投递名检查
   * 
   * @param request - CheckUserProjectNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUserProjectNameResponse
   */
  async checkUserProjectNameWithOptions(request: CheckUserProjectNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckUserProjectNameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUserProjectName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUserProjectNameResponse>(await this.callApi(params, req, runtime), new CheckUserProjectNameResponse({}));
  }

  /**
   * 实时日志用户任务投递名检查
   * 
   * @param request - CheckUserProjectNameRequest
   * @returns CheckUserProjectNameResponse
   */
  async checkUserProjectName(request: CheckUserProjectNameRequest): Promise<CheckUserProjectNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUserProjectNameWithOptions(request, runtime);
  }

  /**
   * 创建定制场景策略
   * 
   * @param request - CreateCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomScenePolicyResponse
   */
  async createCustomScenePolicyWithOptions(request: CreateCustomScenePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomScenePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new CreateCustomScenePolicyResponse({}));
  }

  /**
   * 创建定制场景策略
   * 
   * @param request - CreateCustomScenePolicyRequest
   * @returns CreateCustomScenePolicyResponse
   */
  async createCustomScenePolicy(request: CreateCustomScenePolicyRequest): Promise<CreateCustomScenePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * 添加Namespace
   * 
   * @param request - CreateKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKvNamespaceResponse
   */
  async createKvNamespaceWithOptions(request: CreateKvNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateKvNamespaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKvNamespaceResponse>(await this.callApi(params, req, runtime), new CreateKvNamespaceResponse({}));
  }

  /**
   * 添加Namespace
   * 
   * @param request - CreateKvNamespaceRequest
   * @returns CreateKvNamespaceResponse
   */
  async createKvNamespace(request: CreateKvNamespaceRequest): Promise<CreateKvNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKvNamespaceWithOptions(request, runtime);
  }

  /**
   * 创建自定义列表
   * 
   * @param tmpReq - CreateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListResponse
   */
  async createListWithOptions(tmpReq: CreateListRequest, runtime: $Util.RuntimeOptions): Promise<CreateListResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.itemsShrink)) {
      body["Items"] = request.itemsShrink;
    }

    if (!Util.isUnset(request.kind)) {
      body["Kind"] = request.kind;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateListResponse>(await this.callApi(params, req, runtime), new CreateListResponse({}));
  }

  /**
   * 创建自定义列表
   * 
   * @param request - CreateListRequest
   * @returns CreateListResponse
   */
  async createList(request: CreateListRequest): Promise<CreateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListWithOptions(request, runtime);
  }

  /**
   * 调用CreatePage创建自定义响应页面
   * 
   * @param request - CreatePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePageResponse
   */
  async createPageWithOptions(request: CreatePageRequest, runtime: $Util.RuntimeOptions): Promise<CreatePageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePageResponse>(await this.callApi(params, req, runtime), new CreatePageResponse({}));
  }

  /**
   * 调用CreatePage创建自定义响应页面
   * 
   * @param request - CreatePageRequest
   * @returns CreatePageResponse
   */
  async createPage(request: CreatePageRequest): Promise<CreatePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPageWithOptions(request, runtime);
  }

  /**
   * 创建记录
   * 
   * @param tmpReq - CreateRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecordResponse
   */
  async createRecordWithOptions(tmpReq: CreateRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecordResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authConf)) {
      request.authConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConf, "AuthConf", "json");
    }

    if (!Util.isUnset(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!Util.isUnset(request.authConfShrink)) {
      query["AuthConf"] = request.authConfShrink;
    }

    if (!Util.isUnset(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!Util.isUnset(request.hostPolicy)) {
      query["HostPolicy"] = request.hostPolicy;
    }

    if (!Util.isUnset(request.proxied)) {
      query["Proxied"] = request.proxied;
    }

    if (!Util.isUnset(request.recordName)) {
      query["RecordName"] = request.recordName;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRecordResponse>(await this.callApi(params, req, runtime), new CreateRecordResponse({}));
  }

  /**
   * 创建记录
   * 
   * @param request - CreateRecordRequest
   * @returns CreateRecordResponse
   */
  async createRecord(request: CreateRecordRequest): Promise<CreateRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecordWithOptions(request, runtime);
  }

  /**
   * 批量新增定时预热任务的计划
   * 
   * @param tmpReq - CreateScheduledPreloadExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPreloadExecutionsResponse
   */
  async createScheduledPreloadExecutionsWithOptions(tmpReq: CreateScheduledPreloadExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduledPreloadExecutionsResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScheduledPreloadExecutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executions)) {
      request.executionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executions, "Executions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.executionsShrink)) {
      body["Executions"] = request.executionsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduledPreloadExecutions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduledPreloadExecutionsResponse>(await this.callApi(params, req, runtime), new CreateScheduledPreloadExecutionsResponse({}));
  }

  /**
   * 批量新增定时预热任务的计划
   * 
   * @param request - CreateScheduledPreloadExecutionsRequest
   * @returns CreateScheduledPreloadExecutionsResponse
   */
  async createScheduledPreloadExecutions(request: CreateScheduledPreloadExecutionsRequest): Promise<CreateScheduledPreloadExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledPreloadExecutionsWithOptions(request, runtime);
  }

  /**
   * 新增定时预热任务
   * 
   * @param request - CreateScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPreloadJobResponse
   */
  async createScheduledPreloadJobWithOptions(request: CreateScheduledPreloadJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduledPreloadJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.insertWay)) {
      body["InsertWay"] = request.insertWay;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.urlList)) {
      body["UrlList"] = request.urlList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new CreateScheduledPreloadJobResponse({}));
  }

  /**
   * 新增定时预热任务
   * 
   * @param request - CreateScheduledPreloadJobRequest
   * @returns CreateScheduledPreloadJobResponse
   */
  async createScheduledPreloadJob(request: CreateScheduledPreloadJobRequest): Promise<CreateScheduledPreloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * 创建站点
   * 
   * @param request - CreateSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteResponse
   */
  async createSiteWithOptions(request: CreateSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.siteName)) {
      query["SiteName"] = request.siteName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSiteResponse>(await this.callApi(params, req, runtime), new CreateSiteResponse({}));
  }

  /**
   * 创建站点
   * 
   * @param request - CreateSiteRequest
   * @returns CreateSiteResponse
   */
  async createSite(request: CreateSiteRequest): Promise<CreateSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteWithOptions(request, runtime);
  }

  /**
   * 新建自定义字段
   * 
   * @param tmpReq - CreateSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteCustomLogResponse
   */
  async createSiteCustomLogWithOptions(tmpReq: CreateSiteCustomLogRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteCustomLogResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSiteCustomLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cookies)) {
      request.cookiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cookies, "Cookies", "json");
    }

    if (!Util.isUnset(tmpReq.requestHeaders)) {
      request.requestHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaders, "RequestHeaders", "json");
    }

    if (!Util.isUnset(tmpReq.responseHeaders)) {
      request.responseHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaders, "ResponseHeaders", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cookiesShrink)) {
      body["Cookies"] = request.cookiesShrink;
    }

    if (!Util.isUnset(request.requestHeadersShrink)) {
      body["RequestHeaders"] = request.requestHeadersShrink;
    }

    if (!Util.isUnset(request.responseHeadersShrink)) {
      body["ResponseHeaders"] = request.responseHeadersShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSiteCustomLogResponse>(await this.callApi(params, req, runtime), new CreateSiteCustomLogResponse({}));
  }

  /**
   * 新建自定义字段
   * 
   * @param request - CreateSiteCustomLogRequest
   * @returns CreateSiteCustomLogResponse
   */
  async createSiteCustomLog(request: CreateSiteCustomLogRequest): Promise<CreateSiteCustomLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * 新建一个任务投递
   * 
   * @param tmpReq - CreateSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteDeliveryTaskResponse
   */
  async createSiteDeliveryTaskWithOptions(tmpReq: CreateSiteDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteDeliveryTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSiteDeliveryTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.httpDelivery)) {
      request.httpDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpDelivery, "HttpDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.kafkaDelivery)) {
      request.kafkaDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaDelivery, "KafkaDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.ossDelivery)) {
      request.ossDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ossDelivery, "OssDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.s3Delivery)) {
      request.s3DeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.s3Delivery, "S3Delivery", "json");
    }

    if (!Util.isUnset(tmpReq.slsDelivery)) {
      request.slsDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsDelivery, "SlsDelivery", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!Util.isUnset(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!Util.isUnset(request.httpDeliveryShrink)) {
      body["HttpDelivery"] = request.httpDeliveryShrink;
    }

    if (!Util.isUnset(request.kafkaDeliveryShrink)) {
      body["KafkaDelivery"] = request.kafkaDeliveryShrink;
    }

    if (!Util.isUnset(request.ossDeliveryShrink)) {
      body["OssDelivery"] = request.ossDeliveryShrink;
    }

    if (!Util.isUnset(request.s3DeliveryShrink)) {
      body["S3Delivery"] = request.s3DeliveryShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.slsDeliveryShrink)) {
      body["SlsDelivery"] = request.slsDeliveryShrink;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new CreateSiteDeliveryTaskResponse({}));
  }

  /**
   * 新建一个任务投递
   * 
   * @param request - CreateSiteDeliveryTaskRequest
   * @returns CreateSiteDeliveryTaskResponse
   */
  async createSiteDeliveryTask(request: CreateSiteDeliveryTaskRequest): Promise<CreateSiteDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 新建一个用户粒度任务投递
   * 
   * @param tmpReq - CreateUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserDeliveryTaskResponse
   */
  async createUserDeliveryTaskWithOptions(tmpReq: CreateUserDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserDeliveryTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUserDeliveryTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.httpDelivery)) {
      request.httpDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpDelivery, "HttpDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.kafkaDelivery)) {
      request.kafkaDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaDelivery, "KafkaDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.ossDelivery)) {
      request.ossDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ossDelivery, "OssDelivery", "json");
    }

    if (!Util.isUnset(tmpReq.s3Delivery)) {
      request.s3DeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.s3Delivery, "S3Delivery", "json");
    }

    if (!Util.isUnset(tmpReq.slsDelivery)) {
      request.slsDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsDelivery, "SlsDelivery", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!Util.isUnset(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!Util.isUnset(request.httpDeliveryShrink)) {
      body["HttpDelivery"] = request.httpDeliveryShrink;
    }

    if (!Util.isUnset(request.kafkaDeliveryShrink)) {
      body["KafkaDelivery"] = request.kafkaDeliveryShrink;
    }

    if (!Util.isUnset(request.ossDeliveryShrink)) {
      body["OssDelivery"] = request.ossDeliveryShrink;
    }

    if (!Util.isUnset(request.s3DeliveryShrink)) {
      body["S3Delivery"] = request.s3DeliveryShrink;
    }

    if (!Util.isUnset(request.slsDeliveryShrink)) {
      body["SlsDelivery"] = request.slsDeliveryShrink;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new CreateUserDeliveryTaskResponse({}));
  }

  /**
   * 新建一个用户粒度任务投递
   * 
   * @param request - CreateUserDeliveryTaskRequest
   * @returns CreateUserDeliveryTaskResponse
   */
  async createUserDeliveryTask(request: CreateUserDeliveryTaskRequest): Promise<CreateUserDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 创建WAF规则
   * 
   * @param tmpReq - CreateWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWafRuleResponse
   */
  async createWafRuleWithOptions(tmpReq: CreateWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWafRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateWafRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWafRuleResponse>(await this.callApi(params, req, runtime), new CreateWafRuleResponse({}));
  }

  /**
   * 创建WAF规则
   * 
   * @param request - CreateWafRuleRequest
   * @returns CreateWafRuleResponse
   */
  async createWafRule(request: CreateWafRuleRequest): Promise<CreateWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWafRuleWithOptions(request, runtime);
  }

  /**
   * 创建等候室
   * 
   * @param tmpReq - CreateWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomResponse
   */
  async createWaitingRoomWithOptions(tmpReq: CreateWaitingRoomRequest, runtime: $Util.RuntimeOptions): Promise<CreateWaitingRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateWaitingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hostNameAndPath)) {
      request.hostNameAndPathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostNameAndPath, "HostNameAndPath", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cookieName)) {
      query["CookieName"] = request.cookieName;
    }

    if (!Util.isUnset(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.hostNameAndPathShrink)) {
      query["HostNameAndPath"] = request.hostNameAndPathShrink;
    }

    if (!Util.isUnset(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!Util.isUnset(request.queueAllEnable)) {
      query["QueueAllEnable"] = request.queueAllEnable;
    }

    if (!Util.isUnset(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!Util.isUnset(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!Util.isUnset(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!Util.isUnset(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWaitingRoomResponse>(await this.callApi(params, req, runtime), new CreateWaitingRoomResponse({}));
  }

  /**
   * 创建等候室
   * 
   * @param request - CreateWaitingRoomRequest
   * @returns CreateWaitingRoomResponse
   */
  async createWaitingRoom(request: CreateWaitingRoomRequest): Promise<CreateWaitingRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWaitingRoomWithOptions(request, runtime);
  }

  /**
   * 创建等候室事件
   * 
   * @param request - CreateWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomEventResponse
   */
  async createWaitingRoomEventWithOptions(request: CreateWaitingRoomEventRequest, runtime: $Util.RuntimeOptions): Promise<CreateWaitingRoomEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!Util.isUnset(request.preQueueEnable)) {
      query["PreQueueEnable"] = request.preQueueEnable;
    }

    if (!Util.isUnset(request.preQueueStartTime)) {
      query["PreQueueStartTime"] = request.preQueueStartTime;
    }

    if (!Util.isUnset(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!Util.isUnset(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!Util.isUnset(request.randomPreQueueEnable)) {
      query["RandomPreQueueEnable"] = request.randomPreQueueEnable;
    }

    if (!Util.isUnset(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!Util.isUnset(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    if (!Util.isUnset(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new CreateWaitingRoomEventResponse({}));
  }

  /**
   * 创建等候室事件
   * 
   * @param request - CreateWaitingRoomEventRequest
   * @returns CreateWaitingRoomEventResponse
   */
  async createWaitingRoomEvent(request: CreateWaitingRoomEventRequest): Promise<CreateWaitingRoomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * 创建等候室规则
   * 
   * @param request - CreateWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomRuleResponse
   */
  async createWaitingRoomRuleWithOptions(request: CreateWaitingRoomRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateWaitingRoomRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new CreateWaitingRoomRuleResponse({}));
  }

  /**
   * 创建等候室规则
   * 
   * @param request - CreateWaitingRoomRuleRequest
   * @returns CreateWaitingRoomRuleResponse
   */
  async createWaitingRoomRule(request: CreateWaitingRoomRuleRequest): Promise<CreateWaitingRoomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * 删除定制场景策略
   * 
   * @param request - DeleteCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomScenePolicyResponse
   */
  async deleteCustomScenePolicyWithOptions(request: DeleteCustomScenePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomScenePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new DeleteCustomScenePolicyResponse({}));
  }

  /**
   * 删除定制场景策略
   * 
   * @param request - DeleteCustomScenePolicyRequest
   * @returns DeleteCustomScenePolicyResponse
   */
  async deleteCustomScenePolicy(request: DeleteCustomScenePolicyRequest): Promise<DeleteCustomScenePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * 删除Namespace的Key-Value对
   * 
   * @param request - DeleteKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKvResponse
   */
  async deleteKvWithOptions(request: DeleteKvRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKvResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKvResponse>(await this.callApi(params, req, runtime), new DeleteKvResponse({}));
  }

  /**
   * 删除Namespace的Key-Value对
   * 
   * @param request - DeleteKvRequest
   * @returns DeleteKvResponse
   */
  async deleteKv(request: DeleteKvRequest): Promise<DeleteKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKvWithOptions(request, runtime);
  }

  /**
   * 删除Namespace
   * 
   * @param request - DeleteKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKvNamespaceResponse
   */
  async deleteKvNamespaceWithOptions(request: DeleteKvNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKvNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKvNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteKvNamespaceResponse({}));
  }

  /**
   * 删除Namespace
   * 
   * @param request - DeleteKvNamespaceRequest
   * @returns DeleteKvNamespaceResponse
   */
  async deleteKvNamespace(request: DeleteKvNamespaceRequest): Promise<DeleteKvNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKvNamespaceWithOptions(request, runtime);
  }

  /**
   * 删除自定义列表
   * 
   * @param request - DeleteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListResponse
   */
  async deleteListWithOptions(request: DeleteListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteListResponse>(await this.callApi(params, req, runtime), new DeleteListResponse({}));
  }

  /**
   * 删除自定义列表
   * 
   * @param request - DeleteListRequest
   * @returns DeleteListResponse
   */
  async deleteList(request: DeleteListRequest): Promise<DeleteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListWithOptions(request, runtime);
  }

  /**
   * 删除自定义响应页面
   * 
   * @param request - DeletePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePageResponse
   */
  async deletePageWithOptions(request: DeletePageRequest, runtime: $Util.RuntimeOptions): Promise<DeletePageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePageResponse>(await this.callApi(params, req, runtime), new DeletePageResponse({}));
  }

  /**
   * 删除自定义响应页面
   * 
   * @param request - DeletePageRequest
   * @returns DeletePageResponse
   */
  async deletePage(request: DeletePageRequest): Promise<DeletePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePageWithOptions(request, runtime);
  }

  /**
   * 删除记录
   * 
   * @param request - DeleteRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordResponse
   */
  async deleteRecordWithOptions(request: DeleteRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordResponse>(await this.callApi(params, req, runtime), new DeleteRecordResponse({}));
  }

  /**
   * 删除记录
   * 
   * @param request - DeleteRecordRequest
   * @returns DeleteRecordResponse
   */
  async deleteRecord(request: DeleteRecordRequest): Promise<DeleteRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordWithOptions(request, runtime);
  }

  /**
   * 删除单个定时预热计划
   * 
   * @param request - DeleteScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPreloadExecutionResponse
   */
  async deleteScheduledPreloadExecutionWithOptions(request: DeleteScheduledPreloadExecutionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledPreloadExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new DeleteScheduledPreloadExecutionResponse({}));
  }

  /**
   * 删除单个定时预热计划
   * 
   * @param request - DeleteScheduledPreloadExecutionRequest
   * @returns DeleteScheduledPreloadExecutionResponse
   */
  async deleteScheduledPreloadExecution(request: DeleteScheduledPreloadExecutionRequest): Promise<DeleteScheduledPreloadExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * 删除指定定时预热任务
   * 
   * @param request - DeleteScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPreloadJobResponse
   */
  async deleteScheduledPreloadJobWithOptions(request: DeleteScheduledPreloadJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledPreloadJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new DeleteScheduledPreloadJobResponse({}));
  }

  /**
   * 删除指定定时预热任务
   * 
   * @param request - DeleteScheduledPreloadJobRequest
   * @returns DeleteScheduledPreloadJobResponse
   */
  async deleteScheduledPreloadJob(request: DeleteScheduledPreloadJobRequest): Promise<DeleteScheduledPreloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * 删除站点
   * 
   * @param request - DeleteSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteResponse
   */
  async deleteSiteWithOptions(request: DeleteSiteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSiteResponse>(await this.callApi(params, req, runtime), new DeleteSiteResponse({}));
  }

  /**
   * 删除站点
   * 
   * @param request - DeleteSiteRequest
   * @returns DeleteSiteResponse
   */
  async deleteSite(request: DeleteSiteRequest): Promise<DeleteSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSiteWithOptions(request, runtime);
  }

  /**
   * 删除一个任务投递
   * 
   * @param request - DeleteSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteDeliveryTaskResponse
   */
  async deleteSiteDeliveryTaskWithOptions(request: DeleteSiteDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSiteDeliveryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new DeleteSiteDeliveryTaskResponse({}));
  }

  /**
   * 删除一个任务投递
   * 
   * @param request - DeleteSiteDeliveryTaskRequest
   * @returns DeleteSiteDeliveryTaskResponse
   */
  async deleteSiteDeliveryTask(request: DeleteSiteDeliveryTaskRequest): Promise<DeleteSiteDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 删除一个用户任务投递
   * 
   * @param request - DeleteUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDeliveryTaskResponse
   */
  async deleteUserDeliveryTaskWithOptions(request: DeleteUserDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserDeliveryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new DeleteUserDeliveryTaskResponse({}));
  }

  /**
   * 删除一个用户任务投递
   * 
   * @param request - DeleteUserDeliveryTaskRequest
   * @returns DeleteUserDeliveryTaskResponse
   */
  async deleteUserDeliveryTask(request: DeleteUserDeliveryTaskRequest): Promise<DeleteUserDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 删除WAF规则
   * 
   * @param request - DeleteWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWafRuleResponse
   */
  async deleteWafRuleWithOptions(request: DeleteWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWafRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWafRuleResponse>(await this.callApi(params, req, runtime), new DeleteWafRuleResponse({}));
  }

  /**
   * 删除WAF规则
   * 
   * @param request - DeleteWafRuleRequest
   * @returns DeleteWafRuleResponse
   */
  async deleteWafRule(request: DeleteWafRuleRequest): Promise<DeleteWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWafRuleWithOptions(request, runtime);
  }

  /**
   * 删除WAF规则集
   * 
   * @param request - DeleteWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWafRulesetResponse
   */
  async deleteWafRulesetWithOptions(request: DeleteWafRulesetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWafRulesetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWafRulesetResponse>(await this.callApi(params, req, runtime), new DeleteWafRulesetResponse({}));
  }

  /**
   * 删除WAF规则集
   * 
   * @param request - DeleteWafRulesetRequest
   * @returns DeleteWafRulesetResponse
   */
  async deleteWafRuleset(request: DeleteWafRulesetRequest): Promise<DeleteWafRulesetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWafRulesetWithOptions(request, runtime);
  }

  /**
   * 删除等候室
   * 
   * @param request - DeleteWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomResponse
   */
  async deleteWaitingRoomWithOptions(request: DeleteWaitingRoomRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWaitingRoomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWaitingRoomResponse>(await this.callApi(params, req, runtime), new DeleteWaitingRoomResponse({}));
  }

  /**
   * 删除等候室
   * 
   * @param request - DeleteWaitingRoomRequest
   * @returns DeleteWaitingRoomResponse
   */
  async deleteWaitingRoom(request: DeleteWaitingRoomRequest): Promise<DeleteWaitingRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWaitingRoomWithOptions(request, runtime);
  }

  /**
   * 删除等候室事件
   * 
   * @param request - DeleteWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomEventResponse
   */
  async deleteWaitingRoomEventWithOptions(request: DeleteWaitingRoomEventRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWaitingRoomEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.waitingRoomEventId)) {
      query["WaitingRoomEventId"] = request.waitingRoomEventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new DeleteWaitingRoomEventResponse({}));
  }

  /**
   * 删除等候室事件
   * 
   * @param request - DeleteWaitingRoomEventRequest
   * @returns DeleteWaitingRoomEventResponse
   */
  async deleteWaitingRoomEvent(request: DeleteWaitingRoomEventRequest): Promise<DeleteWaitingRoomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * 删除等候室规则
   * 
   * @param request - DeleteWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomRuleResponse
   */
  async deleteWaitingRoomRuleWithOptions(request: DeleteWaitingRoomRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWaitingRoomRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.waitingRoomRuleId)) {
      query["WaitingRoomRuleId"] = request.waitingRoomRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new DeleteWaitingRoomRuleResponse({}));
  }

  /**
   * 删除等候室规则
   * 
   * @param request - DeleteWaitingRoomRuleRequest
   * @returns DeleteWaitingRoomRuleResponse
   */
  async deleteWaitingRoomRule(request: DeleteWaitingRoomRuleRequest): Promise<DeleteWaitingRoomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * 查询定制场景策略配置
   * 
   * @param request - DescribeCustomScenePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomScenePoliciesResponse
   */
  async describeCustomScenePoliciesWithOptions(request: DescribeCustomScenePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomScenePoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomScenePolicies",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomScenePoliciesResponse>(await this.callApi(params, req, runtime), new DescribeCustomScenePoliciesResponse({}));
  }

  /**
   * 查询定制场景策略配置
   * 
   * @param request - DescribeCustomScenePoliciesRequest
   * @returns DescribeCustomScenePoliciesResponse
   */
  async describeCustomScenePolicies(request: DescribeCustomScenePoliciesRequest): Promise<DescribeCustomScenePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomScenePoliciesWithOptions(request, runtime);
  }

  /**
   * 攻击分析-查询攻击事件列表
   * 
   * @param request - DescribeDDoSAllEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSAllEventListResponse
   */
  async describeDDoSAllEventListWithOptions(request: DescribeDDoSAllEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSAllEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDDoSAllEventList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDDoSAllEventListResponse>(await this.callApi(params, req, runtime), new DescribeDDoSAllEventListResponse({}));
  }

  /**
   * 攻击分析-查询攻击事件列表
   * 
   * @param request - DescribeDDoSAllEventListRequest
   * @returns DescribeDDoSAllEventListResponse
   */
  async describeDDoSAllEventList(request: DescribeDDoSAllEventListRequest): Promise<DescribeDDoSAllEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSAllEventListWithOptions(request, runtime);
  }

  /**
   * 查询HTTP DDoS智能防护配置信息
   * 
   * @param request - DescribeHttpDDoSAttackIntelligentProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHttpDDoSAttackIntelligentProtectionResponse
   */
  async describeHttpDDoSAttackIntelligentProtectionWithOptions(request: DescribeHttpDDoSAttackIntelligentProtectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHttpDDoSAttackIntelligentProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHttpDDoSAttackIntelligentProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHttpDDoSAttackIntelligentProtectionResponse>(await this.callApi(params, req, runtime), new DescribeHttpDDoSAttackIntelligentProtectionResponse({}));
  }

  /**
   * 查询HTTP DDoS智能防护配置信息
   * 
   * @param request - DescribeHttpDDoSAttackIntelligentProtectionRequest
   * @returns DescribeHttpDDoSAttackIntelligentProtectionResponse
   */
  async describeHttpDDoSAttackIntelligentProtection(request: DescribeHttpDDoSAttackIntelligentProtectionRequest): Promise<DescribeHttpDDoSAttackIntelligentProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHttpDDoSAttackIntelligentProtectionWithOptions(request, runtime);
  }

  /**
   * 查询HTTP DDoS攻击防护配置信息
   * 
   * @param request - DescribeHttpDDoSAttackProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHttpDDoSAttackProtectionResponse
   */
  async describeHttpDDoSAttackProtectionWithOptions(request: DescribeHttpDDoSAttackProtectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHttpDDoSAttackProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHttpDDoSAttackProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHttpDDoSAttackProtectionResponse>(await this.callApi(params, req, runtime), new DescribeHttpDDoSAttackProtectionResponse({}));
  }

  /**
   * 查询HTTP DDoS攻击防护配置信息
   * 
   * @param request - DescribeHttpDDoSAttackProtectionRequest
   * @returns DescribeHttpDDoSAttackProtectionResponse
   */
  async describeHttpDDoSAttackProtection(request: DescribeHttpDDoSAttackProtectionRequest): Promise<DescribeHttpDDoSAttackProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHttpDDoSAttackProtectionWithOptions(request, runtime);
  }

  /**
   * 查询加速服务节点IP段列表
   * 
   * @param request - DescribeIPRangeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIPRangeListResponse
   */
  async describeIPRangeListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeIPRangeListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeIPRangeList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIPRangeListResponse>(await this.callApi(params, req, runtime), new DescribeIPRangeListResponse({}));
  }

  /**
   * 查询加速服务节点IP段列表
   * @returns DescribeIPRangeListResponse
   */
  async describeIPRangeList(): Promise<DescribeIPRangeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIPRangeListWithOptions(runtime);
  }

  /**
   * 查询账户的KV状态信
   * 
   * @param request - DescribeKvAccountStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKvAccountStatusResponse
   */
  async describeKvAccountStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeKvAccountStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeKvAccountStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKvAccountStatusResponse>(await this.callApi(params, req, runtime), new DescribeKvAccountStatusResponse({}));
  }

  /**
   * 查询账户的KV状态信
   * @returns DescribeKvAccountStatusResponse
   */
  async describeKvAccountStatus(): Promise<DescribeKvAccountStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKvAccountStatusWithOptions(runtime);
  }

  /**
   * 预热任务查询接口
   * 
   * @param request - DescribePreloadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreloadTasksResponse
   */
  async describePreloadTasksWithOptions(request: DescribePreloadTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreloadTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePreloadTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePreloadTasksResponse>(await this.callApi(params, req, runtime), new DescribePreloadTasksResponse({}));
  }

  /**
   * 预热任务查询接口
   * 
   * @param request - DescribePreloadTasksRequest
   * @returns DescribePreloadTasksResponse
   */
  async describePreloadTasks(request: DescribePreloadTasksRequest): Promise<DescribePreloadTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreloadTasksWithOptions(request, runtime);
  }

  /**
   * 刷新任务查询接口
   * 
   * @param request - DescribePurgeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurgeTasksResponse
   */
  async describePurgeTasksWithOptions(request: DescribePurgeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurgeTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePurgeTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePurgeTasksResponse>(await this.callApi(params, req, runtime), new DescribePurgeTasksResponse({}));
  }

  /**
   * 刷新任务查询接口
   * 
   * @param request - DescribePurgeTasksRequest
   * @returns DescribePurgeTasksResponse
   */
  async describePurgeTasks(request: DescribePurgeTasksRequest): Promise<DescribePurgeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurgeTasksWithOptions(request, runtime);
  }

  /**
   * 禁用定制场景策略
   * 
   * @param request - DisableCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCustomScenePolicyResponse
   */
  async disableCustomScenePolicyWithOptions(request: DisableCustomScenePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DisableCustomScenePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new DisableCustomScenePolicyResponse({}));
  }

  /**
   * 禁用定制场景策略
   * 
   * @param request - DisableCustomScenePolicyRequest
   * @returns DisableCustomScenePolicyResponse
   */
  async disableCustomScenePolicy(request: DisableCustomScenePolicyRequest): Promise<DisableCustomScenePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * 编辑站点WAF配置
   * 
   * @param tmpReq - EditSiteWafSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditSiteWafSettingsResponse
   */
  async editSiteWafSettingsWithOptions(tmpReq: EditSiteWafSettingsRequest, runtime: $Util.RuntimeOptions): Promise<EditSiteWafSettingsResponse> {
    Util.validateModel(tmpReq);
    let request = new EditSiteWafSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.settingsShrink)) {
      body["Settings"] = request.settingsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EditSiteWafSettings",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditSiteWafSettingsResponse>(await this.callApi(params, req, runtime), new EditSiteWafSettingsResponse({}));
  }

  /**
   * 编辑站点WAF配置
   * 
   * @param request - EditSiteWafSettingsRequest
   * @returns EditSiteWafSettingsResponse
   */
  async editSiteWafSettings(request: EditSiteWafSettingsRequest): Promise<EditSiteWafSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editSiteWafSettingsWithOptions(request, runtime);
  }

  /**
   * 启动定制场景策略
   * 
   * @param request - EnableCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCustomScenePolicyResponse
   */
  async enableCustomScenePolicyWithOptions(request: EnableCustomScenePolicyRequest, runtime: $Util.RuntimeOptions): Promise<EnableCustomScenePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new EnableCustomScenePolicyResponse({}));
  }

  /**
   * 启动定制场景策略
   * 
   * @param request - EnableCustomScenePolicyRequest
   * @returns EnableCustomScenePolicyResponse
   */
  async enableCustomScenePolicy(request: EnableCustomScenePolicyRequest): Promise<EnableCustomScenePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * 导出记录
   * 
   * @param request - ExportRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportRecordsResponse
   */
  async exportRecordsWithOptions(request: ExportRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ExportRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportRecordsResponse>(await this.callApi(params, req, runtime), new ExportRecordsResponse({}));
  }

  /**
   * 导出记录
   * 
   * @param request - ExportRecordsRequest
   * @returns ExportRecordsResponse
   */
  async exportRecords(request: ExportRecordsRequest): Promise<ExportRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportRecordsWithOptions(request, runtime);
  }

  /**
   * 查询缓存保持实例规格
   * 
   * @param request - GetCacheReserveSpecificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCacheReserveSpecificationResponse
   */
  async getCacheReserveSpecificationWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCacheReserveSpecificationResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCacheReserveSpecification",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCacheReserveSpecificationResponse>(await this.callApi(params, req, runtime), new GetCacheReserveSpecificationResponse({}));
  }

  /**
   * 查询缓存保持实例规格
   * @returns GetCacheReserveSpecificationResponse
   */
  async getCacheReserveSpecification(): Promise<GetCacheReserveSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCacheReserveSpecificationWithOptions(runtime);
  }

  /**
   * GetErService
   * 
   * @param request - GetErServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErServiceResponse
   */
  async getErServiceWithOptions(request: GetErServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetErServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetErService",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetErServiceResponse>(await this.callApi(params, req, runtime), new GetErServiceResponse({}));
  }

  /**
   * GetErService
   * 
   * @param request - GetErServiceRequest
   * @returns GetErServiceResponse
   */
  async getErService(request: GetErServiceRequest): Promise<GetErServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getErServiceWithOptions(request, runtime);
  }

  /**
   * 查询Key-Value对的某个Key值
   * 
   * @param request - GetKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvResponse
   */
  async getKvWithOptions(request: GetKvRequest, runtime: $Util.RuntimeOptions): Promise<GetKvResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKvResponse>(await this.callApi(params, req, runtime), new GetKvResponse({}));
  }

  /**
   * 查询Key-Value对的某个Key值
   * 
   * @param request - GetKvRequest
   * @returns GetKvResponse
   */
  async getKv(request: GetKvRequest): Promise<GetKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKvWithOptions(request, runtime);
  }

  /**
   * 列出账号下的NS
   * 
   * @param request - GetKvAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvAccountResponse
   */
  async getKvAccountWithOptions(runtime: $Util.RuntimeOptions): Promise<GetKvAccountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetKvAccount",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKvAccountResponse>(await this.callApi(params, req, runtime), new GetKvAccountResponse({}));
  }

  /**
   * 列出账号下的NS
   * @returns GetKvAccountResponse
   */
  async getKvAccount(): Promise<GetKvAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKvAccountWithOptions(runtime);
  }

  /**
   * 查询Namespace信息
   * 
   * @param request - GetKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvNamespaceResponse
   */
  async getKvNamespaceWithOptions(request: GetKvNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<GetKvNamespaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKvNamespaceResponse>(await this.callApi(params, req, runtime), new GetKvNamespaceResponse({}));
  }

  /**
   * 查询Namespace信息
   * 
   * @param request - GetKvNamespaceRequest
   * @returns GetKvNamespaceResponse
   */
  async getKvNamespace(request: GetKvNamespaceRequest): Promise<GetKvNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKvNamespaceWithOptions(request, runtime);
  }

  /**
   * 获取单个自定义列表
   * 
   * @param request - GetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListResponse
   */
  async getListWithOptions(request: GetListRequest, runtime: $Util.RuntimeOptions): Promise<GetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetListResponse>(await this.callApi(params, req, runtime), new GetListResponse({}));
  }

  /**
   * 获取单个自定义列表
   * 
   * @param request - GetListRequest
   * @returns GetListResponse
   */
  async getList(request: GetListRequest): Promise<GetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListWithOptions(request, runtime);
  }

  /**
   * 获取单个自定义响应页面详情
   * 
   * @param request - GetPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageResponse
   */
  async getPageWithOptions(request: GetPageRequest, runtime: $Util.RuntimeOptions): Promise<GetPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPageResponse>(await this.callApi(params, req, runtime), new GetPageResponse({}));
  }

  /**
   * 获取单个自定义响应页面详情
   * 
   * @param request - GetPageRequest
   * @returns GetPageResponse
   */
  async getPage(request: GetPageRequest): Promise<GetPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPageWithOptions(request, runtime);
  }

  /**
   * 获取刷新Quota
   * 
   * @param request - GetPurgeQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurgeQuotaResponse
   */
  async getPurgeQuotaWithOptions(request: GetPurgeQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetPurgeQuotaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPurgeQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPurgeQuotaResponse>(await this.callApi(params, req, runtime), new GetPurgeQuotaResponse({}));
  }

  /**
   * 获取刷新Quota
   * 
   * @param request - GetPurgeQuotaRequest
   * @returns GetPurgeQuotaResponse
   */
  async getPurgeQuota(request: GetPurgeQuotaRequest): Promise<GetPurgeQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPurgeQuotaWithOptions(request, runtime);
  }

  /**
   * ub日志字段列表接口
   * 
   * @param request - GetRealtimeDeliveryFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeDeliveryFieldResponse
   */
  async getRealtimeDeliveryFieldWithOptions(request: GetRealtimeDeliveryFieldRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeDeliveryFieldResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealtimeDeliveryField",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealtimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new GetRealtimeDeliveryFieldResponse({}));
  }

  /**
   * ub日志字段列表接口
   * 
   * @param request - GetRealtimeDeliveryFieldRequest
   * @returns GetRealtimeDeliveryFieldResponse
   */
  async getRealtimeDeliveryField(request: GetRealtimeDeliveryFieldRequest): Promise<GetRealtimeDeliveryFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
   * 查询单个记录信息
   * 
   * @param request - GetRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordResponse
   */
  async getRecordWithOptions(request: GetRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRecordResponse>(await this.callApi(params, req, runtime), new GetRecordResponse({}));
  }

  /**
   * 查询单个记录信息
   * 
   * @param request - GetRecordRequest
   * @returns GetRecordResponse
   */
  async getRecord(request: GetRecordRequest): Promise<GetRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordWithOptions(request, runtime);
  }

  /**
   * 查询单个定时预热任务
   * 
   * @param request - GetScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledPreloadJobResponse
   */
  async getScheduledPreloadJobWithOptions(request: GetScheduledPreloadJobRequest, runtime: $Util.RuntimeOptions): Promise<GetScheduledPreloadJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new GetScheduledPreloadJobResponse({}));
  }

  /**
   * 查询单个定时预热任务
   * 
   * @param request - GetScheduledPreloadJobRequest
   * @returns GetScheduledPreloadJobResponse
   */
  async getScheduledPreloadJob(request: GetScheduledPreloadJobRequest): Promise<GetScheduledPreloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * 查询单个站点信息
   * 
   * @param request - GetSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteResponse
   */
  async getSiteWithOptions(request: GetSiteRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteResponse>(await this.callApi(params, req, runtime), new GetSiteResponse({}));
  }

  /**
   * 查询单个站点信息
   * 
   * @param request - GetSiteRequest
   * @returns GetSiteResponse
   */
  async getSite(request: GetSiteRequest): Promise<GetSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteWithOptions(request, runtime);
  }

  /**
   * 查询当前NS列表
   * 
   * @param request - GetSiteCurrentNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteCurrentNSResponse
   */
  async getSiteCurrentNSWithOptions(request: GetSiteCurrentNSRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteCurrentNSResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSiteCurrentNS",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteCurrentNSResponse>(await this.callApi(params, req, runtime), new GetSiteCurrentNSResponse({}));
  }

  /**
   * 查询当前NS列表
   * 
   * @param request - GetSiteCurrentNSRequest
   * @returns GetSiteCurrentNSResponse
   */
  async getSiteCurrentNS(request: GetSiteCurrentNSRequest): Promise<GetSiteCurrentNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteCurrentNSWithOptions(request, runtime);
  }

  /**
   * 获取自定义字段
   * 
   * @param request - GetSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteCustomLogResponse
   */
  async getSiteCustomLogWithOptions(request: GetSiteCustomLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteCustomLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteCustomLogResponse>(await this.callApi(params, req, runtime), new GetSiteCustomLogResponse({}));
  }

  /**
   * 获取自定义字段
   * 
   * @param request - GetSiteCustomLogRequest
   * @returns GetSiteCustomLogResponse
   */
  async getSiteCustomLog(request: GetSiteCustomLogRequest): Promise<GetSiteCustomLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * 获取一个实时日志任务投递
   * 
   * @param request - GetSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteDeliveryTaskResponse
   */
  async getSiteDeliveryTaskWithOptions(request: GetSiteDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteDeliveryTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new GetSiteDeliveryTaskResponse({}));
  }

  /**
   * 获取一个实时日志任务投递
   * 
   * @param request - GetSiteDeliveryTaskRequest
   * @returns GetSiteDeliveryTaskResponse
   */
  async getSiteDeliveryTask(request: GetSiteDeliveryTaskRequest): Promise<GetSiteDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 获取日志投递任务quota数
   * 
   * @param request - GetSiteLogDeliveryQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteLogDeliveryQuotaResponse
   */
  async getSiteLogDeliveryQuotaWithOptions(request: GetSiteLogDeliveryQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteLogDeliveryQuotaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSiteLogDeliveryQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteLogDeliveryQuotaResponse>(await this.callApi(params, req, runtime), new GetSiteLogDeliveryQuotaResponse({}));
  }

  /**
   * 获取日志投递任务quota数
   * 
   * @param request - GetSiteLogDeliveryQuotaRequest
   * @returns GetSiteLogDeliveryQuotaResponse
   */
  async getSiteLogDeliveryQuota(request: GetSiteLogDeliveryQuotaRequest): Promise<GetSiteLogDeliveryQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteLogDeliveryQuotaWithOptions(request, runtime);
  }

  /**
   * 获取站点WAF配置
   * 
   * @param request - GetSiteWafSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteWafSettingsResponse
   */
  async getSiteWafSettingsWithOptions(request: GetSiteWafSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetSiteWafSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSiteWafSettings",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSiteWafSettingsResponse>(await this.callApi(params, req, runtime), new GetSiteWafSettingsResponse({}));
  }

  /**
   * 获取站点WAF配置
   * 
   * @param request - GetSiteWafSettingsRequest
   * @returns GetSiteWafSettingsResponse
   */
  async getSiteWafSettings(request: GetSiteWafSettingsRequest): Promise<GetSiteWafSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSiteWafSettingsWithOptions(request, runtime);
  }

  /**
   * 文件上传任务查询接口
   * 
   * @param request - GetUploadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadTaskResponse
   */
  async getUploadTaskWithOptions(request: GetUploadTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadTaskResponse>(await this.callApi(params, req, runtime), new GetUploadTaskResponse({}));
  }

  /**
   * 文件上传任务查询接口
   * 
   * @param request - GetUploadTaskRequest
   * @returns GetUploadTaskResponse
   */
  async getUploadTask(request: GetUploadTaskRequest): Promise<GetUploadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadTaskWithOptions(request, runtime);
  }

  /**
   * 获取一个用户粒度任务投递
   * 
   * @param request - GetUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDeliveryTaskResponse
   */
  async getUserDeliveryTaskWithOptions(request: GetUserDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetUserDeliveryTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new GetUserDeliveryTaskResponse({}));
  }

  /**
   * 获取一个用户粒度任务投递
   * 
   * @param request - GetUserDeliveryTaskRequest
   * @returns GetUserDeliveryTaskResponse
   */
  async getUserDeliveryTask(request: GetUserDeliveryTaskRequest): Promise<GetUserDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 获取日志投递任务用户quota数
   * 
   * @param request - GetUserLogDeliveryQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserLogDeliveryQuotaResponse
   */
  async getUserLogDeliveryQuotaWithOptions(request: GetUserLogDeliveryQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetUserLogDeliveryQuotaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserLogDeliveryQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserLogDeliveryQuotaResponse>(await this.callApi(params, req, runtime), new GetUserLogDeliveryQuotaResponse({}));
  }

  /**
   * 获取日志投递任务用户quota数
   * 
   * @param request - GetUserLogDeliveryQuotaRequest
   * @returns GetUserLogDeliveryQuotaResponse
   */
  async getUserLogDeliveryQuota(request: GetUserLogDeliveryQuotaRequest): Promise<GetUserLogDeliveryQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserLogDeliveryQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - GetWafBotAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafBotAppKeyResponse
   */
  async getWafBotAppKeyWithOptions(runtime: $Util.RuntimeOptions): Promise<GetWafBotAppKeyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetWafBotAppKey",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWafBotAppKeyResponse>(await this.callApi(params, req, runtime), new GetWafBotAppKeyResponse({}));
  }

  /**
   * @returns GetWafBotAppKeyResponse
   */
  async getWafBotAppKey(): Promise<GetWafBotAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWafBotAppKeyWithOptions(runtime);
  }

  /**
   * 将匹配项转换为表达式
   * 
   * @param request - GetWafFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafFilterResponse
   */
  async getWafFilterWithOptions(request: GetWafFilterRequest, runtime: $Util.RuntimeOptions): Promise<GetWafFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWafFilter",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWafFilterResponse>(await this.callApi(params, req, runtime), new GetWafFilterResponse({}));
  }

  /**
   * 将匹配项转换为表达式
   * 
   * @param request - GetWafFilterRequest
   * @returns GetWafFilterResponse
   */
  async getWafFilter(request: GetWafFilterRequest): Promise<GetWafFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWafFilterWithOptions(request, runtime);
  }

  /**
   * 获取WAF配额详情
   * 
   * @param request - GetWafQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafQuotaResponse
   */
  async getWafQuotaWithOptions(request: GetWafQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetWafQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paths)) {
      query["Paths"] = request.paths;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWafQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWafQuotaResponse>(await this.callApi(params, req, runtime), new GetWafQuotaResponse({}));
  }

  /**
   * 获取WAF配额详情
   * 
   * @param request - GetWafQuotaRequest
   * @returns GetWafQuotaResponse
   */
  async getWafQuota(request: GetWafQuotaRequest): Promise<GetWafQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWafQuotaWithOptions(request, runtime);
  }

  /**
   * 获取单个WAF规则详情
   * 
   * @param request - GetWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafRuleResponse
   */
  async getWafRuleWithOptions(request: GetWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetWafRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWafRuleResponse>(await this.callApi(params, req, runtime), new GetWafRuleResponse({}));
  }

  /**
   * 获取单个WAF规则详情
   * 
   * @param request - GetWafRuleRequest
   * @returns GetWafRuleResponse
   */
  async getWafRule(request: GetWafRuleRequest): Promise<GetWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWafRuleWithOptions(request, runtime);
  }

  /**
   * 获取WAF规则集详情
   * 
   * @param request - GetWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafRulesetResponse
   */
  async getWafRulesetWithOptions(request: GetWafRulesetRequest, runtime: $Util.RuntimeOptions): Promise<GetWafRulesetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWafRulesetResponse>(await this.callApi(params, req, runtime), new GetWafRulesetResponse({}));
  }

  /**
   * 获取WAF规则集详情
   * 
   * @param request - GetWafRulesetRequest
   * @returns GetWafRulesetResponse
   */
  async getWafRuleset(request: GetWafRulesetRequest): Promise<GetWafRulesetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWafRulesetWithOptions(request, runtime);
  }

  /**
   * 查询缓存保持实例列表
   * 
   * @param request - ListCacheReserveInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCacheReserveInstancesResponse
   */
  async listCacheReserveInstancesWithOptions(request: ListCacheReserveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListCacheReserveInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCacheReserveInstances",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCacheReserveInstancesResponse>(await this.callApi(params, req, runtime), new ListCacheReserveInstancesResponse({}));
  }

  /**
   * 查询缓存保持实例列表
   * 
   * @param request - ListCacheReserveInstancesRequest
   * @returns ListCacheReserveInstancesResponse
   */
  async listCacheReserveInstances(request: ListCacheReserveInstancesRequest): Promise<ListCacheReserveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCacheReserveInstancesWithOptions(request, runtime);
  }

  /**
   * 查询站点下客户端证书列表
   * 
   * @param request - ListClientCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientCertificatesResponse
   */
  async listClientCertificatesWithOptions(request: ListClientCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListClientCertificatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClientCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClientCertificatesResponse>(await this.callApi(params, req, runtime), new ListClientCertificatesResponse({}));
  }

  /**
   * 查询站点下客户端证书列表
   * 
   * @param request - ListClientCertificatesRequest
   * @returns ListClientCertificatesResponse
   */
  async listClientCertificates(request: ListClientCertificatesRequest): Promise<ListClientCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientCertificatesWithOptions(request, runtime);
  }

  /**
   * 获取一个边缘容器应用的全部域名记录
   * 
   * @param request - ListEdgeContainerAppRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerAppRecordsResponse
   */
  async listEdgeContainerAppRecordsWithOptions(request: ListEdgeContainerAppRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListEdgeContainerAppRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEdgeContainerAppRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEdgeContainerAppRecordsResponse>(await this.callApi(params, req, runtime), new ListEdgeContainerAppRecordsResponse({}));
  }

  /**
   * 获取一个边缘容器应用的全部域名记录
   * 
   * @param request - ListEdgeContainerAppRecordsRequest
   * @returns ListEdgeContainerAppRecordsResponse
   */
  async listEdgeContainerAppRecords(request: ListEdgeContainerAppRecordsRequest): Promise<ListEdgeContainerAppRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeContainerAppRecordsWithOptions(request, runtime);
  }

  /**
   * 获取用户全部边缘容器应用
   * 
   * @param request - ListEdgeContainerAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerAppsResponse
   */
  async listEdgeContainerAppsWithOptions(request: ListEdgeContainerAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListEdgeContainerAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEdgeContainerApps",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEdgeContainerAppsResponse>(await this.callApi(params, req, runtime), new ListEdgeContainerAppsResponse({}));
  }

  /**
   * 获取用户全部边缘容器应用
   * 
   * @param request - ListEdgeContainerAppsRequest
   * @returns ListEdgeContainerAppsResponse
   */
  async listEdgeContainerApps(request: ListEdgeContainerAppsRequest): Promise<ListEdgeContainerAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeContainerAppsWithOptions(request, runtime);
  }

  /**
   * 查询站点的边缘容器记录
   * 
   * @param request - ListEdgeContainerRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerRecordsResponse
   */
  async listEdgeContainerRecordsWithOptions(request: ListEdgeContainerRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListEdgeContainerRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEdgeContainerRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEdgeContainerRecordsResponse>(await this.callApi(params, req, runtime), new ListEdgeContainerRecordsResponse({}));
  }

  /**
   * 查询站点的边缘容器记录
   * 
   * @param request - ListEdgeContainerRecordsRequest
   * @returns ListEdgeContainerRecordsResponse
   */
  async listEdgeContainerRecords(request: ListEdgeContainerRecordsRequest): Promise<ListEdgeContainerRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeContainerRecordsWithOptions(request, runtime);
  }

  /**
   * 查询用户可购买的边缘函数的套餐
   * 
   * @param request - ListEdgeRoutinePlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeRoutinePlansResponse
   */
  async listEdgeRoutinePlansWithOptions(runtime: $Util.RuntimeOptions): Promise<ListEdgeRoutinePlansResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListEdgeRoutinePlans",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEdgeRoutinePlansResponse>(await this.callApi(params, req, runtime), new ListEdgeRoutinePlansResponse({}));
  }

  /**
   * 查询用户可购买的边缘函数的套餐
   * @returns ListEdgeRoutinePlansResponse
   */
  async listEdgeRoutinePlans(): Promise<ListEdgeRoutinePlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeRoutinePlansWithOptions(runtime);
  }

  /**
   * 查询站点的边缘路由记录
   * 
   * @param request - ListEdgeRoutineRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeRoutineRecordsResponse
   */
  async listEdgeRoutineRecordsWithOptions(request: ListEdgeRoutineRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListEdgeRoutineRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEdgeRoutineRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEdgeRoutineRecordsResponse>(await this.callApi(params, req, runtime), new ListEdgeRoutineRecordsResponse({}));
  }

  /**
   * 查询站点的边缘路由记录
   * 
   * @param request - ListEdgeRoutineRecordsRequest
   * @returns ListEdgeRoutineRecordsResponse
   */
  async listEdgeRoutineRecords(request: ListEdgeRoutineRecordsRequest): Promise<ListEdgeRoutineRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeRoutineRecordsWithOptions(request, runtime);
  }

  /**
   * 查询实例或者站点的quota值
   * 
   * @param request - ListInstanceQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceQuotasResponse
   */
  async listInstanceQuotasWithOptions(request: ListInstanceQuotasRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceQuotasResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceQuotas",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceQuotasResponse>(await this.callApi(params, req, runtime), new ListInstanceQuotasResponse({}));
  }

  /**
   * 查询实例或者站点的quota值
   * 
   * @param request - ListInstanceQuotasRequest
   * @returns ListInstanceQuotasResponse
   */
  async listInstanceQuotas(request: ListInstanceQuotasRequest): Promise<ListInstanceQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceQuotasWithOptions(request, runtime);
  }

  /**
   * 查询功能quota和用量
   * 
   * @param request - ListInstanceQuotasWithUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceQuotasWithUsageResponse
   */
  async listInstanceQuotasWithUsageWithOptions(request: ListInstanceQuotasWithUsageRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceQuotasWithUsageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceQuotasWithUsage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceQuotasWithUsageResponse>(await this.callApi(params, req, runtime), new ListInstanceQuotasWithUsageResponse({}));
  }

  /**
   * 查询功能quota和用量
   * 
   * @param request - ListInstanceQuotasWithUsageRequest
   * @returns ListInstanceQuotasWithUsageResponse
   */
  async listInstanceQuotasWithUsage(request: ListInstanceQuotasWithUsageRequest): Promise<ListInstanceQuotasWithUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceQuotasWithUsageWithOptions(request, runtime);
  }

  /**
   * 遍历Namespace的Key值
   * 
   * @param request - ListKvsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKvsResponse
   */
  async listKvsWithOptions(request: ListKvsRequest, runtime: $Util.RuntimeOptions): Promise<ListKvsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKvs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListKvsResponse>(await this.callApi(params, req, runtime), new ListKvsResponse({}));
  }

  /**
   * 遍历Namespace的Key值
   * 
   * @param request - ListKvsRequest
   * @returns ListKvsResponse
   */
  async listKvs(request: ListKvsRequest): Promise<ListKvsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKvsWithOptions(request, runtime);
  }

  /**
   * 列举自定义列表
   * 
   * @param tmpReq - ListListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListsResponse
   */
  async listListsWithOptions(tmpReq: ListListsRequest, runtime: $Util.RuntimeOptions): Promise<ListListsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListListsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLists",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListsResponse>(await this.callApi(params, req, runtime), new ListListsResponse({}));
  }

  /**
   * 列举自定义列表
   * 
   * @param request - ListListsRequest
   * @returns ListListsResponse
   */
  async listLists(request: ListListsRequest): Promise<ListListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListsWithOptions(request, runtime);
  }

  /**
   * 查询负载均衡区域列表
   * 
   * @param request - ListLoadBalancerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancerRegionsResponse
   */
  async listLoadBalancerRegionsWithOptions(request: ListLoadBalancerRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListLoadBalancerRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLoadBalancerRegions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLoadBalancerRegionsResponse>(await this.callApi(params, req, runtime), new ListLoadBalancerRegionsResponse({}));
  }

  /**
   * 查询负载均衡区域列表
   * 
   * @param request - ListLoadBalancerRegionsRequest
   * @returns ListLoadBalancerRegionsResponse
   */
  async listLoadBalancerRegions(request: ListLoadBalancerRegionsRequest): Promise<ListLoadBalancerRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLoadBalancerRegionsWithOptions(request, runtime);
  }

  /**
   * 列举自定义托管规则组
   * 
   * @param request - ListManagedRulesGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManagedRulesGroupsResponse
   */
  async listManagedRulesGroupsWithOptions(request: ListManagedRulesGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListManagedRulesGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListManagedRulesGroups",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListManagedRulesGroupsResponse>(await this.callApi(params, req, runtime), new ListManagedRulesGroupsResponse({}));
  }

  /**
   * 列举自定义托管规则组
   * 
   * @param request - ListManagedRulesGroupsRequest
   * @returns ListManagedRulesGroupsResponse
   */
  async listManagedRulesGroups(request: ListManagedRulesGroupsRequest): Promise<ListManagedRulesGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listManagedRulesGroupsWithOptions(request, runtime);
  }

  /**
   * 列举自定义响应页面
   * 
   * @param request - ListPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPagesResponse
   */
  async listPagesWithOptions(request: ListPagesRequest, runtime: $Util.RuntimeOptions): Promise<ListPagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPages",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPagesResponse>(await this.callApi(params, req, runtime), new ListPagesResponse({}));
  }

  /**
   * 列举自定义响应页面
   * 
   * @param request - ListPagesRequest
   * @returns ListPagesResponse
   */
  async listPages(request: ListPagesRequest): Promise<ListPagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPagesWithOptions(request, runtime);
  }

  /**
   * 查询站点下的记录列表
   * 
   * @param request - ListRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecordsResponse
   */
  async listRecordsWithOptions(request: ListRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRecordsResponse>(await this.callApi(params, req, runtime), new ListRecordsResponse({}));
  }

  /**
   * 查询站点下的记录列表
   * 
   * @param request - ListRecordsRequest
   * @returns ListRecordsResponse
   */
  async listRecords(request: ListRecordsRequest): Promise<ListRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecordsWithOptions(request, runtime);
  }

  /**
   * 列出指定任务下的执行计划
   * 
   * @param request - ListScheduledPreloadExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPreloadExecutionsResponse
   */
  async listScheduledPreloadExecutionsWithOptions(request: ListScheduledPreloadExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduledPreloadExecutionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduledPreloadExecutions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScheduledPreloadExecutionsResponse>(await this.callApi(params, req, runtime), new ListScheduledPreloadExecutionsResponse({}));
  }

  /**
   * 列出指定任务下的执行计划
   * 
   * @param request - ListScheduledPreloadExecutionsRequest
   * @returns ListScheduledPreloadExecutionsResponse
   */
  async listScheduledPreloadExecutions(request: ListScheduledPreloadExecutionsRequest): Promise<ListScheduledPreloadExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduledPreloadExecutionsWithOptions(request, runtime);
  }

  /**
   * 列出定时预热任务列表
   * 
   * @param request - ListScheduledPreloadJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPreloadJobsResponse
   */
  async listScheduledPreloadJobsWithOptions(request: ListScheduledPreloadJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduledPreloadJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduledPreloadJobs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScheduledPreloadJobsResponse>(await this.callApi(params, req, runtime), new ListScheduledPreloadJobsResponse({}));
  }

  /**
   * 列出定时预热任务列表
   * 
   * @param request - ListScheduledPreloadJobsRequest
   * @returns ListScheduledPreloadJobsResponse
   */
  async listScheduledPreloadJobs(request: ListScheduledPreloadJobsRequest): Promise<ListScheduledPreloadJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduledPreloadJobsWithOptions(request, runtime);
  }

  /**
   * 列出全部任务投递
   * 
   * @param request - ListSiteDeliveryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSiteDeliveryTasksResponse
   */
  async listSiteDeliveryTasksWithOptions(request: ListSiteDeliveryTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSiteDeliveryTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSiteDeliveryTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSiteDeliveryTasksResponse>(await this.callApi(params, req, runtime), new ListSiteDeliveryTasksResponse({}));
  }

  /**
   * 列出全部任务投递
   * 
   * @param request - ListSiteDeliveryTasksRequest
   * @returns ListSiteDeliveryTasksResponse
   */
  async listSiteDeliveryTasks(request: ListSiteDeliveryTasksRequest): Promise<ListSiteDeliveryTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSiteDeliveryTasksWithOptions(request, runtime);
  }

  /**
   * 查询站点列表
   * 
   * @param tmpReq - ListSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSitesResponse
   */
  async listSitesWithOptions(tmpReq: ListSitesRequest, runtime: $Util.RuntimeOptions): Promise<ListSitesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSitesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagFilter)) {
      request.tagFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagFilter, "TagFilter", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSites",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSitesResponse>(await this.callApi(params, req, runtime), new ListSitesResponse({}));
  }

  /**
   * 查询站点列表
   * 
   * @param request - ListSitesRequest
   * @returns ListSitesResponse
   */
  async listSites(request: ListSitesRequest): Promise<ListSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSitesWithOptions(request, runtime);
  }

  /**
   * 查询云资源已经绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxItem)) {
      query["MaxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询云资源已经绑定的标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 获取文件上传任务
   * 
   * @param request - ListUploadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUploadTasksResponse
   */
  async listUploadTasksWithOptions(request: ListUploadTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListUploadTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUploadTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUploadTasksResponse>(await this.callApi(params, req, runtime), new ListUploadTasksResponse({}));
  }

  /**
   * 获取文件上传任务
   * 
   * @param request - ListUploadTasksRequest
   * @returns ListUploadTasksResponse
   */
  async listUploadTasks(request: ListUploadTasksRequest): Promise<ListUploadTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUploadTasksWithOptions(request, runtime);
  }

  /**
   * 列出用户全部任务投递
   * 
   * @param request - ListUserDeliveryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDeliveryTasksResponse
   */
  async listUserDeliveryTasksWithOptions(request: ListUserDeliveryTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDeliveryTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserDeliveryTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserDeliveryTasksResponse>(await this.callApi(params, req, runtime), new ListUserDeliveryTasksResponse({}));
  }

  /**
   * 列出用户全部任务投递
   * 
   * @param request - ListUserDeliveryTasksRequest
   * @returns ListUserDeliveryTasksResponse
   */
  async listUserDeliveryTasks(request: ListUserDeliveryTasksRequest): Promise<ListUserDeliveryTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDeliveryTasksWithOptions(request, runtime);
  }

  /**
   * 查询该用户下可用的已购套餐实例
   * 
   * @param request - ListUserRatePlanInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserRatePlanInstancesResponse
   */
  async listUserRatePlanInstancesWithOptions(request: ListUserRatePlanInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserRatePlanInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserRatePlanInstances",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserRatePlanInstancesResponse>(await this.callApi(params, req, runtime), new ListUserRatePlanInstancesResponse({}));
  }

  /**
   * 查询该用户下可用的已购套餐实例
   * 
   * @param request - ListUserRatePlanInstancesRequest
   * @returns ListUserRatePlanInstancesResponse
   */
  async listUserRatePlanInstances(request: ListUserRatePlanInstancesRequest): Promise<ListUserRatePlanInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserRatePlanInstancesWithOptions(request, runtime);
  }

  /**
   * 列举WAF托管规则
   * 
   * @param tmpReq - ListWafManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafManagedRulesResponse
   */
  async listWafManagedRulesWithOptions(tmpReq: ListWafManagedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListWafManagedRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWafManagedRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafManagedRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafManagedRulesResponse>(await this.callApi(params, req, runtime), new ListWafManagedRulesResponse({}));
  }

  /**
   * 列举WAF托管规则
   * 
   * @param request - ListWafManagedRulesRequest
   * @returns ListWafManagedRulesResponse
   */
  async listWafManagedRules(request: ListWafManagedRulesRequest): Promise<ListWafManagedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafManagedRulesWithOptions(request, runtime);
  }

  /**
   * 列举WAF阶段
   * 
   * @param request - ListWafPhasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafPhasesResponse
   */
  async listWafPhasesWithOptions(request: ListWafPhasesRequest, runtime: $Util.RuntimeOptions): Promise<ListWafPhasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafPhases",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafPhasesResponse>(await this.callApi(params, req, runtime), new ListWafPhasesResponse({}));
  }

  /**
   * 列举WAF阶段
   * 
   * @param request - ListWafPhasesRequest
   * @returns ListWafPhasesResponse
   */
  async listWafPhases(request: ListWafPhasesRequest): Promise<ListWafPhasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafPhasesWithOptions(request, runtime);
  }

  /**
   * 列举WAF规则
   * 
   * @param tmpReq - ListWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafRulesResponse
   */
  async listWafRulesWithOptions(tmpReq: ListWafRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListWafRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafRulesResponse>(await this.callApi(params, req, runtime), new ListWafRulesResponse({}));
  }

  /**
   * 列举WAF规则
   * 
   * @param request - ListWafRulesRequest
   * @returns ListWafRulesResponse
   */
  async listWafRules(request: ListWafRulesRequest): Promise<ListWafRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafRulesWithOptions(request, runtime);
  }

  /**
   * 列举WAF规则集
   * 
   * @param tmpReq - ListWafRulesetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafRulesetsResponse
   */
  async listWafRulesetsWithOptions(tmpReq: ListWafRulesetsRequest, runtime: $Util.RuntimeOptions): Promise<ListWafRulesetsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWafRulesetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafRulesets",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafRulesetsResponse>(await this.callApi(params, req, runtime), new ListWafRulesetsResponse({}));
  }

  /**
   * 列举WAF规则集
   * 
   * @param request - ListWafRulesetsRequest
   * @returns ListWafRulesetsResponse
   */
  async listWafRulesets(request: ListWafRulesetsRequest): Promise<ListWafRulesetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafRulesetsWithOptions(request, runtime);
  }

  /**
   * 列举WAF模板规则
   * 
   * @param tmpReq - ListWafTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafTemplateRulesResponse
   */
  async listWafTemplateRulesWithOptions(tmpReq: ListWafTemplateRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListWafTemplateRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWafTemplateRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafTemplateRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafTemplateRulesResponse>(await this.callApi(params, req, runtime), new ListWafTemplateRulesResponse({}));
  }

  /**
   * 列举WAF模板规则
   * 
   * @param request - ListWafTemplateRulesRequest
   * @returns ListWafTemplateRulesResponse
   */
  async listWafTemplateRules(request: ListWafTemplateRulesRequest): Promise<ListWafTemplateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafTemplateRulesWithOptions(request, runtime);
  }

  /**
   * 列举WAF规则使用情况
   * 
   * @param request - ListWafUsageOfRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafUsageOfRulesResponse
   */
  async listWafUsageOfRulesWithOptions(request: ListWafUsageOfRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListWafUsageOfRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWafUsageOfRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWafUsageOfRulesResponse>(await this.callApi(params, req, runtime), new ListWafUsageOfRulesResponse({}));
  }

  /**
   * 列举WAF规则使用情况
   * 
   * @param request - ListWafUsageOfRulesRequest
   * @returns ListWafUsageOfRulesResponse
   */
  async listWafUsageOfRules(request: ListWafUsageOfRulesRequest): Promise<ListWafUsageOfRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWafUsageOfRulesWithOptions(request, runtime);
  }

  /**
   * 查询等候室事件
   * 
   * @param request - ListWaitingRoomEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomEventsResponse
   */
  async listWaitingRoomEventsWithOptions(request: ListWaitingRoomEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListWaitingRoomEventsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWaitingRoomEvents",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWaitingRoomEventsResponse>(await this.callApi(params, req, runtime), new ListWaitingRoomEventsResponse({}));
  }

  /**
   * 查询等候室事件
   * 
   * @param request - ListWaitingRoomEventsRequest
   * @returns ListWaitingRoomEventsResponse
   */
  async listWaitingRoomEvents(request: ListWaitingRoomEventsRequest): Promise<ListWaitingRoomEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWaitingRoomEventsWithOptions(request, runtime);
  }

  /**
   * 查询等候室绕过规则
   * 
   * @param request - ListWaitingRoomRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomRulesResponse
   */
  async listWaitingRoomRulesWithOptions(request: ListWaitingRoomRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListWaitingRoomRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWaitingRoomRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWaitingRoomRulesResponse>(await this.callApi(params, req, runtime), new ListWaitingRoomRulesResponse({}));
  }

  /**
   * 查询等候室绕过规则
   * 
   * @param request - ListWaitingRoomRulesRequest
   * @returns ListWaitingRoomRulesResponse
   */
  async listWaitingRoomRules(request: ListWaitingRoomRulesRequest): Promise<ListWaitingRoomRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWaitingRoomRulesWithOptions(request, runtime);
  }

  /**
   * 查询等候室
   * 
   * @param request - ListWaitingRoomsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomsResponse
   */
  async listWaitingRoomsWithOptions(request: ListWaitingRoomsRequest, runtime: $Util.RuntimeOptions): Promise<ListWaitingRoomsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWaitingRooms",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWaitingRoomsResponse>(await this.callApi(params, req, runtime), new ListWaitingRoomsResponse({}));
  }

  /**
   * 查询等候室
   * 
   * @param request - ListWaitingRoomsRequest
   * @returns ListWaitingRoomsResponse
   */
  async listWaitingRooms(request: ListWaitingRoomsRequest): Promise<ListWaitingRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWaitingRoomsWithOptions(request, runtime);
  }

  /**
   * 缓存预热
   * 
   * @param tmpReq - PreloadCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadCachesResponse
   */
  async preloadCachesWithOptions(tmpReq: PreloadCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadCachesResponse> {
    Util.validateModel(tmpReq);
    let request = new PreloadCachesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!Util.isUnset(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreloadCaches",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreloadCachesResponse>(await this.callApi(params, req, runtime), new PreloadCachesResponse({}));
  }

  /**
   * 缓存预热
   * 
   * @param request - PreloadCachesRequest
   * @returns PreloadCachesResponse
   */
  async preloadCaches(request: PreloadCachesRequest): Promise<PreloadCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadCachesWithOptions(request, runtime);
  }

  /**
   * 缓存刷新
   * 
   * @param tmpReq - PurgeCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeCachesResponse
   */
  async purgeCachesWithOptions(tmpReq: PurgeCachesRequest, runtime: $Util.RuntimeOptions): Promise<PurgeCachesResponse> {
    Util.validateModel(tmpReq);
    let request = new PurgeCachesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.edgeComputePurge)) {
      query["EdgeComputePurge"] = request.edgeComputePurge;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PurgeCaches",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PurgeCachesResponse>(await this.callApi(params, req, runtime), new PurgeCachesResponse({}));
  }

  /**
   * 缓存刷新
   * 
   * @param request - PurgeCachesRequest
   * @returns PurgeCachesResponse
   */
  async purgeCaches(request: PurgeCachesRequest): Promise<PurgeCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purgeCachesWithOptions(request, runtime);
  }

  /**
   * 设置Namespace的Key-Value对
   * 
   * @param request - PutKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutKvResponse
   */
  async putKvWithOptions(request: PutKvRequest, runtime: $Util.RuntimeOptions): Promise<PutKvResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.base64)) {
      query["Base64"] = request.base64;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.expirationTtl)) {
      query["ExpirationTtl"] = request.expirationTtl;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutKvResponse>(await this.callApi(params, req, runtime), new PutKvResponse({}));
  }

  /**
   * 设置Namespace的Key-Value对
   * 
   * @param request - PutKvRequest
   * @returns PutKvResponse
   */
  async putKv(request: PutKvRequest): Promise<PutKvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putKvWithOptions(request, runtime);
  }

  /**
   * 设置Namespace的Key-Value对，支持最大25M的Body
   * 
   * @param request - PutKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutKvWithHighCapacityResponse
   */
  async putKvWithHighCapacityWithOptions(request: PutKvWithHighCapacityRequest, runtime: $Util.RuntimeOptions): Promise<PutKvWithHighCapacityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new PutKvWithHighCapacityResponse({}));
  }

  /**
   * 设置Namespace的Key-Value对，支持最大25M的Body
   * 
   * @param request - PutKvWithHighCapacityRequest
   * @returns PutKvWithHighCapacityResponse
   */
  async putKvWithHighCapacity(request: PutKvWithHighCapacityRequest): Promise<PutKvWithHighCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putKvWithHighCapacityWithOptions(request, runtime);
  }

  async putKvWithHighCapacityAdvance(request: PutKvWithHighCapacityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<PutKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let putKvWithHighCapacityReq = new PutKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, putKvWithHighCapacityReq);
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      putKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let putKvWithHighCapacityResp = await this.putKvWithHighCapacityWithOptions(putKvWithHighCapacityReq, runtime);
    return putKvWithHighCapacityResp;
  }

  /**
   * 重置定时预热任务的进度，从头开始预热
   * 
   * @param request - ResetScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetScheduledPreloadJobResponse
   */
  async resetScheduledPreloadJobWithOptions(request: ResetScheduledPreloadJobRequest, runtime: $Util.RuntimeOptions): Promise<ResetScheduledPreloadJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new ResetScheduledPreloadJobResponse({}));
  }

  /**
   * 重置定时预热任务的进度，从头开始预热
   * 
   * @param request - ResetScheduledPreloadJobRequest
   * @returns ResetScheduledPreloadJobResponse
   */
  async resetScheduledPreloadJob(request: ResetScheduledPreloadJobRequest): Promise<ResetScheduledPreloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * 设置证书
   * 
   * @param request - SetCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCertificateResponse
   */
  async setCertificateWithOptions(request: SetCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.casId)) {
      body["CasId"] = request.casId;
    }

    if (!Util.isUnset(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.update)) {
      body["Update"] = request.update;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCertificateResponse>(await this.callApi(params, req, runtime), new SetCertificateResponse({}));
  }

  /**
   * 设置证书
   * 
   * @param request - SetCertificateRequest
   * @returns SetCertificateResponse
   */
  async setCertificate(request: SetCertificateRequest): Promise<SetCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCertificateWithOptions(request, runtime);
  }

  /**
   * 设置HTTP DDoS智能防护配置信息
   * 
   * @param request - SetHttpDDoSAttackIntelligentProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHttpDDoSAttackIntelligentProtectionResponse
   */
  async setHttpDDoSAttackIntelligentProtectionWithOptions(request: SetHttpDDoSAttackIntelligentProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetHttpDDoSAttackIntelligentProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aiMode)) {
      query["AiMode"] = request.aiMode;
    }

    if (!Util.isUnset(request.aiTemplate)) {
      query["AiTemplate"] = request.aiTemplate;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetHttpDDoSAttackIntelligentProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetHttpDDoSAttackIntelligentProtectionResponse>(await this.callApi(params, req, runtime), new SetHttpDDoSAttackIntelligentProtectionResponse({}));
  }

  /**
   * 设置HTTP DDoS智能防护配置信息
   * 
   * @param request - SetHttpDDoSAttackIntelligentProtectionRequest
   * @returns SetHttpDDoSAttackIntelligentProtectionResponse
   */
  async setHttpDDoSAttackIntelligentProtection(request: SetHttpDDoSAttackIntelligentProtectionRequest): Promise<SetHttpDDoSAttackIntelligentProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHttpDDoSAttackIntelligentProtectionWithOptions(request, runtime);
  }

  /**
   * 设置HTTP DDoS攻击防护配置信息
   * 
   * @param request - SetHttpDDoSAttackProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHttpDDoSAttackProtectionResponse
   */
  async setHttpDDoSAttackProtectionWithOptions(request: SetHttpDDoSAttackProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetHttpDDoSAttackProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalMode)) {
      query["GlobalMode"] = request.globalMode;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetHttpDDoSAttackProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetHttpDDoSAttackProtectionResponse>(await this.callApi(params, req, runtime), new SetHttpDDoSAttackProtectionResponse({}));
  }

  /**
   * 设置HTTP DDoS攻击防护配置信息
   * 
   * @param request - SetHttpDDoSAttackProtectionRequest
   * @returns SetHttpDDoSAttackProtectionResponse
   */
  async setHttpDDoSAttackProtection(request: SetHttpDDoSAttackProtectionRequest): Promise<SetHttpDDoSAttackProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHttpDDoSAttackProtectionWithOptions(request, runtime);
  }

  /**
   * 开始单个定时预热计划
   * 
   * @param request - StartScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartScheduledPreloadExecutionResponse
   */
  async startScheduledPreloadExecutionWithOptions(request: StartScheduledPreloadExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartScheduledPreloadExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new StartScheduledPreloadExecutionResponse({}));
  }

  /**
   * 开始单个定时预热计划
   * 
   * @param request - StartScheduledPreloadExecutionRequest
   * @returns StartScheduledPreloadExecutionResponse
   */
  async startScheduledPreloadExecution(request: StartScheduledPreloadExecutionRequest): Promise<StartScheduledPreloadExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * 停止单个定时预热计划
   * 
   * @param request - StopScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopScheduledPreloadExecutionResponse
   */
  async stopScheduledPreloadExecutionWithOptions(request: StopScheduledPreloadExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StopScheduledPreloadExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new StopScheduledPreloadExecutionResponse({}));
  }

  /**
   * 停止单个定时预热计划
   * 
   * @param request - StopScheduledPreloadExecutionRequest
   * @returns StopScheduledPreloadExecutionResponse
   */
  async stopScheduledPreloadExecution(request: StopScheduledPreloadExecutionRequest): Promise<StopScheduledPreloadExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * 将表达式转换为匹配项
   * 
   * @param request - TransformExpressionToMatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformExpressionToMatchResponse
   */
  async transformExpressionToMatchWithOptions(request: TransformExpressionToMatchRequest, runtime: $Util.RuntimeOptions): Promise<TransformExpressionToMatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransformExpressionToMatch",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransformExpressionToMatchResponse>(await this.callApi(params, req, runtime), new TransformExpressionToMatchResponse({}));
  }

  /**
   * 将表达式转换为匹配项
   * 
   * @param request - TransformExpressionToMatchRequest
   * @returns TransformExpressionToMatchResponse
   */
  async transformExpressionToMatch(request: TransformExpressionToMatchRequest): Promise<TransformExpressionToMatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformExpressionToMatchWithOptions(request, runtime);
  }

  /**
   * 将匹配项转换为表达式
   * 
   * @param tmpReq - TransformMatchToExpressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformMatchToExpressionResponse
   */
  async transformMatchToExpressionWithOptions(tmpReq: TransformMatchToExpressionRequest, runtime: $Util.RuntimeOptions): Promise<TransformMatchToExpressionResponse> {
    Util.validateModel(tmpReq);
    let request = new TransformMatchToExpressionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.match)) {
      request.matchShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.match, "Match", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.matchShrink)) {
      body["Match"] = request.matchShrink;
    }

    if (!Util.isUnset(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransformMatchToExpression",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransformMatchToExpressionResponse>(await this.callApi(params, req, runtime), new TransformMatchToExpressionResponse({}));
  }

  /**
   * 将匹配项转换为表达式
   * 
   * @param request - TransformMatchToExpressionRequest
   * @returns TransformMatchToExpressionResponse
   */
  async transformMatchToExpression(request: TransformMatchToExpressionRequest): Promise<TransformMatchToExpressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformMatchToExpressionWithOptions(request, runtime);
  }

  /**
   * 为资源列表统一解绑标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 为资源列表统一解绑标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改定制场景策略
   * 
   * @param request - UpdateCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomScenePolicyResponse
   */
  async updateCustomScenePolicyWithOptions(request: UpdateCustomScenePolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomScenePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new UpdateCustomScenePolicyResponse({}));
  }

  /**
   * 修改定制场景策略
   * 
   * @param request - UpdateCustomScenePolicyRequest
   * @returns UpdateCustomScenePolicyResponse
   */
  async updateCustomScenePolicy(request: UpdateCustomScenePolicyRequest): Promise<UpdateCustomScenePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * 重命名账号下的Namespace
   * 
   * @param request - UpdateKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKvNamespaceResponse
   */
  async updateKvNamespaceWithOptions(request: UpdateKvNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKvNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateKvNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateKvNamespaceResponse({}));
  }

  /**
   * 重命名账号下的Namespace
   * 
   * @param request - UpdateKvNamespaceRequest
   * @returns UpdateKvNamespaceResponse
   */
  async updateKvNamespace(request: UpdateKvNamespaceRequest): Promise<UpdateKvNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKvNamespaceWithOptions(request, runtime);
  }

  /**
   * 更新自定义列表
   * 
   * @param tmpReq - UpdateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListResponse
   */
  async updateListWithOptions(tmpReq: UpdateListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.itemsShrink)) {
      body["Items"] = request.itemsShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateListResponse>(await this.callApi(params, req, runtime), new UpdateListResponse({}));
  }

  /**
   * 更新自定义列表
   * 
   * @param request - UpdateListRequest
   * @returns UpdateListResponse
   */
  async updateList(request: UpdateListRequest): Promise<UpdateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListWithOptions(request, runtime);
  }

  /**
   * 更新自定义响应页面
   * 
   * @param request - UpdatePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePageResponse
   */
  async updatePageWithOptions(request: UpdatePageRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePageResponse>(await this.callApi(params, req, runtime), new UpdatePageResponse({}));
  }

  /**
   * 更新自定义响应页面
   * 
   * @param request - UpdatePageRequest
   * @returns UpdatePageResponse
   */
  async updatePage(request: UpdatePageRequest): Promise<UpdatePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePageWithOptions(request, runtime);
  }

  /**
   * 更新记录
   * 
   * @param tmpReq - UpdateRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordResponse
   */
  async updateRecordWithOptions(tmpReq: UpdateRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authConf)) {
      request.authConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConf, "AuthConf", "json");
    }

    if (!Util.isUnset(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!Util.isUnset(request.authConfShrink)) {
      query["AuthConf"] = request.authConfShrink;
    }

    if (!Util.isUnset(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!Util.isUnset(request.hostPolicy)) {
      query["HostPolicy"] = request.hostPolicy;
    }

    if (!Util.isUnset(request.proxied)) {
      query["Proxied"] = request.proxied;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordResponse>(await this.callApi(params, req, runtime), new UpdateRecordResponse({}));
  }

  /**
   * 更新记录
   * 
   * @param request - UpdateRecordRequest
   * @returns UpdateRecordResponse
   */
  async updateRecord(request: UpdateRecordRequest): Promise<UpdateRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordWithOptions(request, runtime);
  }

  /**
   * 更新单个定时预热计划
   * 
   * @param request - UpdateScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledPreloadExecutionResponse
   */
  async updateScheduledPreloadExecutionWithOptions(request: UpdateScheduledPreloadExecutionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduledPreloadExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      body["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.sliceLen)) {
      body["SliceLen"] = request.sliceLen;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new UpdateScheduledPreloadExecutionResponse({}));
  }

  /**
   * 更新单个定时预热计划
   * 
   * @param request - UpdateScheduledPreloadExecutionRequest
   * @returns UpdateScheduledPreloadExecutionResponse
   */
  async updateScheduledPreloadExecution(request: UpdateScheduledPreloadExecutionRequest): Promise<UpdateScheduledPreloadExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * 修改站点接入方式
   * 
   * @param request - UpdateSiteAccessTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteAccessTypeResponse
   */
  async updateSiteAccessTypeWithOptions(request: UpdateSiteAccessTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteAccessTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteAccessType",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteAccessTypeResponse>(await this.callApi(params, req, runtime), new UpdateSiteAccessTypeResponse({}));
  }

  /**
   * 修改站点接入方式
   * 
   * @param request - UpdateSiteAccessTypeRequest
   * @returns UpdateSiteAccessTypeResponse
   */
  async updateSiteAccessType(request: UpdateSiteAccessTypeRequest): Promise<UpdateSiteAccessTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteAccessTypeWithOptions(request, runtime);
  }

  /**
   * 更新站点加速区域
   * 
   * @param request - UpdateSiteCoverageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteCoverageResponse
   */
  async updateSiteCoverageWithOptions(request: UpdateSiteCoverageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteCoverageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteCoverage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteCoverageResponse>(await this.callApi(params, req, runtime), new UpdateSiteCoverageResponse({}));
  }

  /**
   * 更新站点加速区域
   * 
   * @param request - UpdateSiteCoverageRequest
   * @returns UpdateSiteCoverageResponse
   */
  async updateSiteCoverage(request: UpdateSiteCoverageRequest): Promise<UpdateSiteCoverageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteCoverageWithOptions(request, runtime);
  }

  /**
   * 修改自定义字段
   * 
   * @param tmpReq - UpdateSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteCustomLogResponse
   */
  async updateSiteCustomLogWithOptions(tmpReq: UpdateSiteCustomLogRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteCustomLogResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSiteCustomLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cookies)) {
      request.cookiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cookies, "Cookies", "json");
    }

    if (!Util.isUnset(tmpReq.requestHeaders)) {
      request.requestHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaders, "RequestHeaders", "json");
    }

    if (!Util.isUnset(tmpReq.responseHeaders)) {
      request.responseHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaders, "ResponseHeaders", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cookiesShrink)) {
      body["Cookies"] = request.cookiesShrink;
    }

    if (!Util.isUnset(request.requestHeadersShrink)) {
      body["RequestHeaders"] = request.requestHeadersShrink;
    }

    if (!Util.isUnset(request.responseHeadersShrink)) {
      body["ResponseHeaders"] = request.responseHeadersShrink;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteCustomLogResponse>(await this.callApi(params, req, runtime), new UpdateSiteCustomLogResponse({}));
  }

  /**
   * 修改自定义字段
   * 
   * @param request - UpdateSiteCustomLogRequest
   * @returns UpdateSiteCustomLogResponse
   */
  async updateSiteCustomLog(request: UpdateSiteCustomLogRequest): Promise<UpdateSiteCustomLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * 修改一个任务投递
   * 
   * @param request - UpdateSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteDeliveryTaskResponse
   */
  async updateSiteDeliveryTaskWithOptions(request: UpdateSiteDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteDeliveryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!Util.isUnset(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new UpdateSiteDeliveryTaskResponse({}));
  }

  /**
   * 修改一个任务投递
   * 
   * @param request - UpdateSiteDeliveryTaskRequest
   * @returns UpdateSiteDeliveryTaskResponse
   */
  async updateSiteDeliveryTask(request: UpdateSiteDeliveryTaskRequest): Promise<UpdateSiteDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 上下线一个任务投递
   * 
   * @param request - UpdateSiteDeliveryTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteDeliveryTaskStatusResponse
   */
  async updateSiteDeliveryTaskStatusWithOptions(request: UpdateSiteDeliveryTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteDeliveryTaskStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteDeliveryTaskStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteDeliveryTaskStatusResponse>(await this.callApi(params, req, runtime), new UpdateSiteDeliveryTaskStatusResponse({}));
  }

  /**
   * 上下线一个任务投递
   * 
   * @param request - UpdateSiteDeliveryTaskStatusRequest
   * @returns UpdateSiteDeliveryTaskStatusResponse
   */
  async updateSiteDeliveryTaskStatus(request: UpdateSiteDeliveryTaskStatusRequest): Promise<UpdateSiteDeliveryTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteDeliveryTaskStatusWithOptions(request, runtime);
  }

  /**
   * 修改站点自定义NS
   * 
   * @param request - UpdateSiteVanityNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteVanityNSResponse
   */
  async updateSiteVanityNSWithOptions(request: UpdateSiteVanityNSRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSiteVanityNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.vanityNSList)) {
      query["VanityNSList"] = request.vanityNSList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSiteVanityNS",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSiteVanityNSResponse>(await this.callApi(params, req, runtime), new UpdateSiteVanityNSResponse({}));
  }

  /**
   * 修改站点自定义NS
   * 
   * @param request - UpdateSiteVanityNSRequest
   * @returns UpdateSiteVanityNSResponse
   */
  async updateSiteVanityNS(request: UpdateSiteVanityNSRequest): Promise<UpdateSiteVanityNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSiteVanityNSWithOptions(request, runtime);
  }

  /**
   * 修改一个用户粒度任务投递
   * 
   * @param request - UpdateUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDeliveryTaskResponse
   */
  async updateUserDeliveryTaskWithOptions(request: UpdateUserDeliveryTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserDeliveryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!Util.isUnset(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new UpdateUserDeliveryTaskResponse({}));
  }

  /**
   * 修改一个用户粒度任务投递
   * 
   * @param request - UpdateUserDeliveryTaskRequest
   * @returns UpdateUserDeliveryTaskResponse
   */
  async updateUserDeliveryTask(request: UpdateUserDeliveryTaskRequest): Promise<UpdateUserDeliveryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 上下线一个用户任务投递
   * 
   * @param request - UpdateUserDeliveryTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDeliveryTaskStatusResponse
   */
  async updateUserDeliveryTaskStatusWithOptions(request: UpdateUserDeliveryTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserDeliveryTaskStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserDeliveryTaskStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserDeliveryTaskStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserDeliveryTaskStatusResponse({}));
  }

  /**
   * 上下线一个用户任务投递
   * 
   * @param request - UpdateUserDeliveryTaskStatusRequest
   * @returns UpdateUserDeliveryTaskStatusResponse
   */
  async updateUserDeliveryTaskStatus(request: UpdateUserDeliveryTaskStatusRequest): Promise<UpdateUserDeliveryTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDeliveryTaskStatusWithOptions(request, runtime);
  }

  /**
   * 更新WAF规则页面
   * 
   * @param tmpReq - UpdateWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWafRuleResponse
   */
  async updateWafRuleWithOptions(tmpReq: UpdateWafRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWafRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateWafRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.position)) {
      body["Position"] = request.position;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWafRuleResponse>(await this.callApi(params, req, runtime), new UpdateWafRuleResponse({}));
  }

  /**
   * 更新WAF规则页面
   * 
   * @param request - UpdateWafRuleRequest
   * @returns UpdateWafRuleResponse
   */
  async updateWafRule(request: UpdateWafRuleRequest): Promise<UpdateWafRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWafRuleWithOptions(request, runtime);
  }

  /**
   * 更新WAF规则集
   * 
   * @param request - UpdateWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWafRulesetResponse
   */
  async updateWafRulesetWithOptions(request: UpdateWafRulesetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWafRulesetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWafRulesetResponse>(await this.callApi(params, req, runtime), new UpdateWafRulesetResponse({}));
  }

  /**
   * 更新WAF规则集
   * 
   * @param request - UpdateWafRulesetRequest
   * @returns UpdateWafRulesetResponse
   */
  async updateWafRuleset(request: UpdateWafRulesetRequest): Promise<UpdateWafRulesetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWafRulesetWithOptions(request, runtime);
  }

  /**
   * 修改等候室
   * 
   * @param tmpReq - UpdateWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomResponse
   */
  async updateWaitingRoomWithOptions(tmpReq: UpdateWaitingRoomRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWaitingRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateWaitingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hostNameAndPath)) {
      request.hostNameAndPathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostNameAndPath, "HostNameAndPath", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cookieName)) {
      query["CookieName"] = request.cookieName;
    }

    if (!Util.isUnset(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.hostNameAndPathShrink)) {
      query["HostNameAndPath"] = request.hostNameAndPathShrink;
    }

    if (!Util.isUnset(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!Util.isUnset(request.queueAllEnable)) {
      query["QueueAllEnable"] = request.queueAllEnable;
    }

    if (!Util.isUnset(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!Util.isUnset(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!Util.isUnset(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!Util.isUnset(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    if (!Util.isUnset(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWaitingRoomResponse>(await this.callApi(params, req, runtime), new UpdateWaitingRoomResponse({}));
  }

  /**
   * 修改等候室
   * 
   * @param request - UpdateWaitingRoomRequest
   * @returns UpdateWaitingRoomResponse
   */
  async updateWaitingRoom(request: UpdateWaitingRoomRequest): Promise<UpdateWaitingRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWaitingRoomWithOptions(request, runtime);
  }

  /**
   * 修改等候室事件
   * 
   * @param request - UpdateWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomEventResponse
   */
  async updateWaitingRoomEventWithOptions(request: UpdateWaitingRoomEventRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWaitingRoomEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!Util.isUnset(request.preQueueEnable)) {
      query["PreQueueEnable"] = request.preQueueEnable;
    }

    if (!Util.isUnset(request.preQueueStartTime)) {
      query["PreQueueStartTime"] = request.preQueueStartTime;
    }

    if (!Util.isUnset(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!Util.isUnset(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!Util.isUnset(request.randomPreQueueEnable)) {
      query["RandomPreQueueEnable"] = request.randomPreQueueEnable;
    }

    if (!Util.isUnset(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!Util.isUnset(request.waitingRoomEventId)) {
      query["WaitingRoomEventId"] = request.waitingRoomEventId;
    }

    if (!Util.isUnset(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new UpdateWaitingRoomEventResponse({}));
  }

  /**
   * 修改等候室事件
   * 
   * @param request - UpdateWaitingRoomEventRequest
   * @returns UpdateWaitingRoomEventResponse
   */
  async updateWaitingRoomEvent(request: UpdateWaitingRoomEventRequest): Promise<UpdateWaitingRoomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * 修改等候室规则
   * 
   * @param request - UpdateWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomRuleResponse
   */
  async updateWaitingRoomRuleWithOptions(request: UpdateWaitingRoomRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWaitingRoomRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.waitingRoomRuleId)) {
      query["WaitingRoomRuleId"] = request.waitingRoomRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new UpdateWaitingRoomRuleResponse({}));
  }

  /**
   * 修改等候室规则
   * 
   * @param request - UpdateWaitingRoomRuleRequest
   * @returns UpdateWaitingRoomRuleResponse
   */
  async updateWaitingRoomRule(request: UpdateWaitingRoomRuleRequest): Promise<UpdateWaitingRoomRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * 缓存刷新文件上传
   * 
   * @param request - UploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadFileResponse
   */
  async uploadFileWithOptions(request: UploadFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uploadTaskName)) {
      query["UploadTaskName"] = request.uploadTaskName;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadFile",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadFileResponse>(await this.callApi(params, req, runtime), new UploadFileResponse({}));
  }

  /**
   * 缓存刷新文件上传
   * 
   * @param request - UploadFileRequest
   * @returns UploadFileResponse
   */
  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  async uploadFileAdvance(request: UploadFileAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let uploadFileReq = new UploadFileRequest({ });
    OpenApiUtil.convert(request, uploadFileReq);
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      uploadFileReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadFileResp = await this.uploadFileWithOptions(uploadFileReq, runtime);
    return uploadFileResp;
  }

  /**
   * 校验站点的归属
   * 
   * @param request - VerifySiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySiteResponse
   */
  async verifySiteWithOptions(request: VerifySiteRequest, runtime: $Util.RuntimeOptions): Promise<VerifySiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySiteResponse>(await this.callApi(params, req, runtime), new VerifySiteResponse({}));
  }

  /**
   * 校验站点的归属
   * 
   * @param request - VerifySiteRequest
   * @returns VerifySiteResponse
   */
  async verifySite(request: VerifySiteRequest): Promise<VerifySiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySiteWithOptions(request, runtime);
  }

}
