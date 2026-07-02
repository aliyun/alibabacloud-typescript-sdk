// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlLastPayloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPortList?: string;
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
   * The protocol.
   * 
   * @example
   * tcp
   */
  protoList?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 1586
   */
  srcPortList?: string;
  static names(): { [key: string]: string } {
    return {
      dstPortList: 'DstPortList',
      payload: 'Payload',
      protoList: 'ProtoList',
      requestId: 'RequestId',
      srcPortList: 'SrcPortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortList: 'string',
      payload: 'string',
      protoList: 'string',
      requestId: 'string',
      srcPortList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

