// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by memory collection name.
   * 
   * @example
   * my-memory-1
   */
  memoryCollectionName?: string;
  /**
   * @remarks
   * The page number. Defaults to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Defaults to 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by memory collection status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Filters the results by memory collection type.
   * 
   * @example
   * mem0
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workspace to filter by.
   */
  workspaceId?: string;
  /**
   * @remarks
   * The IDs of the workspaces to filter by, provided as a comma-separated string.
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      memoryCollectionName: 'memoryCollectionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryCollectionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      type: 'string',
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

