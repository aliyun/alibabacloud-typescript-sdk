// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by flow name
   * 
   * @example
   * my-flow
   */
  flowName?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  /**
   * @remarks
   * List of workspace IDs
   * 
   * @example
   * ws-1234567890abcdef,ws-1234567890bcdefg
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'flowName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

