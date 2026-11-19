// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The image source. Valid values:
   * - Public: public images provided by Alibaba Cloud
   * - Custom: custom images added by you
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
   * The image type. Valid values:
   * 
   * - VM: virtual machine image
   * - Container: container image
   * 
   * Default value: VM.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * - List: Queries the list of all image versions.
   * - Merge: Queries the list of the latest versions for each image.
   * 
   * @example
   * Merge
   */
  mode?: string;
  /**
   * @remarks
   * The current page number.    
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.    
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

