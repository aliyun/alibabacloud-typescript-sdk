// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceInfoResponseBodyImagesImage } from "./DescribeAvailableResourceInfoResponseBodyImagesImage";


export class DescribeAvailableResourceInfoResponseBodyImages extends $dara.Model {
  image?: DescribeAvailableResourceInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodyImagesImage },
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

