// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListsResponseBodyPrefixList } from "./DescribePrefixListsResponseBodyPrefixList";


export class DescribePrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the prefix lists.
   */
  prefixList?: DescribePrefixListsResponseBodyPrefixList[];
  /**
   * @remarks
   * The ID of the request.
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

