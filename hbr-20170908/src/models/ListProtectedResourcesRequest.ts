// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectedResourcesRequest extends $dara.Model {
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
   * Specifies whether the resource has backup points.
   * 
   * @example
   * true
   */
  hasSnapshot?: boolean;
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
   * The pagination token for the next page. If this parameter is empty, no more pages are available.
   * 
   * @example
   * aWQj********MCMy
   */
  nextToken?: string;
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
   * The number of entries to skip for paging.
   * If the number of skipped entries exceeds the total number of conditional entries, an empty list is returned. The number of skipped entries must be a multiple of MaxResults.
   * 
   * @example
   * 10
   */
  skip?: number;
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
      createdByProduct: 'CreatedByProduct',
      hasSnapshot: 'HasSnapshot',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      skip: 'Skip',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdByProduct: 'string',
      hasSnapshot: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      skip: 'number',
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

