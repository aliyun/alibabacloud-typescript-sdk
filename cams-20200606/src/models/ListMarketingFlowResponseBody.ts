// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketingFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operational activity code.
   * 
   * @example
   * 3243243***
   */
  activityCode?: string;
  /**
   * @remarks
   * The operational activity description.
   * 
   * @example
   * aaa
   */
  activityDesc?: string;
  /**
   * @remarks
   * The operational activity name.
   * 
   * @example
   * aaa
   */
  activityName?: string;
  /**
   * @remarks
   * The operational activity status.
   * 
   * @example
   * active
   */
  activityStatus?: string;
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * {}
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: {}.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The cron expression for the upgrade start time. For example, `0 0 4 1/1 * ?` indicates that the upgrade starts at 04:00 on the first day of each month and runs at 04:00 every day.
   * 
   * @example
   * 0 0 4 1/1 * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-01-01 XX1:11:11
   */
  endDate?: string;
  /**
   * @remarks
   * The execution method.
   * 
   * @example
   * 1 (default: cron)
   */
  executionType?: string;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-XX-01 11:11:11
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time. **[Deprecated]**
   * 
   * @example
   * N/A
   */
  gmtModifier?: string;
  /**
   * @remarks
   * The operational activity ID.
   * 
   * @example
   * 99
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether custom parameters are enabled.
   * 
   * @example
   * Y
   */
  paramFlag?: string;
  /**
   * @remarks
   * The custom user parameters.
   * 
   * @example
   * {"CustomerLimit":false}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The code of the associated flow.
   * 
   * @example
   * dsafdsf***
   */
  relatedFlowCode?: string;
  /**
   * @remarks
   * The name of the associated flow.
   * 
   * @example
   * aaa
   */
  relatedFlowName?: string;
  /**
   * @remarks
   * The ID of the associated group.
   * 
   * @example
   * 54354**
   */
  relatedGroupId?: string;
  /**
   * @remarks
   * The name of the associated group.
   * 
   * @example
   * AAA
   */
  relatedGroupName?: string;
  /**
   * @remarks
   * The specific time. This parameter is valid when the execution method is set to 2.
   * 
   * @example
   * Specific time (when the execution method is 2)
   */
  specificTime?: string;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-01-XX 11:11:11
   */
  startDate?: string;
  /**
   * @remarks
   * The tenant code.
   * 
   * @example
   * 1111
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
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data object returned in the response.
   */
  data?: ListMarketingFlowResponseBodyData[];
  /**
   * @remarks
   * The message returned in the response.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * CB6122C9-09B5-5926-**476A96CB0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - true: The call is successful.                                 
   * - false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
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

