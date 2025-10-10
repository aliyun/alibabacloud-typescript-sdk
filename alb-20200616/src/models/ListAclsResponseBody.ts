// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclsResponseBodyAclsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * product
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
   * The ACL ID.
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * The status of the ACL. Valid values:
   * 
   * *   **Creating**: The network ACL is being created.
   * *   **Available**: The network ACL is available.
   * *   **Configuring**
   * 
   * @example
   * Available
   */
  aclStatus?: string;
  /**
   * @remarks
   * The IP version of the ACL. Only **IPv4** may be returned.
   * 
   * @example
   * IPv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * Indicates whether configuration management is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  configManagedEnabled?: boolean;
  /**
   * @remarks
   * The time when the ACL was created. The follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2023-02-15T07:37:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtopty****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListAclsResponseBodyAclsTags[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      configManagedEnabled: 'ConfigManagedEnabled',
      createTime: 'CreateTime',
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
      configManagedEnabled: 'boolean',
      createTime: 'string',
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
   * A list of ACLs.
   */
  acls?: ListAclsResponseBodyAcls[];
  /**
   * @remarks
   * The maximum number of network ACLs returned. This parameter is optional. Valid values: **1** to **100**. If this parameter is not set, the default value **20** is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70t****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
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

