// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdpDepartmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the custom IdP configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  idpConfigId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      idpConfigId: 'IdpConfigId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      idpConfigId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

