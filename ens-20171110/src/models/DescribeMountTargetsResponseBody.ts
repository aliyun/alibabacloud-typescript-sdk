// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsResponseBodyMountTargets extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The mount target path.
   * 
   * @example
   * LB:/fileSystemName/mountTargetName
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The mount target name.
   * 
   * @example
   * TestMountPath
   */
  mountTargetName?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-***
   */
  netWorkId?: string;
  /**
   * @remarks
   * The mount target status. Valid values:
   * 
   * - active: Active.
   * - inactive: Inactive.
   * - pending: Queued.
   * - deleting: Being deleted.
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
   * The collection of mount target information.
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
   * The number of rows per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 762DD527-358B-1E48-8005-CCE3ED4EB9E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

