// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCCloudAssistantStatusShrinkRequest extends $dara.Model {
  instanceIdsShrink?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      OSType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

