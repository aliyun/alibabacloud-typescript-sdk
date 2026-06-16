// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForAuthorizationRuleResponseBodyGroupsValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1704042061000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the validity period. The value is a UNIX timestamp. Unit: milliseconds.
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
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time range of the validity period. This parameter takes effect only when **ValidityType** is set to **time_bound**.
   */
  validityPeriod?: ListGroupsForAuthorizationRuleResponseBodyGroupsValidityPeriod;
  /**
   * @remarks
   * The type of the validity period of the relationship. Valid values:
   * 
   * - permanent: permanent
   * 
   * - time_bound: custom time range
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
  /**
   * @remarks
   * The list of groups.
   */
  groups?: ListGroupsForAuthorizationRuleResponseBodyGroups[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is returned for the next page.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

