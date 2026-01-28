// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForAuthorizationRuleResponseBodyApplicationsValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * 授权生效结束时间。
   * 
   * @example
   * 1704042061000
   */
  endTime?: number;
  /**
   * @remarks
   * 授权生效开始时间。
   * 
   * @example
   * 1704042061000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForAuthorizationRuleResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * 应用标识。
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 有效周期。
   */
  validityPeriod?: ListApplicationsForAuthorizationRuleResponseBodyApplicationsValidityPeriod;
  /**
   * @remarks
   * 有效期类型，枚举值：permanent（永久），time_bound（自定义时间范围）。
   * 
   * @example
   * permanent
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      validityPeriod: ListApplicationsForAuthorizationRuleResponseBodyApplicationsValidityPeriod,
      validityType: 'string',
    };
  }

  validate() {
    if(this.validityPeriod && typeof (this.validityPeriod as any).validate === 'function') {
      (this.validityPeriod as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForAuthorizationRuleResponseBody extends $dara.Model {
  applications?: ListApplicationsForAuthorizationRuleResponseBodyApplications[];
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
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForAuthorizationRuleResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

