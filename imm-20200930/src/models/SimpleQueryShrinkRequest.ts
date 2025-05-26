// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregations.
   * 
   * >  If you perform an aggregate query, the aggregation returned in the response contains only statistical results, not the actual metadata.
   */
  aggregationsShrink?: string;
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * *   If the Aggregations parameter is not specified, this parameter specifies the maximum number of files that can be returned. Valid values: 1 to 100.
   * *   If the Aggregations parameter is specified, this parameter specifies the maximum number of aggregation groups that can be returned. Valid values: 0 to 2000.
   * *   If you do not specify this parameter or set the parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter.
   * 
   * The next call to the operation returns results lexicographically after the NextToken parameter value.
   * 
   * You do not need to specify this parameter in your initial request.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   asc: sorts the results in ascending order.
   * *   desc: sorts the results in descending order. This is the default value.
   * 
   * *   You can specify multiple sort orders that are separated by commas. Example: asc,desc.
   * 
   * *   The number of elements in the Order parameter must be less than or equal to the number of elements in the Sort parameter. For example, if the value of the Sort parameter is Size,Filename, you can set the Order parameter to desc,asc.
   * 
   * *   If the number of sort orders is less than the number of sort fields, the sort fields for which no sorting orders are explicitly specified use the asc order by default. For example, if you set Sort to Size,Filename and Order to asc, the Filename field defaults to the value of asc.
   * 
   * @example
   * asc,desc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The query conditions.
   */
  queryShrink?: string;
  /**
   * @remarks
   * The sort fields. For more information, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * > 
   * 
   * *   If you specify multiple sort fields, separate them with commas (,), as in Size,Filename.
   * 
   * *   You can specify up to five sort fields.
   * 
   * *   The order of the sort fields determines their precedence in the sorting process.
   * 
   * @example
   * Size,Filename
   */
  sort?: string;
  /**
   * @remarks
   * The fields that you want to include in the response. You can use this parameter to reduce the size of the response.
   * 
   * If you do not specify this parameter or leave this parameter empty, the operation returns all metadata fields.
   */
  withFieldsShrink?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of hits. Valid values:
   * 
   * *   true
   * *   false
   * 
   * **if can be null:**
   * true
   */
  withoutTotalHits?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregationsShrink: 'Aggregations',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      queryShrink: 'Query',
      sort: 'Sort',
      withFieldsShrink: 'WithFields',
      withoutTotalHits: 'WithoutTotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationsShrink: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      queryShrink: 'string',
      sort: 'string',
      withFieldsShrink: 'string',
      withoutTotalHits: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

