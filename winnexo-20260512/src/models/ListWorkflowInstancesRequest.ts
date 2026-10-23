// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The exact requirement ID.
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The exact external initiator tag.
   * 
   * @example
   * External initiator Zhang San
   */
  initiator?: string;
  /**
   * @remarks
   * The keyword for the title or requirement ID.
   * 
   * @example
   * Quarterly report
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
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * GMT_CREATE
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * Filters the instances by status. Valid values: Running, Completed, Failed, and Terminated.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If you use winnexo-cli, pass this parameter explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'businessId',
      collaborationGroupId: 'collaborationGroupId',
      initiator: 'initiator',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      sortBy: 'sortBy',
      sortOrder: 'sortOrder',
      status: 'status',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      collaborationGroupId: 'string',
      initiator: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
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

