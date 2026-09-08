// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-nye53d7p3hzyu4****
   */
  cenId?: string;
  /**
   * @remarks
   * The instance ID of the network instance to query.
   * 
   * @example
   * vpc-rj9gt5nll27onu7****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * @example
   * 1250123456123456
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether IPv6 is enabled:
   * 1. This parameter takes effect only when ProductType is set to "VPC".
   * 2. A value of true indicates that IPv6 is enabled. A value of false indicates that IPv6 is not enabled. If this parameter is left empty, results are not filtered by this parameter.
   * 
   * @example
   * true
   */
  enabledIpv6?: boolean;
  /**
   * @remarks
   * - If you do not specify the **MaxResults** parameter, pagination is not required. The **MaxResults** value in the response indicates the total number of entries.
   * - If you specify the **MaxResults** parameter, pagination is required. The **MaxResults** value specifies the number of entries to return per page. Valid values: **1** to **100**. The **MaxResults** value in the response indicates the number of entries in the current page. We recommend that you set **MaxResults** to **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent query exists.
   * - If a subsequent query exists, set this parameter to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: virtual private cloud (VPC).
   * 
   * - **VBR**: virtual border router (VBR).
   * 
   * - **CCN**: Cloud Connect Network (CCN).
   * 
   * - **VPN**: IPsec connection.
   * 
   * - **ECR**: Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  productType?: string;
  /**
   * @remarks
   * The region ID of the network instance.                   
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      enabledIpv6: 'EnabledIpv6',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      enabledIpv6: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

