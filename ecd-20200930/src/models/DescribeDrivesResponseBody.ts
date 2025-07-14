// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrivesResponseBodyDrivesDesktopGroups extends $dara.Model {
  /**
   * @example
   * dg-aaaa****
   */
  desktopGroupId?: string;
  /**
   * @example
   * group01
   */
  desktopGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrivesResponseBodyDrives extends $dara.Model {
  /**
   * @example
   * 1202****
   */
  aliUid?: number;
  /**
   * @example
   * test****
   */
  description?: string;
  /**
   * @example
   * 1
   */
  desktopGroupCount?: number;
  desktopGroups?: DescribeDrivesResponseBodyDrivesDesktopGroups[];
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
   * true
   */
  enableProfileManagement?: boolean;
  /**
   * @example
   * 0976****
   */
  externalDomainId?: string;
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
      desktopGroupCount: 'DesktopGroupCount',
      desktopGroups: 'DesktopGroups',
      domainId: 'DomainId',
      driveId: 'DriveId',
      enableProfileManagement: 'EnableProfileManagement',
      externalDomainId: 'ExternalDomainId',
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
      aliUid: 'number',
      description: 'string',
      desktopGroupCount: 'number',
      desktopGroups: { 'type': 'array', 'itemType': DescribeDrivesResponseBodyDrivesDesktopGroups },
      domainId: 'string',
      driveId: 'string',
      enableProfileManagement: 'boolean',
      externalDomainId: 'string',
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
    if(Array.isArray(this.desktopGroups)) {
      $dara.Model.validateArray(this.desktopGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrivesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  drives?: DescribeDrivesResponseBodyDrives[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * AAAA****
   */
  nextToken?: string;
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
      count: 'Count',
      drives: 'Drives',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      drives: { 'type': 'array', 'itemType': DescribeDrivesResponseBodyDrives },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.drives)) {
      $dara.Model.validateArray(this.drives);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

