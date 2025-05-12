// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsInGroupRequest extends $dara.Model {
  customEndTimePeriod?: number;
  customStartTimePeriod?: number;
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Specifies whether to ignore deletion flags.
   * 
   * Default value: true. Valid values:
   * 
   * *   true: ignores deletion flags. The cloud computers that were deleted are returned.
   * *   false: does not ignore deletion flags. The cloud computers that were deleted are not returned.
   * 
   * @example
   * true
   */
  ignoreDeleted?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * *   Default value: 10.
   * *   Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The billing method of the cloud computer share.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

