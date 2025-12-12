// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SemanticQueryRequest extends $dara.Model {
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
  mediaTypes?: string[];
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
   */
  query?: string;
  sourceURI?: string;
  /**
   * @remarks
   * The fields that you want to include in the response. Including only necessary metadata fields can help reduce the size of the response.
   * 
   * If you do not specify this parameter or set the value to null, all existing metadata fields are returned.
   */
  withFields?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      mediaTypes: 'MediaTypes',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      query: 'Query',
      sourceURI: 'SourceURI',
      withFields: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      mediaTypes: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      projectName: 'string',
      query: 'string',
      sourceURI: 'string',
      withFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaTypes)) {
      $dara.Model.validateArray(this.mediaTypes);
    }
    if(Array.isArray(this.withFields)) {
      $dara.Model.validateArray(this.withFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

