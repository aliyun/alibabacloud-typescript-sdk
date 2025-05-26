// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuzzyQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. You can obtain the name of the dataset from the response of the [CreateDataset](https://help.aliyun.com/document_detail/478160.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 0 to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the total number of files is greater than the value of MaxResults, you must specify NextToken.
   * 
   * The file information is returned in alphabetical order starting from the value of NextToken.
   * 
   * You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   asc: ascending order.
   * *   desc (default): descending order.
   * 
   * > 
   * 
   * *   Separate multiple sorting methods with commas (,). Example: asc,desc.
   * 
   * *   The number of values for Order must be less than or equal to the number of values for Sort. For example, if you set Sort to Size,Filename, you can set Order only to desc or asc.
   * 
   * *   If the number of values for Order is less than the number of values for Sort, the unsorted fields are default to the value of asc. For example, if you set Sort to Size,Filename and Order to asc, the Filename field is default to the value of asc.
   * 
   * @example
   * asc,desc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The query content. The value can be up to 1 MB in size.
   * 
   * This parameter is required.
   */
  query?: string;
  /**
   * @remarks
   * The sort fields. For more information, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * *   Separate multiple sort fields with commas (,). Example: `Size,Filename`.
   * *   You can specify up to five sort fields.
   * *   The priority order of sorting is determined based on the order of the sort fields.
   * 
   * @example
   * Size,Filename
   */
  sort?: string;
  /**
   * @remarks
   * The fields that you want to include in the response. To help reduce the size of the response, include only necessary metadata fields.
   * 
   * If you do not specify this parameter or set the value to null, all existing metadata fields are returned.
   */
  withFieldsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      query: 'Query',
      sort: 'Sort',
      withFieldsShrink: 'WithFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      query: 'string',
      sort: 'string',
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

