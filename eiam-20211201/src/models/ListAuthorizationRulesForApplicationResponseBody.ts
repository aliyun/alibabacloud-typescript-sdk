// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationRulesForApplicationResponseBodyAuthorizationRulesValidityPeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1704042061000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the validity period. This is a UNIX timestamp in milliseconds.
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

export class ListAuthorizationRulesForApplicationResponseBodyAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
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
   * The time range of the validity period. This parameter is returned only when **ValidityType** is set to **time_bound**.
   */
  validityPeriod?: ListAuthorizationRulesForApplicationResponseBodyAuthorizationRulesValidityPeriod;
  /**
   * @remarks
   * The type of the validity period for the relationship. Valid values:
   * 
   * - permanent: The relationship is permanent.
   * 
   * - time_bound: The relationship is valid within a custom time range.
   * 
   * @example
   * permanent
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      instanceId: 'InstanceId',
      validityPeriod: 'ValidityPeriod',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      instanceId: 'string',
      validityPeriod: ListAuthorizationRulesForApplicationResponseBodyAuthorizationRulesValidityPeriod,
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

export class ListAuthorizationRulesForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorization rules.
   */
  authorizationRules?: ListAuthorizationRulesForApplicationResponseBodyAuthorizationRules[];
  /**
   * @remarks
   * The number of entries on each page of a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to use for the next paged query.
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
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationRules: 'AuthorizationRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRules: { 'type': 'array', 'itemType': ListAuthorizationRulesForApplicationResponseBodyAuthorizationRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationRules)) {
      $dara.Model.validateArray(this.authorizationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

