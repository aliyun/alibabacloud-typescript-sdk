// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySimilarImageClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The custom tags, which are used to filter tasks.
   * 
   * @example
   * {"key": "val"}
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of entries per page. Value range: 0 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * If the total number of clusters is greater than the value of MaxResults, you must specify this parameter. The next call to the operation returns results lexicographically after the NextToken parameter value.
   * 
   * >  The first time you call this operation in a query, set this parameter to null.
   * 
   * @example
   * CAESEgoQCg4KClVwZGF0ZVRpbWUQARgBIs8ECgkAAJLUwUCAQ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   asc: ascending order.
   * *   desc: descending order. This is the default value.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The sorting field.
   * 
   * *   CreateTime: the time when the clusters were created.
   * *   UpdateTime: the time when the clusters were updated. This is the default value.
   * 
   * @example
   * UpdateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

