// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise network drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-066224****
   */
  cdsId?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * If specified, the query returns only the personal drive of that user. If left empty, the query returns the personal drives of all users.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - Maximum: 100.
   * 
   * - Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. This is the `NextToken` value from the previous response. Leave this parameter empty for the first request.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. To obtain a list of supported regions, call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html).
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

