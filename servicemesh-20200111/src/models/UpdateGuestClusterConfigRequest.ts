// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGuestClusterConfigRequest extends $dara.Model {
  /**
   * @example
   * c42186268a27f475c975e5667bb66****
   */
  guestClusterId?: string;
  /**
   * @example
   * false
   */
  SMCEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestClusterId: 'GuestClusterId',
      SMCEnabled: 'SMCEnabled',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestClusterId: 'string',
      SMCEnabled: 'boolean',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

