// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyRequest extends $dara.Model {
  isSidecarPolicy?: number;
  /**
   * @remarks
   * Sort order. The value range is as follows:
   * 
   * - asc (default): ascending
   * 
   * - desc: descending
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results returned per page.
   * Maximum limit: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Policy identifier.
   * 
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Detection policy name.
   * 
   * @example
   * testPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sceneType?: number;
  /**
   * @remarks
   * Sort field.
   * 
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 62****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      isSidecarPolicy: 'IsSidecarPolicy',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyIdentifier: 'PolicyIdentifier',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      sceneType: 'SceneType',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSidecarPolicy: 'number',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyIdentifier: 'string',
      policyName: 'string',
      regionId: 'string',
      sceneType: 'number',
      sortBy: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

