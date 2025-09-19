// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageLatestScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  digest?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

