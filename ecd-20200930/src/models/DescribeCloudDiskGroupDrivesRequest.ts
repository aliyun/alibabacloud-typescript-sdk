// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupDrivesRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-6805637***
   */
  cdsId?: string;
  /**
   * @remarks
   * The team drive name.
   * 
   * @example
   * Team 1
   */
  groupName?: string;
  /**
   * @remarks
   * The number of entries per page for paged queries.
   * 
   * - Maximum: 100
   * 
   * - Default: 20
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the start of the next query. An empty NextToken means no more results.
   * 
   * @example
   * MTA0MjA=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      groupName: 'GroupName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      groupName: 'string',
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

