// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorSessionsRequestTags } from "./ListTrafficMirrorSessionsRequestTags";


export class ListTrafficMirrorSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * *   **false**: does not enable the traffic mirror session.
   * *   **true**: enables the traffic mirror session.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query and no next queries are to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
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
   * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region to which the traffic mirror session belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirroring, see [Overview of traffic mirroring](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the mirrored traffic belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: ListTrafficMirrorSessionsRequestTags[];
  /**
   * @remarks
   * The ID of the traffic mirror filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The IDs of the traffic mirror session. The maximum value of N is 100, which indicates that you can query up to 100 traffic mirror sessions at a time.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionIds?: string[];
  /**
   * @remarks
   * The name of the traffic mirror session.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The ID of the traffic mirror source. You can specify only an elastic network interface (ENI) as the mirror source.
   * 
   * @example
   * eni-j6c8znm5l1yt4sox*****
   */
  trafficMirrorSourceId?: string;
  /**
   * @remarks
   * The ID of the traffic mirror destination. You can specify only an ENI or a Server Load Balancer (SLB) instance as a traffic mirror destination.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The VXLAN network identifier (VNI) that is used to distinguish different mirrored traffic. Valid values: **0** to **16777215**. You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI that is allocated by the system. If you want the system to randomly allocate a VNI, ignore this parameter.
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

