// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   Public: public images provided by Alibaba Cloud.
   * *   Custom: the custom image that you added.
   * 
   * @example
   * Custom
   */
  imageCategory?: string;
  /**
   * @remarks
   * The array of image IDs.
   */
  imageIds?: string[];
  /**
   * @remarks
   * The array of image names.
   */
  imageNames?: string[];
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * *   VM: virtual machine image.
   * *   Container: the container image.
   * 
   * Default value: VM
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * *   List: queries the list of all corresponding image versions.
   * *   Merge: merges images to query the latest version list.
   * 
   * @example
   * Merge
   */
  mode?: string;
  /**
   * @remarks
   * The number of the page to return.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of pieces per page.\\
   * Default value: 20.
   * 
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

