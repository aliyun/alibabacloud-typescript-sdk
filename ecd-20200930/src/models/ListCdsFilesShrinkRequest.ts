// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCdsFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-320357****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user to whom the cloud drive is assigned.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of file IDs to query.
   */
  fileIdsShrink?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order of the file list.
   * 
   * @example
   * CreateTimeDesc
   */
  orderType?: string;
  /**
   * @remarks
   * The parent file ID. You can obtain this value from the FileId response parameter of this operation.
   * 
   * @example
   * 63636837e47e5a24a8a940218bef395c210e****
   */
  parentFileId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The file status.
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

