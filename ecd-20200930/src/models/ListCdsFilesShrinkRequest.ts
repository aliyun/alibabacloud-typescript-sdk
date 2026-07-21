// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCdsFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-320357****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user to which the network disk is assigned.
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
  /**
   * @remarks
   * The ID of the team space.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
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
   * The query token. Set the value to the value of the `NextToken` parameter returned in the last call to the operation. You do not need to set this parameter when you call the operation for the first time.
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
   * *   CreateTimeDesc: sorts the by creation time in descending order.
   * *   ModifiedTimeAsc: sort the by modification time in ascending order.
   * *   NameDesc: sorts the by file name in descending order.
   * *   SizeAsc: sorts by file size in ascending order.
   * *   ModifiedTimeDesc: sort the by modification time in descending order.
   * *   CreateTimeAsc: sorts the by creation time in ascending order.
   * *   SizeDesc: sorts by file size in descending order.
   * *   NameAsc: sorts by file name in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderType?: string;
  /**
   * @remarks
   * The parent folder ID. You can obtain the value by using the response parameter `FileId` of this operation.
   * 
   * @example
   * 63636837e47e5a24a8a940218bef395c210e****
   */
  parentFileId?: string;
  /**
   * @remarks
   * The ID of the logon region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to obtain the list of regions supported by cloud computers.
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
   * *   available: returns only normal file.
   * *   uploading: returns only the of objects that are being uploaded.
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

