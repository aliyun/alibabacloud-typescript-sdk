// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos } from "./DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos";


export class DescribeDirQuotasResponseBodyDirQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The inode number of the directory.
   * 
   * @example
   * 1123
   */
  dirInode?: string;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The status of the quota created for the directory. Valid values: Initializing and Normal. The Initializing state indicates that the quota is being created. The Normal state indicates that the quota is created.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The information about quotas for all users.
   */
  userQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos[];
  static names(): { [key: string]: string } {
    return {
      dirInode: 'DirInode',
      path: 'Path',
      status: 'Status',
      userQuotaInfos: 'UserQuotaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirInode: 'string',
      path: 'string',
      status: 'string',
      userQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos },
    };
  }

  validate() {
    if(Array.isArray(this.userQuotaInfos)) {
      $dara.Model.validateArray(this.userQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

