// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualNodesRequestTag } from "./DescribeVirtualNodesRequestTag";


export class DescribeVirtualNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency of requests?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of resources that are allowed to return for this request. Default value: 20. Maximum value: 20.
   * 
   * >  The number of returned resources is less than or equal to the specified number.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is empty, all results have been returned.
   * 
   * You do not need to specify this parameter in the first request. From the second request, you can obtain the token from the result returned by the previous request.
   * 
   * @example
   * d78f2dd8-5979-42fe-****-b16db43be5bc
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the virtual nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the virtual node. Valid values:
   * 
   * *   Pending
   * *   Ready
   * *   Failed
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The tags that are bound to the virtual node.
   */
  tag?: DescribeVirtualNodesRequestTag[];
  /**
   * @remarks
   * The IDs of the virtual nodes. You can specify up to 20 IDs. Each ID must be a string in the JSON format.
   * 
   * @example
   * ["vnd-2ze960zkdqrldeaw****","vnd-3ebzcviqbwt25dsz****"]
   */
  virtualNodeIds?: string;
  /**
   * @remarks
   * The names of the virtual nodes.
   * 
   * @example
   * testNode
   */
  virtualNodeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      virtualNodeIds: 'VirtualNodeIds',
      virtualNodeName: 'VirtualNodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVirtualNodesRequestTag },
      virtualNodeIds: 'string',
      virtualNodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

