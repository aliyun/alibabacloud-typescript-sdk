// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the mount target.
   * 
   * @example
   * TestMountPath
   */
  mountTargetName?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
      mountTargetName: 'MountTargetName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      fileSystemId: 'string',
      mountTargetName: 'string',
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

