// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMeta } from "./DatasetFileMeta";


export class ListDatasetFileMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata records of the dataset files.
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
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the number of results exceeds the maximum number of entries allowed per page, a pagination token is returned. This token can be used as an input parameter to obtain the next page of results. If all results are obtained, no token is returned.
   * 
   * @example
   * 90******-f5c5-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
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

