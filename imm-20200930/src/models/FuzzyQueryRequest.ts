// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuzzyQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of files to return. Valid values: 0 to 200.
   * 
   * If you do not set this parameter or set it to 0, the default value is 100.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for pagination when the total number of files exceeds the value of MaxResults.
   * 
   * The list of file information is returned in lexicographical order starting from NextToken.
   * 
   * Set this parameter to empty when you call this operation for the first time.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order of the sort fields. Valid values:
   * 
   * - asc: Ascending order.
   * 
   * - desc: Descending order. This is the default value.
   * 
   * > - You can separate multiple sort orders with commas (,), such as asc,desc.
   * > - The number of sort orders cannot exceed the number of sort fields. That is, the number of elements in the Order parameter must be less than or equal to the number of elements in the Sort parameter. For example, if Sort is set to Size,Filename, Order can be set to desc or asc.
   * > - If the number of sort orders is less than the number of sort fields, the default sort order for the unspecified fields is asc. For example, if Sort is set to Size,Filename and Order is set to asc, the default sort order for Filename is asc, which means ascending order.
   * 
   * @example
   * asc,desc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The string used for the query. The string cannot exceed 1 MB in size.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud
   */
  query?: string;
  /**
   * @remarks
   * The list of fields by which to sort the results. For more information, see the [list of supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * - You can separate multiple sort fields with commas (,), such as `Size,Filename`.
   * 
   * - You can specify up to 5 sort fields.
   * 
   * - The order of the sort fields determines the sorting priority.
   * 
   * @example
   * Size,Filename
   */
  sort?: string;
  /**
   * @remarks
   * Specifies the fields to return. Only the values of the specified fields are returned instead of all existing metadata fields. You can use this parameter to reduce the size of the returned struct.
   * 
   * If you do not specify this parameter or leave it empty, all fields are returned.
   */
  withFields?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      query: 'Query',
      sort: 'Sort',
      withFields: 'WithFields',
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
      withFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.withFields)) {
      $dara.Model.validateArray(this.withFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

