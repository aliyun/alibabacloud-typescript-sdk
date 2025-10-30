// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group that is associated with the endpoint.
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The associate status of the security group, valid values:
   * - Attaching: The security group is being attached.
   * - Attached: The security group is attached.
   * - Detaching: The security group is being detached.
   * 
   * @example
   * Attached
   */
  securityGroupStatus?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      securityGroupStatus: 'SecurityGroupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The information about the security groups.
   */
  securityGroups?: ListVpcEndpointSecurityGroupsResponseBodySecurityGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
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
      securityGroups: { 'type': 'array', 'itemType': ListVpcEndpointSecurityGroupsResponseBodySecurityGroups },
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

