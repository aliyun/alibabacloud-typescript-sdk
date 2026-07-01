// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcIpamServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IPAM service is enabled.
   * 
   * - **true**: The service is enabled.
   * 
   * - **false**: The service is not enabled.
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
   * 2FEE9FFF-57EE-5832-BE88-9308352F3B68
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

