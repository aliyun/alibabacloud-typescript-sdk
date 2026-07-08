// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingDataPackagesResponseBodyDataPackages extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * 
   * - Package
   * 
   * - Baseline
   * 
   * @example
   * Package
   */
  category?: string;
  /**
   * @remarks
   * The creation time of the Graphic Computing Service instance.
   * 
   * @example
   * 2024-10-15T10:23:06+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the data pack.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Graphic Computing Service instance.
   * 
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The size of the data pack.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The status of the data pack. Valid values:
   * available
   * packing
   * failed
   * bonded
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
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

export class ListRenderingDataPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of data packages for the cloud application service.
   */
  dataPackages?: ListRenderingDataPackagesResponseBodyDataPackages[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Graphic Computing Service instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataPackages: 'DataPackages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackages: { 'type': 'array', 'itemType': ListRenderingDataPackagesResponseBodyDataPackages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataPackages)) {
      $dara.Model.validateArray(this.dataPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

