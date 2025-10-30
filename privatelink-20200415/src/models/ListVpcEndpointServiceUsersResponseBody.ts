// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServiceUsersResponseBodyUserARNs extends $dara.Model {
  /**
   * @remarks
   * The whitelist in the format of ARN.
   * 
   * @example
   * acs:ram:*::*
   */
  userARN?: string;
  static names(): { [key: string]: string } {
    return {
      userARN: 'UserARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in the whitelist of the endpoint service.
   * 
   * @example
   * 12345678
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServiceUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next requests are performed.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * The whitelists in the format of Aliyun Resource Name (ARN).
   */
  userARNs?: ListVpcEndpointServiceUsersResponseBodyUserARNs[];
  /**
   * @remarks
   * The Alibaba Cloud accounts in the whitelist of the endpoint service.
   */
  users?: ListVpcEndpointServiceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userARNs: 'UserARNs',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      userARNs: { 'type': 'array', 'itemType': ListVpcEndpointServiceUsersResponseBodyUserARNs },
      users: { 'type': 'array', 'itemType': ListVpcEndpointServiceUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.userARNs)) {
      $dara.Model.validateArray(this.userARNs);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

