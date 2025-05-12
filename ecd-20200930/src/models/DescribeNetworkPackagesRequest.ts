// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The charge type of the pay-as-you-go premium bandwidth plan.
   * 
   * Valid values:
   * 
   * *   PayByTraffic: charges by data transfer.
   * 
   * *   PayByBandwidth: charges by fixed bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Maximum value: 100
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the premium bandwidth plan. You can specify 1 to 100 IDs.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
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
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      networkPackageId: 'NetworkPackageId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      maxResults: 'number',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkPackageId)) {
      $dara.Model.validateArray(this.networkPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

