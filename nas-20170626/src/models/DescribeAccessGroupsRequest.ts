// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * - The name must be 3 to 64 characters in length.
   * 
   * - The name must start with a letter and can contain letters, digits, underscores (_), or hyphens (-).
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * - standard (default): General-purpose NAS.
   * - extreme: Extreme NAS.
   * - cpfs: Cloud Parallel File Storage (CPFS).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number of the list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of permission groups on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned time is displayed in UTC.
   * 
   * Valid values:
   * 
   * - true (default): The returned time is displayed in UTC.
   * - false: The returned time is not displayed in UTC.
   * 
   * @example
   * true
   */
  useUTCDateTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      useUTCDateTime: 'UseUTCDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      useUTCDateTime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

