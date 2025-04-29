// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem } from "./DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem";


export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
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

