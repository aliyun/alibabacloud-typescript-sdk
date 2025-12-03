// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJoinedOrganizationsResponseBodyOrganizations extends $dara.Model {
  /**
   * @example
   * 65f25d0fa54c216dcf6b1dbd
   */
  id?: string;
  isOrgAdmin?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isOrgAdmin: 'isOrgAdmin',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isOrgAdmin: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJoinedOrganizationsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  organizations?: ListJoinedOrganizationsResponseBodyOrganizations[];
  /**
   * @example
   * 11D0EE6E-5803-5D4C-A652-E672BE1F3D8E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      organizations: 'organizations',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      organizations: { 'type': 'array', 'itemType': ListJoinedOrganizationsResponseBodyOrganizations },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.organizations)) {
      $dara.Model.validateArray(this.organizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

