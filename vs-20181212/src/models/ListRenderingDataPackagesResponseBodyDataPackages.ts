// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingDataPackagesResponseBodyDataPackages extends $dara.Model {
  category?: string;
  /**
   * @example
   * 2024-10-15T10:23:06+08:00
   */
  creationTime?: string;
  /**
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * available
   */
  status?: string;
  /**
   * @example
   * 2024-12-06T02:03:59Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      dataPackageId: 'DataPackageId',
      description: 'Description',
      renderingInstanceId: 'RenderingInstanceId',
      size: 'Size',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      dataPackageId: 'string',
      description: 'string',
      renderingInstanceId: 'string',
      size: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

