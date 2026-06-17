// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListsResponseBodyPrefixList extends $dara.Model {
  /**
   * @remarks
   * The address family of the prefix list. Valid values:
   * 
   * - IPv4
   * 
   * - IPv6
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
   * The time the prefix list was created. The timestamp is in ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-10-16T08:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the prefix list.
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
   * The prefix list ID.
   * 
   * @example
   * pl-uf64nco3ujjqchx6aaji
   */
  prefixListId?: string;
  /**
   * @remarks
   * The prefix list name.
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

export class DescribePrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of prefix lists.
   */
  prefixList?: DescribePrefixListsResponseBodyPrefixList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67FD76C2-C493-5815-8107-643FD7AB77C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prefixList: 'PrefixList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixList: { 'type': 'array', 'itemType': DescribePrefixListsResponseBodyPrefixList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prefixList)) {
      $dara.Model.validateArray(this.prefixList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

