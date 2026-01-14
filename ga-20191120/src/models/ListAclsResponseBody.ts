// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclsResponseBodyAclsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the network ACL.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the network ACL.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBodyAcls extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * *   **init**: The network ACL is being initialized.
   * *   **active**: The network ACL is available.
   * *   **configuring**: The network ACL is being configured.
   * *   **updating**: The network ACL is being updated.
   * *   **deleting:** The network ACL is being deleted.
   * 
   * @example
   * active
   */
  aclStatus?: string;
  /**
   * @remarks
   * The IP version of the network ACL. Valid values:
   * 
   * *   **IPv4**
   * *   **IPv6**
   * 
   * @example
   * IPv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2lgw4evw****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the network ACL.
   */
  tags?: ListAclsResponseBodyAclsTags[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListAclsResponseBodyAclsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network ACLs.
   */
  acls?: ListAclsResponseBodyAcls[];
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
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is not returned, it indicates that no additional results exist.
   * *   If **NextToken** is returned, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70t****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.acls)) {
      $dara.Model.validateArray(this.acls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

