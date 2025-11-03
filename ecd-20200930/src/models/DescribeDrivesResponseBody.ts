// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrivesResponseBodyDrivesDesktopGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * @example
   * dg-aaaa****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer pool.
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
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1202****
   */
  aliUid?: number;
  /**
   * @remarks
   * The introduction to the storage resource.
   * 
   * @example
   * test****
   */
  description?: string;
  /**
   * @remarks
   * The number of associated cloud computer pools.
   * 
   * >  This parameter is returned only if ResourceType is set to NAS and Type is set to USER_PROFILE.
   * 
   * @example
   * 1
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The details of the associated cloud computers.
   * 
   * >  This parameter is returned only if ResourceType is set to NAS and Type is set to USER_PROFILE.
   */
  desktopGroups?: DescribeDrivesResponseBodyDrivesDesktopGroups[];
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
   * Indicates whether the UPM feature is enabled.
   * 
   * @example
   * true
   */
  enableProfileManagement?: boolean;
  /**
   * @remarks
   * The ID of the external storage resource.
   * 
   * *   If ResourceType is set to NAS, the NAS ID is returned for this parameter.
   * *   If ResourceType is set to PDS, the PDS ID is returned for this parameter.
   * 
   * @example
   * 0976****
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The ID of the storage resource at the external user level.
   * 
   * >  This parameter is returned only if ResourceType is set to PDS.
   * 
   * @example
   * 1100****
   */
  externalDriveId?: string;
  /**
   * @remarks
   * The ID of the external user.
   * 
   * >  This parameter is returned only if ResourceType is set to PDS.
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
   * The time when the storage resource was modified.
   * 
   * @example
   * 2025-07-07T02:46:04.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * >  You can ignore this parameter.
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
   * *   DELETING: deleting
   * *   INVALID: invalid
   * *   NORMAL: normal
   * *   FAIL: failed
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The total amount of user-level storage capacity.
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
   * *   USER_PROFILE: personal data space
   * 
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
   * @remarks
   * The amount of user-level storage capacity used.
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
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of storage resources.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The user-level storage resources.
   */
  drives?: DescribeDrivesResponseBodyDrives[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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

