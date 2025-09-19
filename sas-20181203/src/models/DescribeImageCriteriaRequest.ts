// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword that you specify for fuzzy search when you query the image.
   * 
   * > The value of this parameter can be an image ID, image tag, image instance ID, image repository name, image repository ID, image repository namespace, image region, image digest, or image repository type.
   * 
   * @example
   * 525
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

