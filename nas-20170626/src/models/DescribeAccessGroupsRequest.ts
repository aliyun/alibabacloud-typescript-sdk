// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * *   The name must be 3 to 64 characters in length.
   * *   The name must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
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
   * *   standard: General-purpose Apsara File Storage NAS (NAS) file system
   * *   extreme: Extreme NAS file system.
   * *   cpfs: CPFS file system.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of permission groups returned per page.
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
   * Specifies whether to display the creation time of the permission group in UTC.
   * 
   * Valid values:
   * 
   * *   true (default): The time is displayed in UTC.
   * *   false: The time is not displayed in UTC.
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

