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
   * - **HBR**: Cloud Backup standard capabilities.
   * - **BASIC**: ECS File Backup Essential Edition.
   * 
   * @example
   * BASIC
   */
  createdByProduct?: string;
  /**
   * @remarks
   * The protected data volume, in bytes. This parameter is supported only for ECS File Backup Essential Edition.
   * - **SourceType=ECS_FILE**: the storage capacity of the backed-up block storage.
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
   * The resource ID. The meaning of this parameter varies based on the value of SourceType:
   * - **SourceType=ECS_FILE**: the ECS instance ID.
   * - **SourceType=COMMON_FILE_SYSTEM**: the CPFS data source ID.
   * - **SourceType=COMMON_NAS**: the on-premises NAS data source ID.
   * - **SourceType=File**: the on-premises server client ID.
   * - **SourceType=NAS**: the Alibaba Cloud NAS file system ID.
   * - **SourceType=OSS**: the OSS bucket.
   * 
   * @example
   * i-wz95************7zrd
   */
  resourceId?: string;
  /**
   * @remarks
   * The UID of the user to whom the resource belongs.
   * 
   * @example
   * 1024********0703
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The number of backup snapshots.
   * 
   * @example
   * 30
   */
  snapshotCount?: number;
  /**
   * @remarks
   * The type of backup feature. Valid values:
   * - **ECS_FILE**: ECS file backup.
   * - **COMMON_FILE_SYSTEM**: CPFS backup.
   * - **COMMON_NAS**: On-premises NAS backup.
   * - **File**: On-premises file backup.
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
   * The maximum number of results to return per query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The return message. A value of successful indicates success. If an error occurs, the corresponding error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. If NextToken is empty, no next page exists.
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
   * Indicates whether the request is successful.
   * 
   * - true: The request is successful.
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

