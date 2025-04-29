// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListAttributesResponseBodyEntries } from "./DescribePrefixListAttributesResponseBodyEntries";


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

