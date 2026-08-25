// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectedResourcesResponseBodyProtectedResources extends $dara.Model {
  /**
   * @remarks
   * The number of backup plans.
   * 
   * @example
   * 1
   */
  backupPlanCount?: number;
  /**
   * @remarks
   * The product capability to which the resource belongs. Valid values:
   * - **HBR**: Cloud Backup standard capability.
   * - **BASIC**: ECS File Backup Essential Edition.
   * 
   * @example
   * BASIC
   */
  createdByProduct?: string;
  /**
   * @remarks
   * The amount of protected data, in bytes. Currently, only ECS File Backup Essential Edition is supported.
   * - **SourceType=ECS_FILE**: the backed-up block storage capacity.
   * 
   * @example
   * 107374182400
   */
  protectedDataSize?: number;
  /**
   * @remarks
   * The ID of the protected resource.
   * 
   * @example
   * pr-0004************gs61
   */
  protectedResourceId?: string;
  /**
   * @remarks
   * The resource ID.
   * - **SourceType=ECS_FILE**: the ECS instance ID.
   * - **SourceType=COMMON_FILE_SYSTEM**: the CPFS data source ID.
   * - **SourceType=COMMON_NAS**: the on-premises NAS data source ID.
   * - **SourceType=File**: the local service client ID.
   * - **SourceType=NAS**: the Alibaba Cloud NAS file system ID.
   * - **SourceType=OSS**: the OSS bucket.
   * 
   * @example
   * i-wz95************7zrd
   */
  resourceId?: string;
  /**
   * @remarks
   * The UID of the user who owns the resource.
   * 
   * @example
   * 1024********0703
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The number of backups.
   * 
   * @example
   * 30
   */
  snapshotCount?: number;
  /**
   * @remarks
   * The backup feature type. Valid values:
   * - **ECS_FILE**: ECS file backup.
   * - **COMMON_FILE_SYSTEM**: Cloud Parallel File Storage (CPFS) backup.
   * - **COMMON_NAS**: on-premises NAS backup.
   * - **File**: on-premises file backup.
   * - **NAS**: Alibaba Cloud NAS backup.
   * - **OSS**: OSS backup.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanCount: 'BackupPlanCount',
      createdByProduct: 'CreatedByProduct',
      protectedDataSize: 'ProtectedDataSize',
      protectedResourceId: 'ProtectedResourceId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      snapshotCount: 'SnapshotCount',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanCount: 'number',
      createdByProduct: 'string',
      protectedDataSize: 'number',
      protectedResourceId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      snapshotCount: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectedResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message. The value "successful" is returned for a successful request. An error message is returned for a failed request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. If this parameter is empty, no more pages are available.
   * 
   * @example
   * eyJJ************MX0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of protected resources.
   */
  protectedResources?: ListProtectedResourcesResponseBodyProtectedResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB09****-****-****-****-********6C38
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of protected resources.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      protectedResources: 'ProtectedResources',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      protectedResources: { 'type': 'array', 'itemType': ListProtectedResourcesResponseBodyProtectedResources },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protectedResources)) {
      $dara.Model.validateArray(this.protectedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

