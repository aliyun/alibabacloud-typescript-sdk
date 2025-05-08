// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExportImageInfoResponseBodyImagesImage } from "./DescribeExportImageInfoResponseBodyImagesImage";


export class DescribeExportImageInfoResponseBodyImages extends $dara.Model {
  image?: DescribeExportImageInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeExportImageInfoResponseBodyImagesImage },
    };
  }

  validate() {
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

