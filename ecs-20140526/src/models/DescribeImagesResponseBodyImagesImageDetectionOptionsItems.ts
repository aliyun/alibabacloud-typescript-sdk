// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem } from "./DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem";


export class DescribeImagesResponseBodyImagesImageDetectionOptionsItems extends $dara.Model {
  item?: DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

