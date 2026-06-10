// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsInGroupRequest extends $dara.Model {
  customEndTimePeriod?: number;
  customStartTimePeriod?: number;
  /**
   * @remarks
   * The ID of the desktop group.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return deleted desktops.
   * 
   * @example
   * true
   */
  ignoreDeleted?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on a single page.
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
   * The token that is used to start the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customEndTimePeriod: 'CustomEndTimePeriod',
      customStartTimePeriod: 'CustomStartTimePeriod',
      desktopGroupId: 'DesktopGroupId',
      ignoreDeleted: 'IgnoreDeleted',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEndTimePeriod: 'number',
      customStartTimePeriod: 'number',
      desktopGroupId: 'string',
      ignoreDeleted: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
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

