// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMirrorSessionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot enter an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can enter an empty string.
   * 
   * A tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * - **false** (default): disables the traffic mirror session.
   * 
   * - **true**: enables the traffic mirror session.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - For the first query and when no next query is required, you do not need to specify this parameter.
   * - If a next query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the traffic mirror session. Valid values: **1** to **32766**.
   * 
   * A smaller value indicates a higher priority. The priorities of traffic mirror sessions created by the same Alibaba Cloud account in the same region must be unique.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirroring belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
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
   * The instance IDs of the traffic mirror sessions. The maximum value of **N** is **100**, which means you can query up to 100 traffic mirror sessions at a time.
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
   * The instance ID of the traffic mirror source. Currently, only elastic network interfaces (ENIs) are supported as traffic mirror sources.
   * 
   * @example
   * eni-j6c8znm5l1yt4sox*****
   */
  trafficMirrorSourceId?: string;
  /**
   * @remarks
   * The instance ID of the traffic mirror destination. Currently, elastic network interfaces (ENIs) and internal-facing SLB instances are supported as traffic mirror destinations.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The virtual network identifier (VNI) that is used to distinguish different mirrored traffic. Valid values: **0** to **16777215**. You can use the VNI to distinguish mirrored traffic of different sessions at the traffic mirror destination. You can specify a custom VNI or let the system randomly allocate one. To let the system randomly allocate a VNI, do not specify this parameter.
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

