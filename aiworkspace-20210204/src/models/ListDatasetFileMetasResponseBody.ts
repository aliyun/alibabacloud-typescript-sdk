// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMeta } from "./DatasetFileMeta";


export class ListDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed metadata of the dataset files.
   */
  datasetFileMetas?: DatasetFileMeta[];
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The version name of the dataset.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The maximum number of results returned per page when you use the \\`NextToken\\` parameter.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the number of results that match the query exceeds the page size, this token is returned. To retrieve the next page of data, use the returned token in your next request. Repeat this process until no token is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * 90******-f5c5-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 30
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMeta },
      datasetId: 'string',
      datasetVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetas)) {
      $dara.Model.validateArray(this.datasetFileMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

