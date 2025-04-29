// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSupportInstanceTypesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Filter N used to filter instance types.
   * 
   * @example
   * imageId
   */
  key?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

