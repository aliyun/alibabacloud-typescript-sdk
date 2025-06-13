// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener associated with the ALB instance. This parameter is required if the **QuicUpgradeEnabled** parameter is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * >  The existing listener and QUIC listener must be to the same ALB instance, and the QUIC listener has not been associated with an ALB instance.
   * 
   * @example
   * lsr-bp1bpn908w4nbw****
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Indicates whether QUIC upgrade is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * true
   */
  quicUpgradeEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      quicListenerId: 'QuicListenerId',
      quicUpgradeEnabled: 'QuicUpgradeEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicListenerId: 'string',
      quicUpgradeEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

