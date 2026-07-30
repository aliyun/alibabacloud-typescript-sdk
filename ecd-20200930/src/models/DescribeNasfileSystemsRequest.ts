// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of NAS file system IDs.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string[];
  /**
   * @remarks
   * Specifies whether to include only NAS file systems that support UPM in the query results.
   * 
   * @example
   * false
   */
  matchCompatibleProfile?: boolean;
  /**
   * @remarks
   * The number of entries per page for a paged query.    
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
   * The pagination token. Set this parameter to the value of NextToken returned in the previous API call.
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
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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

