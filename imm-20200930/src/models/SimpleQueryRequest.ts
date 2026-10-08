// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleQuery } from "./SimpleQuery";


export class SimpleQueryRequestAggregations extends $dara.Model {
  /**
   * @remarks
   * The name of the field. For more information about supported fields, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * The operator for the aggregation field.
   * 
   * @example
   * sum
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The list of aggregation field information.
   * >Notice: When you use an aggregation query, only the aggregation results are returned, and the list of matched metadata is not returned.</notice>
   */
  aggregations?: SimpleQueryRequestAggregations[];
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
   * - When you perform a query for files without specifying the Aggregations parameter, this parameter specifies the maximum number of files to return. Valid values: 0 to 100.
   * 
   * - When you specify the Aggregations parameter for aggregation statistics, this parameter specifies the maximum number of groups to return. Valid values: 0 to 2000.
   * 
   * - If you do not specify this parameter or set it to 0, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for pagination when the total number of files exceeds the value of MaxResults.
   * 
   * The list of files is returned in lexicographical order starting from NextToken.
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
   * - asc: ascending order
   * 
   * - desc: descending order (default)
   * >- You can separate multiple sort orders with commas (,), for example, asc,desc.
   * > - The number of sort orders cannot exceed the number of sort fields. That is, the number of elements in the Order parameter must be less than or equal to the number of elements in the Sort parameter. For example, if Sort is set to Size,Filename, Order can be set to "asc,desc".
   * > - If the number of sort orders is less than the number of sort fields, the default sort order for the unspecified fields is desc. For example, if Sort is set to Size,Filename and Order is set to asc, the default sort order for Filename is desc, which means descending order.
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
   * The simple query conditions. Click the link on the left to view details.
   */
  query?: SimpleQuery;
  /**
   * @remarks
   * The list of sort fields. For more information, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * > - You can separate multiple sort fields with commas (,), for example, Size,Filename.
   * > - You can specify a maximum of 5 sort fields.
   * > - The order of the sort fields determines the sorting priority.
   * 
   * @example
   * Size,Filename
   */
  sort?: string;
  /**
   * @remarks
   * Specifies the specific fields to return instead of all existing metadata fields. This can be used to reduce the size of the returned struct.
   * 
   * If you do not specify this parameter or leave it empty, all fields are returned.
   */
  withFields?: string[];
  /**
   * @remarks
   * Specifies whether to return the total number of matched records. Valid values:
   * - true: The TotalHits field is not returned.
   * - false: The TotalHits field is returned.
   * 
   * **if can be null:**
   * true
   */
  withoutTotalHits?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      query: 'Query',
      sort: 'Sort',
      withFields: 'WithFields',
      withoutTotalHits: 'WithoutTotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'array', 'itemType': SimpleQueryRequestAggregations },
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      query: SimpleQuery,
      sort: 'string',
      withFields: { 'type': 'array', 'itemType': 'string' },
      withoutTotalHits: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.aggregations)) {
      $dara.Model.validateArray(this.aggregations);
    }
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
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

