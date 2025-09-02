// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of a business process name. The keyword is used to search for business processes whose names contain this keyword.
   * 
   * @example
   * Test business process
   */
  groupNameKeyword?: string;
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
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
      groupNameKeyword: 'GroupNameKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNameKeyword: 'string',
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

