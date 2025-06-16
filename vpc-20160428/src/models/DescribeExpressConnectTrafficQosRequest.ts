// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosRequestTags } from "./DescribeExpressConnectTrafficQosRequestTags";


export class DescribeExpressConnectTrafficQosRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * - If no value is returned for NetToken, you do not need to specify this parameter.
   * - If a value is returned for NextToken, you must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of QoS policies.
   */
  qosIdList?: string[];
  /**
   * @remarks
   * The names of QoS policies.
   */
  qosNameList?: string[];
  /**
   * @remarks
   * The ID of the region in which the QoS policy is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazfdgdg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: DescribeExpressConnectTrafficQosRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosIdList: 'QosIdList',
      qosNameList: 'QosNameList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qosIdList: { 'type': 'array', 'itemType': 'string' },
      qosNameList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      tags: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.qosIdList)) {
      $dara.Model.validateArray(this.qosIdList);
    }
    if(Array.isArray(this.qosNameList)) {
      $dara.Model.validateArray(this.qosNameList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

