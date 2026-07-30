// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualBridgesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of virtual bridge IDs.
   */
  bridgeId?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 500.
   * Default value: 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mnFXZiT7NdvGNgkInJ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * > The `DirectoryId` parameter will be deprecated. Use this parameter instead.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Wuying Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeId: 'BridgeId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bridgeId)) {
      $dara.Model.validateArray(this.bridgeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

