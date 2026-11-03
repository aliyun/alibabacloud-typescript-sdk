// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventPayloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The destination IP address of the intrusion prevention event.
   * 
   * @example
   * 203.0.113.1
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port of the intrusion prevention event.
   * 
   * @example
   * 8080
   */
  dstPort?: number;
  /**
   * @remarks
   * The destination VPC ID of the intrusion prevention event.
   * 
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The type of the hit content.
   * 
   * @example
   * 1
   */
  hitContentType?: number;
  /**
   * @remarks
   * The end position of the hit content.
   * 
   * @example
   * 67
   */
  hitTo?: number;
  /**
   * @remarks
   * The parsed payload of the hit content.
   * 
   * @example
   * 2f636f6d706f7365722f73656e645f656d61696c3f746f3d6d61667740776f66736f7961792675726c3d687474703a2f2f302e302e302e303a31323334352f692f6431366530312f313664622f673670772f
   */
  parsedContent?: string;
  /**
   * @remarks
   * The attack payload of the intrusion prevention event.
   * 
   * @example
   * 302902010004067075626c6963a01c0204036a5f43020100020100300e300c06082b060102010101000500
   */
  payload?: string;
  /**
   * @remarks
   * The length of the attack payload in the intrusion prevention event.
   * 
   * @example
   * 457
   */
  payloadLen?: number;
  /**
   * @remarks
   * The protocol type of the intrusion prevention attack event. Valid values:
   * 
   * - **TCP**
   * - **UDP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The HTTP X-Real-IP field.
   * 
   * @example
   * 203.0.113.3
   */
  realIp?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68055BA4-D8BD-5611-AC49-C651E619A12E
   */
  requestId?: string;
  /**
   * @remarks
   * The source IP address of the intrusion prevention event.
   * 
   * @example
   * 203.0.113.2
   */
  srcIP?: string;
  /**
   * @remarks
   * The source port of the intrusion prevention event.
   * 
   * @example
   * 54360
   */
  srcPort?: number;
  /**
   * @remarks
   * The source VPC ID of the intrusion prevention event.
   * 
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The HTTP X-Forwarded-For field.
   * 
   * @example
   * 203.0.113.4
   */
  XForwardFor?: string;
  static names(): { [key: string]: string } {
    return {
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      dstVpcId: 'DstVpcId',
      hitContentType: 'HitContentType',
      hitTo: 'HitTo',
      parsedContent: 'ParsedContent',
      payload: 'Payload',
      payloadLen: 'PayloadLen',
      proto: 'Proto',
      realIp: 'RealIp',
      requestId: 'RequestId',
      srcIP: 'SrcIP',
      srcPort: 'SrcPort',
      srcVpcId: 'SrcVpcId',
      XForwardFor: 'XForwardFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIP: 'string',
      dstPort: 'number',
      dstVpcId: 'string',
      hitContentType: 'number',
      hitTo: 'number',
      parsedContent: 'string',
      payload: 'string',
      payloadLen: 'number',
      proto: 'string',
      realIp: 'string',
      requestId: 'string',
      srcIP: 'string',
      srcPort: 'number',
      srcVpcId: 'string',
      XForwardFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

