// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * V-Ray
   */
  appName?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * - Public: public images provided by Alibaba Cloud.
   * 
   * - Custom: custom images added by you.
   * 
   * @example
   * Public
   */
  imageCategory?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * - VM: virtual machine images.
   * 
   * - Container: container images.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
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

