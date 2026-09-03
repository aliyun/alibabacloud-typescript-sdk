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
   * The team space name.
   * 
   * @example
   * Team1
   */
  groupName?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100
   * - Default value: 20
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results are available.
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

