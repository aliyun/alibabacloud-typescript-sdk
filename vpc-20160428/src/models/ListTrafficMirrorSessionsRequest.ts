// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMirrorSessionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class ListTrafficMirrorSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the traffic mirror session is enabled. Valid values:
   * 
   * - **false** (default): The traffic mirror session is not enabled.
   * 
   * - **true**: The traffic mirror session is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return in this query. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no next query exists.
   * - If a next query exists, set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of traffic mirror session. Valid values: **1** to **32766**.
   * 
   * A smaller value indicates a higher priority. The priority of traffic mirror session created by the same account in the same region must be unique.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID. For information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirroring session belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTrafficMirrorSessionsRequestTags[];
  /**
   * @remarks
   * The instance ID of the traffic mirror filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The instance IDs of traffic mirror sessions. The maximum value of **N** is **100**, which means you can query up to 100 traffic mirror sessions.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionIds?: string[];
  /**
   * @remarks
   * The name of the traffic mirror session.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The instance ID of the traffic mirror source. Currently, elastic network interfaces (ENIs) are supported as traffic mirror sources.
   * 
   * @example
   * eni-j6c8znm5l1yt4sox*****
   */
  trafficMirrorSourceId?: string;
  /**
   * @remarks
   * The instance ID of the traffic mirror destination. Currently, elastic network interfaces (ENIs) and internal-facing SLB instances are supported as traffic mirror destinations. Elastic network interfaces are also referred to as network interface controllers (NICs).
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The Virtual Network Identifier (VNI) used to distinguish different mirrored data. Valid values: **0** to **16777215**. You can use the VNI to identify mirrored data from different sessions at the traffic mirror destination. You can specify a custom VNI value or let the system randomly assign one. To let the system randomly assign a value, do not specify this parameter.
   * 
   * @example
   * 10
   */
  virtualNetworkId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorSessionIds: 'TrafficMirrorSessionIds',
      trafficMirrorSessionName: 'TrafficMirrorSessionName',
      trafficMirrorSourceId: 'TrafficMirrorSourceId',
      trafficMirrorTargetId: 'TrafficMirrorTargetId',
      virtualNetworkId: 'VirtualNetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListTrafficMirrorSessionsRequestTags },
      trafficMirrorFilterId: 'string',
      trafficMirrorSessionIds: { 'type': 'array', 'itemType': 'string' },
      trafficMirrorSessionName: 'string',
      trafficMirrorSourceId: 'string',
      trafficMirrorTargetId: 'string',
      virtualNetworkId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.trafficMirrorSessionIds)) {
      $dara.Model.validateArray(this.trafficMirrorSessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

