// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalMenusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The user ID in the Quick BI. When passed in, the list displays only the menus that the user has permissions on.
   * 
   * @example
   * 1234567***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

