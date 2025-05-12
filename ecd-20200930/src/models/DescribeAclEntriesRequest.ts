// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 1600.
   * *   Default value: 1600.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kRxd1mKkNnHlUy14zdjl/I
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shanghai+dir-631324****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance to which the ACL applies. You can specify an office network ID or a cloud computer ID.
   * 
   * @example
   * cn-hangzhou+dir-****
   */
  sourceId?: string;
  /**
   * @remarks
   * The granularity of the ACL.
   * 
   * Valid values:
   * 
   * *   desktop: cloud computer
   * *   vpc: office network
   * 
   * @example
   * desktop
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

