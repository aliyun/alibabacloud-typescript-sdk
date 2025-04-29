// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImagesImageDetectionOptionsItems } from "./DescribeImagesResponseBodyImagesImageDetectionOptionsItems";


export class DescribeImagesResponseBodyImagesImageDetectionOptions extends $dara.Model {
  /**
   * @remarks
   * The check items.
   */
  items?: DescribeImagesResponseBodyImagesImageDetectionOptionsItems;
  /**
   * @remarks
   * The state of the image check task. Valid values:
   * 
   * *   Processing
   * *   Finished
   * 
   * @example
   * Processing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeImagesResponseBodyImagesImageDetectionOptionsItems,
      status: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

