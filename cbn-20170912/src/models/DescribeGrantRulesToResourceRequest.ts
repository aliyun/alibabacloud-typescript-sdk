// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToResourceRequest extends $dara.Model {
  /**
   * @remarks
   * *   If you do not specify a value for **MaxResults**, entries are returned in one response. After you send the request, the value of **MaxResults** includes all entries.
   * *   If you specify a value for **MaxResults**, entries are returned in batches. The value of **MaxResults** indicates the total number of entries returned per batch. Valid values: **1** to **100**. After you send the request, the value of **MaxResults** indicates the number of entries returned in the current response. We recommend that you set **MaxResults** to **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of the **NextToken** parameter.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of network instance. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **ExpressConnect**: virtual border router (VBR)
   * *   **VPN**: IPsec-VPN connection
   * *   **ECR**: Express Connect Router (ECR)
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
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The network instance ID.
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

