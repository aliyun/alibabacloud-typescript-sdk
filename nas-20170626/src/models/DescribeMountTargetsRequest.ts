// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IPv4 and IPv6 dual-stack mount target.
   * 
   * > Currently, only Extreme NAS in regions in the Chinese mainland supports IPv6.
   * 
   * @example
   * 1ca404****-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose NAS: 31a8e4\\*\\*\\*\\*.
   * 
   * - Extreme NAS: must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * 
   * - CPFS: must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The mount target address.
   * 
   * @example
   * 1ca404****-x****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The page number of the list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of mount targets on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dualStackMountTargetDomain: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
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

