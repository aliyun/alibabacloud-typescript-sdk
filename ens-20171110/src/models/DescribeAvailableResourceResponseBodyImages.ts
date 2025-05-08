// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyImagesImage } from "./DescribeAvailableResourceResponseBodyImagesImage";


export class DescribeAvailableResourceResponseBodyImages extends $dara.Model {
  image?: DescribeAvailableResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyImagesImage },
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

