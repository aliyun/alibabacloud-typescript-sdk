// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUdpReflectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F97A8766-FB4D-411A-9CD5-2CFF701B592F
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the source ports of the UDP traffic that are filtered out by the filtering policies for UDP reflection attacks.
   */
  udpSports?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udpSports: 'UdpSports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udpSports: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.udpSports)) {
      $dara.Model.validateArray(this.udpSports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

