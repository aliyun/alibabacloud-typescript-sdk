// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SemanticQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of data records to return in this request. Value range: (0,100].
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The media types to search. If this parameter is left empty, the default value is:
   */
  mediaTypesShrink?: string;
  /**
   * @remarks
   * This parameter is no longer provided.
   * 
   * @example
   * Reserved. Not supported yet.
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * <notice>Either this parameter or the SourceURI parameter must be specified.</notice>
   * The content for semantic search.
   * 
   * @example
   * Scenery of Hangzhou in April 2021
   */
  query?: string;
  /**
   * @remarks
   * <notice>Either this parameter or the Query parameter must be specified. This parameter is currently valid only when the search type is specified as image and the dataset is configured with a workflow template for image-to-image search.</notice>
   * The storage address of the source data used for retrieval. The storage address supports OSS URIs.
   * 
   * The OSS address format is oss://${Bucket}/${Object}, where ${Bucket} is the name of the OSS bucket that resides in the same region as the current project, and ${Object} is the full path of the file including the file name extension.
   * 
   * If you need to configure the corresponding workflow template, [contact us](https://help.aliyun.com/document_detail/84454.html).
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * Specifies the specific fields to return instead of all existing metadata fields. This helps reduce the size of the returned struct.
   * 
   * If this parameter is left empty, all fields are returned.
   */
  withFieldsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      mediaTypesShrink: 'MediaTypes',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      query: 'Query',
      sourceURI: 'SourceURI',
      withFieldsShrink: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      mediaTypesShrink: 'string',
      nextToken: 'string',
      projectName: 'string',
      query: 'string',
      sourceURI: 'string',
      withFieldsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

