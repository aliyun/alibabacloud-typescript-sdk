// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 156237031628****
   */
  accountId?: string;
  /**
   * @remarks
   * The CEN connection ID.
   * 
   * @example
   * tr-attach-u6v1j3jre0fe9h****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The total volume of traffic in the specified time range.
   * 
   * @example
   * 108
   */
  bytes?: number;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 120.24.X.X
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 80
   */
  cloudPort?: string;
  /**
   * @remarks
   * The local region where the local IP address resides.
   * 
   * @example
   * cn-shanghai
   */
  cloudRegion?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 222.85.X.X
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 10965
   */
  otherPort?: string;
  /**
   * @remarks
   * The total number of packets in the specified time range.
   * 
   * @example
   * 66
   */
  packets?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the VBR that is associated with the Express Connect circuit.
   * 
   * @example
   * vbr-k1atj46citwuek42j****
   */
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      attachmentId: 'AttachmentId',
      bytes: 'Bytes',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      cloudRegion: 'CloudRegion',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      packets: 'Packets',
      protocol: 'Protocol',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      attachmentId: 'string',
      bytes: 'number',
      cloudIp: 'string',
      cloudPort: 'string',
      cloudRegion: 'string',
      otherIp: 'string',
      otherPort: 'string',
      packets: 'number',
      protocol: 'string',
      virtualBorderRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

