// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCCloudAssistantStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of entries per page. If you specify `InstanceId`, this parameter does not take effect.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type of the instance. Only **Linux** is supported.
   * 
   * Valid values:
   * 
   * *   Windows
   * *   Linux
   * *   FreeBSD
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
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

