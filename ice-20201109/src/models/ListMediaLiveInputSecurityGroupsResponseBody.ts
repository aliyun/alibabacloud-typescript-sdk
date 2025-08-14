// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveInputSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the security group was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The IDs of the inputs associated with the security group.
   */
  inputIds?: string[];
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * mysg
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group rules.
   */
  whitelistRules?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      inputIds: 'InputIds',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      whitelistRules: 'WhitelistRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      inputIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      securityGroupId: 'string',
      whitelistRules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inputIds)) {
      $dara.Model.validateArray(this.inputIds);
    }
    if(Array.isArray(this.whitelistRules)) {
      $dara.Model.validateArray(this.whitelistRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaLiveInputSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  requestId?: string;
  /**
   * @remarks
   * The security groups.
   */
  securityGroups?: ListMediaLiveInputSecurityGroupsResponseBodySecurityGroups[];
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': ListMediaLiveInputSecurityGroupsResponseBodySecurityGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

