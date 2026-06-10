// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualMFADevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Active Directory (AD) account usernames.
   * 
   * @example
   * testuser
   */
  endUserId?: string[];
  filter?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 500. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If a response is truncated, use the returned `NextToken` to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-269345****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. Call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

