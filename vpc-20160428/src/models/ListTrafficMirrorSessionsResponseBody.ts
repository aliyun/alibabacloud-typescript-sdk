// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions extends $dara.Model {
  /**
   * @remarks
   * The time when the traffic mirror session was created.
   * 
   * @example
   * 2023-09-05T15:26Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the traffic mirror session is enabled. Valid values:
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
   * The length of the original packet to be mirrored (excluding the VXLAN packet length). Default value: **1500**. Valid values: **64** to **8500**. Unit: bytes.
   * - This parameter affects the packet length received by the traffic mirror destination. For more information, see the mirrored packet length and MTU limits in [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * - This parameter is available only in specific regions. For more information, see the mirrored packet length parameter description in [Create and manage traffic mirrors](https://help.aliyun.com/document_detail/207514.html).
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
   * The ID of the resource group to which the traffic mirroring session belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessionsTags[];
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
   * The business status of the traffic mirror session. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: financial lock.
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
   * The instance ID of the traffic mirror session.
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
   * - **Creating**: being created.
   * - **Created**: created.
   * - **Modifying**: being modified.
   * - **Deleting**: being deleted.
   * 
   * @example
   * Created
   */
  trafficMirrorSessionStatus?: string;
  /**
   * @remarks
   * The instance IDs of the traffic mirror sources.
   */
  trafficMirrorSourceIds?: string[];
  /**
   * @remarks
   * The instance ID of the traffic mirror destination.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The traffic mirror destination type. Valid values:
   * 
   * - **NetworkInterface**: network interface controller (NIC).
   * 
   * - **SLB**: internal-facing SLB instance.
   * 
   * @example
   * NetworkInterface
   */
  trafficMirrorTargetType?: string;
  /**
   * @remarks
   * The VNI used to distinguish different mirrored data.
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

export class ListTrafficMirrorSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** has a value, the value is the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739CA01C-92EB-4C69-BCC0-280149C6F41E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The details of traffic mirror sessions.
   */
  trafficMirrorSessions?: ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMirrorSessions: 'TrafficMirrorSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      trafficMirrorSessions: { 'type': 'array', 'itemType': ListTrafficMirrorSessionsResponseBodyTrafficMirrorSessions },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMirrorSessions)) {
      $dara.Model.validateArray(this.trafficMirrorSessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

