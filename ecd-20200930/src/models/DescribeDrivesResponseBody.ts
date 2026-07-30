// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrivesResponseBodyDrivesDesktopGroups extends $dara.Model {
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * @example
   * dg-aaaa****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer pool name.
   * 
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
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1202****
   */
  aliUid?: number;
  /**
   * @remarks
   * The storage resource description.
   * 
   * @example
   * test****
   */
  description?: string;
  /**
   * @remarks
   * The number of associated cloud computer pools.
   * > This parameter is returned only when the storage resource is NAS and the purpose is USER_PROFILE.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The list of associated cloud computer pool details.
   * > This parameter is returned only when the storage resource is NAS and the purpose is USER_PROFILE.
   */
  desktopGroups?: DescribeDrivesResponseBodyDrivesDesktopGroups[];
  /**
   * @remarks
   * The storage resource ID.
   * 
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @remarks
   * The user-level storage resource ID.
   * 
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @remarks
   * Indicates whether the User Profile Management (UPM) feature is enabled.
   * 
   * @example
   * true
   */
  enableProfileManagement?: boolean;
  /**
   * @remarks
   * The external storage resource ID.
   * - If the storage resource is NAS, this parameter returns the NAS ID.
   * - If the storage resource is PDS, this parameter returns the PDS ID.
   * 
   * @example
   * 0976****
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The external user-level storage resource ID.
   * > This parameter is returned only when the storage resource is PDS.
   * 
   * @example
   * 1100****
   */
  externalDriveId?: string;
  /**
   * @remarks
   * The external user ID.
   * > This parameter is returned only when the storage resource is PDS.
   * 
   * @example
   * user01@cn-hangzhou.120****
   */
  externalUserId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-02T08:42:26.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-07-07T02:46:04.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * > You can ignore this parameter.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The storage resource name.
   * 
   * @example
   * test****
   */
  name?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * -
   */
  profileRoaming?: boolean;
  /**
   * @remarks
   * The status of the user-level storage resource.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the user-level storage resource.
   * 
   * @example
   * 536870912000
   */
  totalSize?: number;
  /**
   * @remarks
   * The purpose of the storage resource.
   * 
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
   * @remarks
   * The used capacity of the user-level storage resource.
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
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The list of user-level storage resources.
   */
  drives?: DescribeDrivesResponseBodyDrives[];
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
   * The pagination token for the next query. An empty value indicates that there are no more results.
   * 
   * @example
   * AAAA****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

