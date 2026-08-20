// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributionProductsLinkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of product codes. The collection cannot be empty and can contain up to 50 entries.
   * 
   * This parameter is required.
   */
  codesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

