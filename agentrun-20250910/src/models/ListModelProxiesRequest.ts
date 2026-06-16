// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProxiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the proxy mode.
   * 
   * @example
   * proxyMode
   */
  proxyMode?: string;
  /**
   * @remarks
   * Filters the list by Model Proxy status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workspace.
   */
  workspaceId?: string;
  /**
   * @remarks
   * A comma-separated list of workspace IDs to query.
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      proxyMode: 'proxyMode',
      status: 'status',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      proxyMode: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

