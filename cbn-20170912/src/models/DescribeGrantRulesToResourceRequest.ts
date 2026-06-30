// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToResourceRequest extends $dara.Model {
  /**
   * @remarks
   * - If you omit this parameter, all entries are returned in a single response. In this case, the **MaxResults** field in the response indicates the total number of entries.
   * 
   * - If you specify the **MaxResults** parameter, the query is paginated. **MaxResults** sets the number of entries per page. The value must be an integer from **1** to **100**. The **MaxResults** value in the response indicates the number of entries on the current page. The recommended value for this parameter is **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * 
   * - Omit this parameter for the first request.
   * 
   * - For subsequent requests, set this parameter to the **NextToken** value from the previous response.
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
   * - **VPC**: a Virtual Private Cloud (VPC) instance.
   * 
   * - **ExpressConnect**: a Virtual Border Router (VBR) instance.
   * 
   * - **VPN**: an IPsec connection.
   * 
   * - **ECR**: an ExpressConnect Router (ECR) instance.
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
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-p0wfut1iqauelpdpb****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
      resourceId: 'string',
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

