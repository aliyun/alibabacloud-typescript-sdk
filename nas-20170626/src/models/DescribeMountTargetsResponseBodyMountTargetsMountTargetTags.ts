// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag } from "./DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag";


export class DescribeMountTargetsResponseBodyMountTargetsMountTargetTags extends $dara.Model {
  tag?: DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag },
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

