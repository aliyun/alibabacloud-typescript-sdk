// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForAuthorizationRuleResponseBodyGroupsValidityPeriod extends $dara.Model {
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

export class ListGroupsForAuthorizationRuleResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * 组标识。
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
  validityPeriod?: ListGroupsForAuthorizationRuleResponseBodyGroupsValidityPeriod;
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
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      validityPeriod: ListGroupsForAuthorizationRuleResponseBodyGroupsValidityPeriod,
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

export class ListGroupsForAuthorizationRuleResponseBody extends $dara.Model {
  groups?: ListGroupsForAuthorizationRuleResponseBodyGroups[];
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
      groups: 'Groups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForAuthorizationRuleResponseBodyGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

