// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessRulesResponseBodyAccessRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the access group.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The ID of the access group rule.
   * 
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The time when the access group rule was created. The time is displayed in UTC and follows the ISO 8601 standard. Example: 2022-04-18T08:02:09.986217Z.
   * 
   * @example
   * 2022-04-18T08:02:09.986217Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access group rule.
   * 
   * @example
   * CIDR block of the log upload server
   */
  description?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * @example
   * 192.0.2.0/24
   */
  networkSegment?: string;
  /**
   * @remarks
   * The priority of the access group rule.
   * 
   * If an authorized object matches multiple rules, the rule with the highest priority takes effect.
   * 
   * Valid values: 1 to 100. A value of 1 indicates the highest priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * - RDWR: read and write
   * - RDONLY: read-only
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      createTime: 'string',
      description: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access group rules.
   */
  accessRules?: ListAccessRulesResponseBodyAccessRules[];
  /**
   * @remarks
   * The token for the next page.
   * 
   * If a single query does not return all entries, a non-empty NextToken is returned. You can specify the NextToken in a subsequent query to continue the query.
   * 
   * @example
   * PtHVCBwpddbWVRCFe3wlB_-tOLtD4KSv3DzI7G6iywQSm69vY0lvOlDTzqVWqXWApvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessRules: 'AccessRules',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRules: { 'type': 'array', 'itemType': ListAccessRulesResponseBodyAccessRules },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessRules)) {
      $dara.Model.validateArray(this.accessRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

