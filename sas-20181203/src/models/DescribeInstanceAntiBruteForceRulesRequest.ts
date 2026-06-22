// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAntiBruteForceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of assets to display per page in a paging query. Default value: **10000**, which indicates that up to 10,000 entries of asset information are returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 115.238.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The list of server UUIDs to query.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUIDs of servers.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

