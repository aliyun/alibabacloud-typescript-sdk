// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags } from "./ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags";


export class ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions extends $dara.Model {
  /**
   * @remarks
   * The time when the session is created.
   * 
   * @example
   * 2023-09-05T15:26Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the traffic mirror session was enabled.
   * 
   * *   **false** 
   * *   **true**
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum transmission unit.
   * 
   * @example
   * 1500
   */
  packetLength?: number;
  /**
   * @remarks
   * The priority of the traffic mirror session.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirror session belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags[];
  /**
   * @remarks
   * The ID of the filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The status of the traffic mirror session.
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  trafficMirrorSessionBusinessStatus?: string;
  /**
   * @remarks
   * The description of the traffic mirror session.
   * 
   * @example
   * This is a session.
   */
  trafficMirrorSessionDescription?: string;
  /**
   * @remarks
   * The ID of the traffic mirror session.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionId?: string;
  /**
   * @remarks
   * The name of the traffic mirror session.
   * 
   * @example
   * abc
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The status of the traffic mirror session. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  trafficMirrorSessionStatus?: string;
  /**
   * @remarks
   * The ID of the traffic mirror source.
   */
  trafficMirrorSourceIds?: string[];
  /**
   * @remarks
   * The ID of the traffic mirror destination.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The type of the traffic mirror destination. Valid values:
   * 
   * *   **NetworkInterface**: an elastic network interface (ENI)
   * *   **SLB**: an internal-facing Server Load Balancer (SLB) instance
   * 
   * @example
   * NetworkInterface
   */
  trafficMirrorTargetType?: string;
  /**
   * @remarks
   * You can specify VNIs to distinguish different mirrored traffic.
   * 
   * @example
   * 10
   */
  virtualNetworkId?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      enabled: 'Enabled',
      packetLength: 'PacketLength',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorSessionBusinessStatus: 'TrafficMirrorSessionBusinessStatus',
      trafficMirrorSessionDescription: 'TrafficMirrorSessionDescription',
      trafficMirrorSessionId: 'TrafficMirrorSessionId',
      trafficMirrorSessionName: 'TrafficMirrorSessionName',
      trafficMirrorSessionStatus: 'TrafficMirrorSessionStatus',
      trafficMirrorSourceIds: 'TrafficMirrorSourceIds',
      trafficMirrorTargetId: 'TrafficMirrorTargetId',
      trafficMirrorTargetType: 'TrafficMirrorTargetType',
      virtualNetworkId: 'VirtualNetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      enabled: 'boolean',
      packetLength: 'number',
      priority: 'number',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags },
      trafficMirrorFilterId: 'string',
      trafficMirrorSessionBusinessStatus: 'string',
      trafficMirrorSessionDescription: 'string',
      trafficMirrorSessionId: 'string',
      trafficMirrorSessionName: 'string',
      trafficMirrorSessionStatus: 'string',
      trafficMirrorSourceIds: { 'type': 'array', 'itemType': 'string' },
      trafficMirrorTargetId: 'string',
      trafficMirrorTargetType: 'string',
      virtualNetworkId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.trafficMirrorSourceIds)) {
      $dara.Model.validateArray(this.trafficMirrorSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

