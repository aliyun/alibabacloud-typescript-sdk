// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCdsFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-320357****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user to whom the cloud disk is allocated.
   * 
   * @example
   * testUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The IDs of the files to be queried.
   */
  fileIdsShrink?: string;
  groupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * WyI2Mzg4MjAwMzFhNGQwZWVmN2I3MjRkZjZhZjAyMWU4YzY1MmRjZmUyIiwibiIsIm4iLDEsLTEsMTY2OTg2NTQ3NTMxMiwiNjM4ODIwMDNlNTU0YmZiZjFkYTk0MmEyYTZhMjEyZDkxODdjMjAy****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting method of the files.
   * 
   * Valid values:
   * 
   * *   CreateTimeDesc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in descending order based on the time when they are created.
   * 
   *     <!-- -->
   * 
   * *   ModifiedTimeAsc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in ascending order based on the time when they are modified.
   * 
   *     <!-- -->
   * 
   * *   NameDesc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in descending order based on their names.
   * 
   *     <!-- -->
   * 
   * *   SizeAsc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in ascending order based on their sizes.
   * 
   *     <!-- -->
   * 
   * *   ModifiedTimeDesc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in descending order based on the time when they are modified.
   * 
   *     <!-- -->
   * 
   * *   CreateTimeAsc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in ascending order based on the time when they are created.
   * 
   *     <!-- -->
   * 
   * *   SizeDesc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in descending order based on their sizes.
   * 
   *     <!-- -->
   * 
   * *   NameAsc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts files in ascending order based on their names.
   * 
   *     <!-- -->
   * 
   * @example
   * CreateTimeDesc
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the parent file.
   * 
   * @example
   * 63636837e47e5a24a8a940218bef395c210e****
   */
  parentFileId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The file status.
   * 
   * Valid values:
   * 
   * *   available
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     returns only normal files.
   * 
   *     <!-- -->
   * 
   * *   uploading
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     returns only the files that are being uploaded.
   * 
   *     <!-- -->
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileIdsShrink: 'FileIds',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      parentFileId: 'ParentFileId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileIdsShrink: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderType: 'string',
      parentFileId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

