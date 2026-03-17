// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the health check.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The destination IP address of the health check.
   * 
   * @example
   * 192.XX.XX.1
   */
  dstIpAddr?: string;
  /**
   * @remarks
   * The destination port of the health check.
   * 
   * >  This parameter is not supported.
   * 
   * @example
   * 2233
   */
  dstPort?: number;
  /**
   * @remarks
   * The number of failed probes before a health check is declared failed.
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
   * The ID of the health check.
   * 
   * This parameter is required.
   * 
   * @example
   * hc-k9id4loo3lup57****
   */
  hcInstanceId?: string;
  /**
   * @remarks
   * The name of the health check.
   * 
   * The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * sss333
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of probes that are performed per health check.
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
   * The time interval at which probes are performed. The next probe does not start before the current one is complete.
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
   * The timeout period of the probe.
   * 
   * Valid values: **10** to **30000**.
   * 
   * Default value: **3000**.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  probeTimeout?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway (SAG) instance.
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
   * The number of times that the maximum RTT is exceeded before an alert is triggered.
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
   * The maximum round-trip time (RTT).
   * 
   * Valid values: **-1** and **1** to **5000**.
   * 
   * Default value: **-1**. This value indicates that the RTT threshold is not specified.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 3
   */
  rttThreshold?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-i0e85k06v1mzpo****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The source IP address of the health check.
   * 
   * @example
   * 192.XX.XX.1
   */
  srcIpAddr?: string;
  /**
   * @remarks
   * The source port of the health check.
   * 
   * >  This parameter is not supported.
   * 
   * @example
   * 3333
   */
  srcPort?: number;
  /**
   * @remarks
   * The type of packet used in the health check. Only **ICMP_ECHO** is supported.
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
      hcInstanceId: 'HcInstanceId',
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
      hcInstanceId: 'string',
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

