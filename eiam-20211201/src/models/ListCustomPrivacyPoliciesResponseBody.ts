// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies extends $dara.Model {
  /**
   * @remarks
   * 自定义条款Id
   * 
   * @example
   * pp_xxxxx
   */
  customPrivacyPolicyId?: string;
  /**
   * @remarks
   * 自定义条款名称
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyName?: string;
  /**
   * @remarks
   * 若显示语言未配置时，门户侧展示默认语言展示条款。
   * 
   * @example
   * zh-Hans-CN
   */
  defaultLanguageCode?: string;
  /**
   * @remarks
   * 实例id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 自定义条款状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 自定义条款同意类型，是默认同意，还是用户勾选同意
   * 
   * @example
   * implied_consent
   */
  userConsentType?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyId: 'CustomPrivacyPolicyId',
      customPrivacyPolicyName: 'CustomPrivacyPolicyName',
      defaultLanguageCode: 'DefaultLanguageCode',
      instanceId: 'InstanceId',
      status: 'Status',
      userConsentType: 'UserConsentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyId: 'string',
      customPrivacyPolicyName: 'string',
      defaultLanguageCode: 'string',
      instanceId: 'string',
      status: 'string',
      userConsentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPrivacyPoliciesResponseBody extends $dara.Model {
  customPrivacyPolicies?: ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于上一次翻页查询。
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicies: 'CustomPrivacyPolicies',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicies: { 'type': 'array', 'itemType': ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customPrivacyPolicies)) {
      $dara.Model.validateArray(this.customPrivacyPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

