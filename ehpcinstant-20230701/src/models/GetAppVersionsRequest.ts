// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * V-Ray
   */
  appName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * Public: public images provided by Alibaba Cloud.
   * 
   * Custom: the custom image that you added.
   * 
   * @example
   * Public
   */
  imageCategory?: string;
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * VM: Virtual Machine Image
   * 
   * Container: container image
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      imageCategory: 'ImageCategory',
      imageType: 'ImageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      imageCategory: 'string',
      imageType: 'string',
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

