// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoomRealTimeStreamAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8DB7E25-6A35-161A-AA41-B7A658AF****
   */
  requestId?: string;
  /**
   * @remarks
   * The RTMP ingest URL.
   */
  rtmpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rtmpAddress: 'RtmpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rtmpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

