// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeveloperStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the portal to which the developer belongs. This is the primary ID of the portal resource. You can obtain this ID from the portalId field in the CreatePortal response or from the portalId field of a list item in the ListPortals response.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The target status of the developer. Valid values: PENDING, APPROVED, and REJECTED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      portalId: 'portalId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portalId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

