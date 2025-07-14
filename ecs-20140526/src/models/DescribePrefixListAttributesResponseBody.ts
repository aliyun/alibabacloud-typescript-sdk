// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListAttributesResponseBodyEntriesEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block in entry N.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description in entry N.
   * 
   * @example
   * Description Sample 01
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListAttributesResponseBodyEntries extends $dara.Model {
  entry?: DescribePrefixListAttributesResponseBodyEntriesEntry[];
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: { 'type': 'array', 'itemType': DescribePrefixListAttributesResponseBodyEntriesEntry },
    };
  }

  validate() {
    if(Array.isArray(this.entry)) {
      $dara.Model.validateArray(this.entry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListAttributesResponseBody extends $dara.Model {
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
   * Details about the entries in the prefix list.
   */
  entries?: DescribePrefixListAttributesResponseBodyEntries;
  /**
   * @remarks
   * The maximum number of entries in the prefix list.
   * 
   * @example
   * 10
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
   * The request ID.
   * 
   * @example
   * 38793DB8-A4B2-4AEC-BFD3-111234E9188D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      creationTime: 'CreationTime',
      description: 'Description',
      entries: 'Entries',
      maxEntries: 'MaxEntries',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      creationTime: 'string',
      description: 'string',
      entries: DescribePrefixListAttributesResponseBodyEntries,
      maxEntries: 'number',
      prefixListId: 'string',
      prefixListName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.entries && typeof (this.entries as any).validate === 'function') {
      (this.entries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

