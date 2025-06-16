// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicIpAddressPoolServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address pool feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false** You can call OpenPublicIpAddressPoolService to enable the IP address pool feature.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-06F82A1B457
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
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

