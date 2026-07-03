// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the health check instance.
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. The description can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * hc_123
   */
  description?: string;
  /**
   * @remarks
   * The destination IP address of the health check.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  dstIpAddr?: string;
  /**
   * @remarks
   * The destination port of the health check.
   * 
   * > This feature is currently not supported.
   * 
   * @example
   * 1333
   */
  dstPort?: number;
  /**
   * @remarks
   * The threshold for the number of consecutive probe failures.
   * 
   * Valid values: **1** to **15**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 3
   */
  failCountThreshold?: number;
  /**
   * @remarks
   * The name of the health check instance.
   * 
   * The name must be 2 to 100 characters in length, and must start with a letter or a Chinese character. The name can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * hc-123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of probes per health check.
   * 
   * Valid values: **1** to **20**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  probeCount?: number;
  /**
   * @remarks
   * The interval between health check probes. The next probe will not be initiated until the current probe is complete.
   * 
   * Valid values: **1000** to **60000**.
   * 
   * Default value: **2000**.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  probeInterval?: number;
  /**
   * @remarks
   * The timeout period for a single probe.
   * 
   * Valid values: **10** to **30000**.
   * 
   * Default value: **1000**.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  probeTimeout?: number;
  /**
   * @remarks
   * The ID of the region where the Smart Access Gateway instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number of times that the RTT threshold can be reached.
   * 
   * Valid values: **1** to **15**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 3
   */
  rttFailThreshold?: number;
  /**
   * @remarks
   * The round-trip time (RTT) threshold.
   * 
   * Valid values: **-1** or **1** to **5000**.
   * 
   * Default value: **-1**, which indicates that no RTT threshold is set.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  rttThreshold?: number;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-1um5x5nwhilymw****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The source IP address of the health check instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.XX.XX.1
   */
  srcIpAddr?: string;
  /**
   * @remarks
   * The source port of the health check.
   * 
   * > This feature is currently not supported.
   * 
   * @example
   * 1344
   */
  srcPort?: number;
  /**
   * @remarks
   * The type of health check packets.
   * 
   * > Only **ICMP_ECHO** is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ICMP_ECHO
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

