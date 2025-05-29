// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingDataPackagesRequest extends $dara.Model {
  category?: string;
  /**
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
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
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dataPackageId: 'DataPackageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dataPackageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

