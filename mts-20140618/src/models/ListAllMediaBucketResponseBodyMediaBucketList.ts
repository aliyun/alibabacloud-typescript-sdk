// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllMediaBucketResponseBodyMediaBucketListMediaBucket } from "./ListAllMediaBucketResponseBodyMediaBucketListMediaBucket";


export class ListAllMediaBucketResponseBodyMediaBucketList extends $dara.Model {
  mediaBucket?: ListAllMediaBucketResponseBodyMediaBucketListMediaBucket[];
  static names(): { [key: string]: string } {
    return {
      mediaBucket: 'MediaBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBucket: { 'type': 'array', 'itemType': ListAllMediaBucketResponseBodyMediaBucketListMediaBucket },
    };
  }

  validate() {
    if(Array.isArray(this.mediaBucket)) {
      $dara.Model.validateArray(this.mediaBucket);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

