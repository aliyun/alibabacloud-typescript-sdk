// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The maximum number of files that the user can create in the directory.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The actual number of files owned by the user in the directory.
   * 
   * @example
   * 5100
   */
  fileCountReal?: number;
  /**
   * @remarks
   * The quota type. Valid values: Accounting (statistical quota) and Enforcement (restrictive quota).
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The maximum total size of files that the user can store in the directory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The actual total size of files owned by the user in the directory. Unit: GiB.
   * 
   * @example
   * 800
   */
  sizeReal?: number;
  /**
   * @remarks
   * The actual total size of files owned by the user in the directory. Unit: bytes.
   * 
   * @example
   * 858995833870
   */
  sizeRealInByte?: number;
  /**
   * @remarks
   * The UID or GID to be restricted, depending on the value of UserType.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of the UserId. Valid values: Uid, Gid, and AllUsers.
   * - If the value is Uid or Gid, UserId has a return value.
   * - If the value is AllUsers, UserId is empty.
   * 
   * @example
   * Uid
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      fileCountReal: 'FileCountReal',
      quotaType: 'QuotaType',
      sizeLimit: 'SizeLimit',
      sizeReal: 'SizeReal',
      sizeRealInByte: 'SizeRealInByte',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      fileCountReal: 'number',
      quotaType: 'string',
      sizeLimit: 'number',
      sizeReal: 'number',
      sizeRealInByte: 'number',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The absolute path of the directory in the file system.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The statistical status of the directory. The value is Initializing during initialization and Normal when the status is normal.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The collection of quota information for each user.
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

export class DescribeDirQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of quota information for each directory.
   */
  dirQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfos[];
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
   * The number of directories on each page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of directories.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dirQuotaInfos: 'DirQuotaInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dirQuotaInfos)) {
      $dara.Model.validateArray(this.dirQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

