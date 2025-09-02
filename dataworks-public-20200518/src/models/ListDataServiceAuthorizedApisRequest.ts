// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceAuthorizedApisRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in API names. The keyword is used to search for the APIs whose names contain the keyword.
   * 
   * @example
   * My API Name
   */
  apiNameKeyword?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. This parameter is deprecated.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiNameKeyword: 'ApiNameKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNameKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

