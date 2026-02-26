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
   * immDatatest
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The types of the media that you want to query. Default value:
   * 
   * ["image"]
   */
  mediaTypesShrink?: string;
  /**
   * @remarks
   * This parameter is no longer available.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The content of the query that you input.
   * 
   * @example
   * Scenery of Hangzhou in April 2021
   */
  query?: string;
  /**
   * @remarks
   * > Either this parameter or the Query parameter must be specified. This parameter is valid only for image searches on datasets configured with a search-by-image workflow.
   * >
   * URI of the source data for retrieval.
   * The URI must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the full path of the file that contains the file name extension.
   * 
   * Contact us if you need to configure a workflow template.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * >  Either this parameter or the SourceURI parameter must be specified.
   * 
   * The content of the query that you input.
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

