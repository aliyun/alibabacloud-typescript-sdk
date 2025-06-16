// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorSessionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run, without performing the actual request. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  enabled?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The maximum transmission unit (MTU).
   * 
   * Valid values: **64 to 9600**. Default value: **1500**.
   * 
   * @example
   * 1500
   */
  packetLength?: number;
  /**
   * @remarks
   * The new priority of the traffic mirror session. Valid values: **1** to **32766**.
   * 
   * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about the regions that support traffic mirroring, see [Overview of traffic mirroring](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * The new description of the traffic mirror session.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a new session.
   */
  trafficMirrorSessionDescription?: string;
  /**
   * @remarks
   * The ID of the traffic mirror session.
   * 
   * This parameter is required.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionId?: string;
  /**
   * @remarks
   * The new name of the traffic mirror session.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The ID of the traffic mirror destination.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp*****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The new type of the traffic mirror destination. Valid values:
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
   * The VXLAN network identifier (VNI) that is used to distinguish different mirrored traffic. Valid values: **0** to **16777215**.
   * 
   * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. If you do not specify a VNI, the system randomly allocates a VNI. If you want the system to randomly allocate a VNI, ignore this parameter.
   * 
   * @example
   * 10
   */
  virtualNetworkId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      enabled: 'Enabled',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      packetLength: 'PacketLength',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorSessionDescription: 'TrafficMirrorSessionDescription',
      trafficMirrorSessionId: 'TrafficMirrorSessionId',
      trafficMirrorSessionName: 'TrafficMirrorSessionName',
      trafficMirrorTargetId: 'TrafficMirrorTargetId',
      trafficMirrorTargetType: 'TrafficMirrorTargetType',
      virtualNetworkId: 'VirtualNetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      enabled: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      packetLength: 'number',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMirrorFilterId: 'string',
      trafficMirrorSessionDescription: 'string',
      trafficMirrorSessionId: 'string',
      trafficMirrorSessionName: 'string',
      trafficMirrorTargetId: 'string',
      trafficMirrorTargetType: 'string',
      virtualNetworkId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

