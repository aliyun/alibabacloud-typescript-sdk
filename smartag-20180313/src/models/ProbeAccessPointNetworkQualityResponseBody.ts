// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeAccessPointNetworkQualityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E26DBAAE-A796-4A48-98B4-B45AFCD1F299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

