// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclsResponseBodyAclsTags } from "./ListAclsResponseBodyAclsTags";


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

