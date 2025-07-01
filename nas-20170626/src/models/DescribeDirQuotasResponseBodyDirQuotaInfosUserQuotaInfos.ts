// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The maximum number of files that a user can create in the directory.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total number of files that a user has created in the directory.
   * 
   * @example
   * 5100
   */
  fileCountReal?: number;
  /**
   * @remarks
   * The type of the quota. Valid values: Accounting and Enforcement.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The maximum size of files that a user can create in the directory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The total size of files that a user has created in the directory. Unit: GiB.
   * 
   * @example
   * 800
   */
  sizeReal?: number;
  /**
   * @remarks
   * The total size of files that a user has created in the directory. Unit: bytes.
   * 
   * @example
   * 858995833870
   */
  sizeRealInByte?: number;
  /**
   * @remarks
   * The ID of the user that you specify to create a quota for the directory. The value depends on the value of the UserType parameter. Valid values: Uid and Gid.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of user. Valid values: Uid, Gid, and AllUsers.
   * 
   * *   If Uid or Gid is returned, a value is returned for UserId.
   * *   If AllUsers is returned, UserId is empty.
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

