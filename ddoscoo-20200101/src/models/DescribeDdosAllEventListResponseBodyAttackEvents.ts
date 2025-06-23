// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosAllEventListResponseBodyAttackEvents extends $dara.Model {
  /**
   * @remarks
   * The source location or region from which the attack was initiated. Valid values:
   * 
   * *   **cn**: Chinese mainland
   * *   **alb-cn-hongkong-gf-2**: China (Hongkong)
   * *   **alb-us-west-1-gf-2**: US (Silicon Valley)
   * *   **alb-ap-northeast-1-gf-1**: Japan (Tokyo)
   * *   **alb-ap-southeast-gf-1**: Singapore
   * *   **alb-eu-central-1-gf-1**: Germany (Frankfurt)
   * *   **alb-eu-central-1-gf-1** or **selb-eu-west-1-gf-1a**: UK (London)
   * *   **alb-us-east-gf-1**: US (Virginia)
   * *   **CT-yundi**: China (Hongkong) This value is returned only for Anti-DDoS Premium instances of the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan.
   * 
   * @example
   * cn
   */
  area?: string;
  /**
   * @remarks
   * The time when the DDoS attack stopped. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1634546030
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the DDoS attack event. Valid values:
   * 
   * *   **web-cc**: resource exhaustion attacks
   * *   **cc**: connection flood attacks
   * *   **defense**: DDoS attacks that trigger traffic scrubbing
   * *   **blackhole**: DDoS attacks that trigger blackhole filtering
   * 
   * @example
   * cc
   */
  eventType?: string;
  /**
   * @remarks
   * The attacked object. The attacked object varies based on the attack event type. The following list describes different attacked objects of different attack event types:
   * 
   * *   If **EventType** is set to **web-cc**, the value of this parameter indicates the domain name of the attacked website.
   * *   If **EventType** is set to **cc**, the value of this parameter indicates the IP address of the attacked Anti-DDoS Pro or Anti-DDoS Premium instance.
   * *   If **EventType** is set to **defense** or **blackhole**, the value of this parameter indicates the IP address of the attacked Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The peak bandwidth of the attack traffic. Unit: Mbit/s.
   * 
   * @example
   * 101899
   */
  mbps?: number;
  /**
   * @remarks
   * The attacked port.
   * 
   * > If **EventType** is set to **web-cc**, this parameter is not returned.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The peak packet forwarding rate of attack traffic. Unit: packets per second (pps).
   * 
   * @example
   * 9664270
   */
  pps?: number;
  /**
   * @remarks
   * The time when the DDoS attack started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1634543764
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      mbps: 'Mbps',
      port: 'Port',
      pps: 'Pps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      mbps: 'number',
      port: 'string',
      pps: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

