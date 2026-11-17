// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The search keyword. This parameter is optional and can be up to 256 characters in length.
   * 
   * @example
   * Sales
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

