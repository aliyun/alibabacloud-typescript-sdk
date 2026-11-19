// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesRequest extends $dara.Model {
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The number of entries to return per page in a paging query.    
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
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network. You can specify 1 to 100 IDs.
   */
  officeSiteId?: string[];
  /**
   * @remarks
   * The account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions supported by Wuying Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The network security protection settings of the office network.
   * 
   * @example
   * SASE
   */
  securityProtection?: string;
  /**
   * @remarks
   * The status of the office network.
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC where the office network of the shared cloud desktop resides.
   * 
   * > This parameter is not available.
   * 
   * @example
   * vpc-uf6w8u60n8xbkg5el****
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

