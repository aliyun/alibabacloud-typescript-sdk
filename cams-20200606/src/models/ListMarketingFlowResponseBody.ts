// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketingFlowResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  activityCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  activityDesc?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  activityName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  activityStatus?: string;
  /**
   * @example
   * 示例值示例值
   */
  bizCode?: string;
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  cronExpression?: string;
  /**
   * @example
   * 示例值
   */
  endDate?: string;
  /**
   * @example
   * 示例值
   */
  executionType?: string;
  /**
   * @example
   * 示例值
   */
  gmtCreate?: string;
  /**
   * @example
   * 示例值
   */
  gmtModifier?: string;
  /**
   * @example
   * 99
   */
  id?: number;
  /**
   * @example
   * Y
   */
  paramFlag?: string;
  params?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  relatedFlowCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  relatedFlowName?: string;
  /**
   * @example
   * 示例值
   */
  relatedGroupId?: string;
  /**
   * @example
   * 示例值示例值
   */
  relatedGroupName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  specificTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  startDate?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityDesc: 'ActivityDesc',
      activityName: 'ActivityName',
      activityStatus: 'ActivityStatus',
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      cronExpression: 'CronExpression',
      endDate: 'EndDate',
      executionType: 'ExecutionType',
      gmtCreate: 'GmtCreate',
      gmtModifier: 'GmtModifier',
      id: 'Id',
      paramFlag: 'ParamFlag',
      params: 'Params',
      relatedFlowCode: 'RelatedFlowCode',
      relatedFlowName: 'RelatedFlowName',
      relatedGroupId: 'RelatedGroupId',
      relatedGroupName: 'RelatedGroupName',
      specificTime: 'SpecificTime',
      startDate: 'StartDate',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityDesc: 'string',
      activityName: 'string',
      activityStatus: 'string',
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      cronExpression: 'string',
      endDate: 'string',
      executionType: 'string',
      gmtCreate: 'string',
      gmtModifier: 'string',
      id: 'number',
      paramFlag: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relatedFlowCode: 'string',
      relatedFlowName: 'string',
      relatedGroupId: 'string',
      relatedGroupName: 'string',
      specificTime: 'string',
      startDate: 'string',
      tenantCode: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMarketingFlowResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 2993***
   */
  code?: string;
  data?: ListMarketingFlowResponseBodyData[];
  /**
   * @example
   * NULL
   */
  message?: string;
  /**
   * @example
   * OK
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMarketingFlowResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

