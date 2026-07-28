// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorSessionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the configuration of the traffic mirror session is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * - **false** (default): does not enable the traffic mirror session.
   * 
   * - **true**: enables the traffic mirror session.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The maximum length of the mirrored original packet, excluding the VXLAN header. Default value: **1500**. Valid values: **64** to **8500**. Unit: bytes.
   * - The value of this parameter affects the length of packets received at the traffic mirror destination. For more information, see the mirrored packet length and MTU limits in [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * - This parameter is available only in specific regions. For more information, see the mirrored packet length parameter description in [Create and manage traffic mirror sessions](https://help.aliyun.com/document_detail/207514.html).
   * 
   * @example
   * 1500
   */
  packetLength?: number;
  /**
   * @remarks
   * The new priority of traffic mirror session. Valid values: **1** to **32766**.
   * A smaller value indicates a higher priority. The priorities of traffic mirror sessions created by the same account in the same region must be unique.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list. For information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
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
   * The instance ID of the new traffic mirror filter.
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
   * The instance ID of the traffic mirror session to modify.
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
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The instance ID of the new traffic mirror destination.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp*****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The new traffic mirror destination type. Valid values:
   * 
   * - **NetworkInterface**: network interface controller (NIC).
   * 
   * - **SLB**: private network load balancing instance.
   * 
   * @example
   * NetworkInterface
   */
  trafficMirrorTargetType?: string;
  /**
   * @remarks
   * The new VXLAN network identifier (VNI) that is used to distinguish mirrored data from different traffic mirror sessions. Valid values: **0** to **16777215**.
   * You can use the VNI to identify mirrored data from different sessions at the traffic mirror destination. You can specify a custom VNI or use a system-allocated value. If you want the system to randomly allocate a VNI, do not configure this parameter.
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

