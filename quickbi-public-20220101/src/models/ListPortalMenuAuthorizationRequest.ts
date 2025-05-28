// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalMenuAuthorizationRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

