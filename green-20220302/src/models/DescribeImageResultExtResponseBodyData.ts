// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageResultExtResponseBodyDataCustomImage } from "./DescribeImageResultExtResponseBodyDataCustomImage";
import { DescribeImageResultExtResponseBodyDataPublicFigure } from "./DescribeImageResultExtResponseBodyDataPublicFigure";
import { DescribeImageResultExtResponseBodyDataTextInImage } from "./DescribeImageResultExtResponseBodyDataTextInImage";


export class DescribeImageResultExtResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: DescribeImageResultExtResponseBodyDataCustomImage[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: DescribeImageResultExtResponseBodyDataPublicFigure[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: DescribeImageResultExtResponseBodyDataTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataCustomImage },
      publicFigure: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataPublicFigure },
      textInImage: DescribeImageResultExtResponseBodyDataTextInImage,
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(this.textInImage && typeof (this.textInImage as any).validate === 'function') {
      (this.textInImage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

