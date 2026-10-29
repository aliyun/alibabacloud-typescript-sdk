// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPeerConnectionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. If you specify this parameter, it cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. If you specify this parameter, it can be an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
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

export class ListVpcPeerConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC peering connection that you want to query.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the VPC peering connection that you want to query.
   * 
   * @example
   * vpcpeer
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * - If this is your first request or no subsequent request is to be sent, leave this parameter empty.
   * - If a subsequent request is to be sent, set the value to the NextToken value returned from the last API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the VPC peering connection that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource groups, see [What is a resource group](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVpcPeerConnectionsRequestTags[];
  /**
   * @remarks
   * Filters the results by the VPC IDs of the initiator and acceptor. The filter does not distinguish between the initiator and the acceptor. If you specify only one VPC ID, the results are filtered based on the specified VPC ID.
   */
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcPeerConnectionsRequestTags },
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

