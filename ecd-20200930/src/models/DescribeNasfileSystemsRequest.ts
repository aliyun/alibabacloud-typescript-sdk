// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the NAS file systems.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string[];
  /**
   * @remarks
   * Specifies whether to return only NAS file systems that are compatible with User Profile Management (UPM).
   * 
   * @example
   * false
   */
  matchCompatibleProfile?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Maximum value: 100.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions where Elastic Desktop Service (EDS) is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      matchCompatibleProfile: 'MatchCompatibleProfile',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      matchCompatibleProfile: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemId)) {
      $dara.Model.validateArray(this.fileSystemId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

