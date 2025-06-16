// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVpnBgpEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the region supports BGP.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bgpEnabled?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF448D2E-215D-334F-B10D-7C3B087EF996
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpEnabled: 'BgpEnabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpEnabled: 'boolean',
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

