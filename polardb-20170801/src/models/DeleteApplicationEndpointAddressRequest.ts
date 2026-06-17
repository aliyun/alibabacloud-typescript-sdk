// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationEndpointAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the server-side endpoint to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  endpointId?: string;
  /**
   * @remarks
   * The network type of the connection address to delete. The value is fixed to `Public`.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      endpointId: 'EndpointId',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      endpointId: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

