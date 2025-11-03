// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveResponseBodyDrive extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1202****
   */
  aliUid?: string;
  /**
   * @remarks
   * The description of the storage resource.
   * 
   * @example
   * test****
   */
  description?: string;
  /**
   * @remarks
   * The ID of the storage resource.
   * 
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the user-level storage resource.
   * 
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the external user-level storage resource.
   * 
   * >  A value is returned for this parameter only if ResourceType is set to PDS.
   * 
   * @example
   * 1100****
   */
  externalDriveId?: string;
  /**
   * @remarks
   * The ID of the external user.
   * 
   * @example
   * user01@cn-hangzhou.120****
   */
  externalUserId?: string;
  /**
   * @remarks
   * The time when the storage resource was created.
   * 
   * @example
   * 2025-07-02T08:42:26.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the storage resource was last modified.
   * 
   * @example
   * 2025-07-07T02:46:04.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The name of the storage resource.
   * 
   * @example
   * test****
   */
  name?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * -
   */
  profileRoaming?: boolean;
  /**
   * @remarks
   * The status of the user-level storage resource.
   * 
   * Valid values:
   * 
   * *   INIT: initializing
   * *   MAINTAIN: maintaining
   * *   DELETING
   * *   INVALID
   * *   NORMAL
   * *   FAIL: failed
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The total amount of the user-level storage resource capacity.
   * 
   * >  Unit: bytes.
   * 
   * @example
   * 536870912000
   */
  totalSize?: number;
  /**
   * @remarks
   * The usage of the storage resource.
   * 
   * Valid values:
   * 
   * *   DESKTOP: data disk space
   * *   USER_PROFILE: space for personal data of the user
   * 
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
   * @remarks
   * The amount of user-level storage resource capacity used.
   * 
   * >  Unit: bytes.
   * 
   * @example
   * 243175936
   */
  usedSize?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      domainId: 'DomainId',
      driveId: 'DriveId',
      externalDriveId: 'ExternalDriveId',
      externalUserId: 'ExternalUserId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      profileRoaming: 'ProfileRoaming',
      status: 'Status',
      totalSize: 'TotalSize',
      type: 'Type',
      usedSize: 'UsedSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      externalDriveId: 'string',
      externalUserId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      name: 'string',
      profileRoaming: 'boolean',
      status: 'string',
      totalSize: 'number',
      type: 'string',
      usedSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The user-level storage resource.
   */
  drive?: CreateDriveResponseBodyDrive;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7AA****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      drive: 'Drive',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      drive: CreateDriveResponseBodyDrive,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.drive && typeof (this.drive as any).validate === 'function') {
      (this.drive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

