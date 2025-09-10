// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod extends $dara.Model {
  /**
   * @remarks
   * The unit of the calculation cycle. Valid values:
   * 
   * *   second
   * *   minute
   * *   hour
   * *   day
   * *   week
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The value of the calculation cycle.
   * 
   * @example
   * 1
   */
  periodValue?: number;
  static names(): { [key: string]: string } {
    return {
      periodUnit: 'PeriodUnit',
      periodValue: 'PeriodValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodUnit: 'string',
      periodValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates extends $dara.Model {
  /**
   * @remarks
   * None.
   */
  applicableRange?: number[];
  /**
   * @remarks
   * The type of the adjustable value. Valid values:
   * 
   * *   continuous
   * *   discontinuous
   * 
   * @example
   * continuous
   */
  applicableType?: string;
  /**
   * @remarks
   * The requested value of the quota.
   * 
   * @example
   * 802
   */
  desireValue?: number;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * Format: {"regionId":"Region"}.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  dimensions?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-28T06:07:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The language of the quota alert notification. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  envLanguage?: string;
  /**
   * @remarks
   * The end time of the validity period of the quota. The value is displayed in UTC.
   * 
   * @example
   * 2022-09-29T06:07:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether Quota Center sends a notification about the application result. Valid values:
   * 
   * *   0: no
   * *   3: yes
   * 
   * @example
   * 0
   */
  noticeType?: number;
  /**
   * @remarks
   * The calculation cycle of the quota.
   */
  period?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * The maximum number of security groups that can be created by the current account.
   */
  quotaDescription?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * Maximum Number of Security Groups
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      applicableRange: 'ApplicableRange',
      applicableType: 'ApplicableType',
      desireValue: 'DesireValue',
      dimensions: 'Dimensions',
      effectiveTime: 'EffectiveTime',
      envLanguage: 'EnvLanguage',
      expireTime: 'ExpireTime',
      id: 'Id',
      noticeType: 'NoticeType',
      period: 'Period',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      quotaDescription: 'QuotaDescription',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableRange: { 'type': 'array', 'itemType': 'number' },
      applicableType: 'string',
      desireValue: 'number',
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveTime: 'string',
      envLanguage: 'string',
      expireTime: 'string',
      id: 'string',
      noticeType: 'number',
      period: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplatesPeriod,
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      quotaDescription: 'string',
      quotaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicableRange)) {
      $dara.Model.validateArray(this.applicableRange);
    }
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaApplicationTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for the query.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends.
   * 
   * > An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about quota templates.
   */
  quotaApplicationTemplates?: ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned for the query.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaApplicationTemplates: 'QuotaApplicationTemplates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaApplicationTemplates: { 'type': 'array', 'itemType': ListQuotaApplicationTemplatesResponseBodyQuotaApplicationTemplates },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotaApplicationTemplates)) {
      $dara.Model.validateArray(this.quotaApplicationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

