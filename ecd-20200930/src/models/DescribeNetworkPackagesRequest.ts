// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPackagesRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the pay-as-you-go premium Internet bandwidth plan.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.    
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
   * The IDs of the premium Internet bandwidth plans. You can specify 1 to 100 IDs.
   * 
   * @example
   * np-amtp8e8q1o9e4****
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
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
  tag?: DescribeNetworkPackagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      networkPackageId: 'NetworkPackageId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      maxResults: 'number',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNetworkPackagesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.networkPackageId)) {
      $dara.Model.validateArray(this.networkPackageId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

