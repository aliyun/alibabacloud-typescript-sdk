// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the QUIC listener that you want to associate with the HTTPS listener. Only HTTPS listeners support this parameter. This parameter is required when **QuicUpgradeEnabled** is set to **true**.
   * 
   * >  The HTTPS listener and the QUIC listener must be added to the same ALB instance. Make sure that the QUIC listener is not associated with any other listeners.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * 
   * *   **true**: enables QUIC upgrade.
   * *   **false** (default): disables QUIC upgrade.
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * false
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

