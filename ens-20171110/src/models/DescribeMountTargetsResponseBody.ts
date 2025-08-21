// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsResponseBodyMountTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The path of the mount target.
   * 
   * @example
   * LB:/fileSystemName/mountTargetName
   */
  mountTargetDomain?: string;
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
   * The ID of the network.
   * 
   * @example
   * n-***
   */
  netWorkId?: string;
  /**
   * @remarks
   * The state of the mount target. Valid values:
   * 
   * *   active: The mount target is available.
   * *   inactive: The mount target is unavailable.
   * *   pending: A task is being queued for the mount target.
   * *   deleting: The mount target is being deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      mountTargetName: 'MountTargetName',
      netWorkId: 'NetWorkId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      mountTargetName: 'string',
      netWorkId: 'string',
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

export class DescribeMountTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about mount targets.
   */
  mountTargets?: DescribeMountTargetsResponseBodyMountTargets[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 762DD527-358B-1E48-8005-CCE3ED4EB9E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of mount targets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountTargets)) {
      $dara.Model.validateArray(this.mountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

