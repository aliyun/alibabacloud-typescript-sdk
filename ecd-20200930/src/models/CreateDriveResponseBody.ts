// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveResponseBodyDrive extends $dara.Model {
  /**
   * @example
   * 1202****
   */
  aliUid?: string;
  /**
   * @example
   * test****
   */
  description?: string;
  /**
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @example
   * 1100****
   */
  externalDriveId?: string;
  /**
   * @example
   * user01@cn-hangzhou.120****
   */
  externalUserId?: string;
  /**
   * @example
   * 2025-07-02T08:42:26.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-07-07T02:46:04.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * test****
   */
  name?: string;
  /**
   * @example
   * -
   */
  profileRoaming?: boolean;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * 536870912000
   */
  totalSize?: number;
  /**
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
   * @example
   * 243175936
   */
  usedSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  drive?: CreateDriveResponseBodyDrive;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * B7AA****
   */
  requestId?: string;
  /**
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

