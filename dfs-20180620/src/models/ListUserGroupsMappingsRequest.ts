// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Apsara File Storage for HDFS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  filesystemId?: string;
  /**
   * @remarks
   * The region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The number of users to return per query.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The starting point for the next page in a paged query. Set this parameter to an empty string for the first query. If paged queries are required, the response to each request includes the NextToken value for the next request.
   * 
   * @example
   * user1
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filesystemId: 'FilesystemId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystemId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

