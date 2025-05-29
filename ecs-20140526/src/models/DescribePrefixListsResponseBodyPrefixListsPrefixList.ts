// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListsResponseBodyPrefixListsPrefixListTags } from "./DescribePrefixListsResponseBodyPrefixListsPrefixListTags";


export class DescribePrefixListsResponseBodyPrefixListsPrefixList extends $dara.Model {
  /**
   * @remarks
   * The IP address family of the prefix list. Valid values:
   * 
   * *   IPv4
   * *   IPv6
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The number of associated resources.
   * 
   * @example
   * 1
   */
  associationCount?: number;
  /**
   * @remarks
   * The time when the prefix list was created.
   * 
   * @example
   * 2021-02-20T07:11Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the prefix list.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries that the prefix list can contain.
   * 
   * @example
   * 20
   */
  maxEntries?: number;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list.
   * 
   * @example
   * PrefixListNameSample
   */
  prefixListName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the prefix list belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the prefix list.
   */
  tags?: DescribePrefixListsResponseBodyPrefixListsPrefixListTags;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      associationCount: 'AssociationCount',
      creationTime: 'CreationTime',
      description: 'Description',
      maxEntries: 'MaxEntries',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      associationCount: 'number',
      creationTime: 'string',
      description: 'string',
      maxEntries: 'number',
      prefixListId: 'string',
      prefixListName: 'string',
      resourceGroupId: 'string',
      tags: DescribePrefixListsResponseBodyPrefixListsPrefixListTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

