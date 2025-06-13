// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerAttributeRequestQuicConfig extends $dara.Model {
  /**
   * @remarks
   * The QUIC listener ID. This parameter is required if **QuicUpgradeEnabled** is set to **true**. Only HTTPS listeners support this parameter.
   * 
   * > You must add the HTTPS listener and the QUIC listener to the same ALB instance. In addition, make sure that the QUIC listener has never been associated with another listener.
   * 
   * @example
   * lsn-333
   */
  quicListenerId?: string;
  /**
   * @remarks
   * Specifies whether to enable QUIC upgrade. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Only HTTPS listeners support this parameter.
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

