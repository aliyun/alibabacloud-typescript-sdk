// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListsResponseBodyPrefixListsPrefixList } from "./DescribePrefixListsResponseBodyPrefixListsPrefixList";


export class DescribePrefixListsResponseBodyPrefixLists extends $dara.Model {
  prefixList?: DescribePrefixListsResponseBodyPrefixListsPrefixList[];
  static names(): { [key: string]: string } {
    return {
      prefixList: 'PrefixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixList: { 'type': 'array', 'itemType': DescribePrefixListsResponseBodyPrefixListsPrefixList },
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

