// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener. This parameter is returned when **QuicUpgradeEnabled** is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * > You must associate the HTTPS listener and the QUIC listener with the same ALB instance. In addition, make sure that the QUIC listener has never been associated with another listener.
   * 
   * @example
   * lsn-333
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Indicates whether QUIC upgrade is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only HTTPS listeners support this parameter.
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

