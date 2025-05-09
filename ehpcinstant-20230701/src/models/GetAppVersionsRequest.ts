// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * V-Ray
   */
  appName?: string;
  /**
   * @example
   * Public
   */
  imageCategory?: string;
  /**
   * @example
   * VM
   */
  imageType?: string;
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

