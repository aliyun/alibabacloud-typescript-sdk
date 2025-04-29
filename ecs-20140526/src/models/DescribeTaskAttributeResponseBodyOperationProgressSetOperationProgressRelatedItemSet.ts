// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem } from "./DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem";


export class DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
    };
  }

  validate() {
    if(Array.isArray(this.relatedItem)) {
      $dara.Model.validateArray(this.relatedItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

