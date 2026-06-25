// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetFileMetasStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata field used for statistical aggregation. The value is not case-sensitive. If you do not specify this parameter, the total number of file metadata entries in the dataset is returned, and the aggregation list is not returned.
   * Valid values:
   * 
   * - filedir: The directory path of the file.
   * 
   * - filetype: The file type.
   * 
   * - tags.user: Custom user tags.
   * 
   * - tags.user-delete-ai-tags: Algorithm tags deleted by the user.
   * 
   * - tags.ai: Algorithm tags that are aggregated from all labeling tasks.
   * 
   * - tags.all: A combination of algorithm tags and custom user tags, excluding any algorithm tags deleted by the user.
   * 
   * @example
   * filedir
   */
  aggregateBy?: string;
  /**
   * @remarks
   * The name of the dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The maximum number of results to return for each query that uses the NextToken parameter. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The workspace ID. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

