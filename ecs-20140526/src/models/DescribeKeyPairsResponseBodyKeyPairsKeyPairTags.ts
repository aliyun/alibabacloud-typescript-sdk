// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag } from "./DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag";


export class DescribeKeyPairsResponseBodyKeyPairsKeyPairTags extends $dara.Model {
  tag?: DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

