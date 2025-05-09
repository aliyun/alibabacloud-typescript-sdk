// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListsResponseBodyPrefixList extends $dara.Model {
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
   * 2
   */
  associationCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-10-16T08:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * TCP_14900-14911
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries in the prefix list.
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
   * pl-uf64nco3ujjqchx6aaji
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list.
   * 
   * @example
   * participant-name
   */
  prefixListName?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      associationCount: 'AssociationCount',
      creationTime: 'CreationTime',
      description: 'Description',
      maxEntries: 'MaxEntries',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

