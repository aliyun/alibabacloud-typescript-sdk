// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListsResponseBodyPrefixLists } from "./DescribePrefixListsResponseBodyPrefixLists";


export class DescribePrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token that is returned in this call. If the return value is empty, no more data is returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Details about the prefix lists.
   */
  prefixLists?: DescribePrefixListsResponseBodyPrefixLists;
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
      nextToken: 'NextToken',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      prefixLists: DescribePrefixListsResponseBodyPrefixLists,
      requestId: 'string',
    };
  }

  validate() {
    if(this.prefixLists && typeof (this.prefixLists as any).validate === 'function') {
      (this.prefixLists as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

