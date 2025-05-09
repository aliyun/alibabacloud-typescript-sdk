// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesShrinkRequest extends $dara.Model {
  imageCategory?: string;
  imageIdsShrink?: string;
  imageNamesShrink?: string;
  imageType?: string;
  mode?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageCategory: 'ImageCategory',
      imageIdsShrink: 'ImageIds',
      imageNamesShrink: 'ImageNames',
      imageType: 'ImageType',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCategory: 'string',
      imageIdsShrink: 'string',
      imageNamesShrink: 'string',
      imageType: 'string',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

