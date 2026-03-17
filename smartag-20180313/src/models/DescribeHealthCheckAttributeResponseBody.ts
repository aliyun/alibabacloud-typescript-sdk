// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the health check instance was created. This value is a UNIX timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1586759657000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the health check instance.
   * 
   * @example
   * hc-123
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
   * The destination port of the health check instance.
   * 
   * >  This feature is not supported.
   * 
   * @example
   * 1223
   */
  dstPort?: number;
  /**
   * @remarks
   * The maximum number of failed probes before the health check is declared failed.
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
   * The ID of the health check instance.
   * 
   * @example
   * hc-1k4ucuq77b56x4****
   */
  hcInstanceId?: string;
  /**
   * @remarks
   * The name of the health check instance.
   * 
   * @example
   * bvt-test-03****
   */
  name?: string;
  /**
   * @remarks
   * The number of probes performed per health check.
   * 
   * Valid values: **1** to **20**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 3
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
   * The ID of the request.
   * 
   * @example
   * DDA08B78-5634-4A83-94E4-5C58FD7EBA19
   */
  requestId?: string;
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
   * Value values: **-1** and **1** to **5000**.
   * 
   * Default value: **-1**. This value indicates that the RTT threshold is not specified.
   * 
   * @example
   * 300
   */
  rttThreshold?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-1um5x5nwhilymw****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The source IP address of the health check.
   * 
   * @example
   * 10.XX.XX.1
   */
  srcIpAddr?: string;
  /**
   * @remarks
   * The source port of the health check instance.
   * 
   * >  This feature is not supported.
   * 
   * @example
   * 2334
   */
  srcPort?: number;
  /**
   * @remarks
   * The type of packets used in the health check.
   * 
   * Only **ICMP_ECHO** is supported.
   * 
   * @example
   * ICMP_ECHO
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      requestId: 'RequestId',
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
      createTime: 'number',
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      hcInstanceId: 'string',
      name: 'string',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      requestId: 'string',
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

