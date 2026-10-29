// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-066224****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the end user. If this parameter is not empty, only the personal drive of the specified user is queried. If this parameter is empty, the personal drives of all users are queried.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The number of entries to return per page in a paged query. This parameter is used for paging.
   * 
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set the value to the `NextToken` value returned in the last call to this operation. You do not need to specify this parameter for the first call.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions supported by Wuying Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

