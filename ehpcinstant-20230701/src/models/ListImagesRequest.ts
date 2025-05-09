// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  imageCategory?: string;
  imageIds?: string[];
  imageNames?: string[];
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
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      imageType: 'ImageType',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCategory: 'string',
      imageIds: { 'type': 'array', 'itemType': 'string' },
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageIds)) {
      $dara.Model.validateArray(this.imageIds);
    }
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

