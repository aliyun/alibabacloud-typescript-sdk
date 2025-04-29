// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem } from "./ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem";


export class ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
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

