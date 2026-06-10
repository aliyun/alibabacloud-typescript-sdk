// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesRequest extends $dara.Model {
  accountType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * The token used to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network IDs. You can specify 1 to 100 office network IDs.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string[];
  /**
   * @remarks
   * The type of account for the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
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
  /**
   * @remarks
   * The security protection setting for the office network.
   * 
   * @example
   * SASE
   */
  securityProtection?: string;
  /**
   * @remarks
   * The office network status.
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      securityProtection: 'SecurityProtection',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      officeSiteType: 'string',
      regionId: 'string',
      securityProtection: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteId)) {
      $dara.Model.validateArray(this.officeSiteId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

