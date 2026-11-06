// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateLinkSecurityGroupsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1ftp5sm9os***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * Product Center Cluster Security Group
   */
  securityGroupName?: string;
  /**
   * @remarks
   * Specifies whether the resource is created by a service account. Valid values:
   * 
   * - 0: Not created by a service account.
   * - 1: Created by a service account.
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf61resqa9am***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      securityGroupName: 'securityGroupName',
      serviceManaged: 'serviceManaged',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupName: 'string',
      serviceManaged: 'boolean',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateLinkSecurityGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The source information.
   */
  items?: ListPrivateLinkSecurityGroupsResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned in this query.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * None
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPrivateLinkSecurityGroupsResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateLinkSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPrivateLinkSecurityGroupsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 479AE38F-A574-52F7-87EA-E91199999F9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPrivateLinkSecurityGroupsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

