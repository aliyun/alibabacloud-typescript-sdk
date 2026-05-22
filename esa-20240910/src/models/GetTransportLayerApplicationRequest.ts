// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * Number of forwarding rules contained in the transport layer acceleration application.
   * 
   * This parameter is required.
   * 
   * @example
   * 170997271816****
   */
  applicationId?: number;
  /**
   * @remarks
   * Transport layer application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

