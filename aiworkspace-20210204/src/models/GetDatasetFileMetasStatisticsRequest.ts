// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetFileMetasStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Aggregates statistics based on the specified metadata field. The value is not case-sensitive. If not specified, the total number of dataset file metadata will be returned, instead of aggregation lists. Valid values:
   * 
   * *   filedir: the directory path of the file
   * *   file_type: the file type
   * *   tags.user: user-defined tag
   * *   tags.user-delete-ai-tags: algorithm tags deleted by the user
   * *   tags.ai: algorithm tags (aggregated by all tagging tasks)
   * *   tags.all: algorithm tags and user-defined tags (excluding alogorithm tags deleted by the user)
   * 
   * @example
   * filedir
   */
  aggregateBy?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The maximum number of results to be returned from a single query when the NextToken parameter is used in the query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 145883
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateBy: 'AggregateBy',
      datasetVersion: 'DatasetVersion',
      maxResults: 'MaxResults',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateBy: 'string',
      datasetVersion: 'string',
      maxResults: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

