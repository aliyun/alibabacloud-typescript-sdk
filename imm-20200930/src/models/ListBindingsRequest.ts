// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * - The maximum number of bindings to return. Valid values: 0 to 200.
   * - If this parameter is not specified or is set to 0, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the binding task.
   * 
   * @example
   * imm
   */
  name?: string;
  /**
   * @remarks
   * - The pagination token that is used when the total number of bindings exceeds the value of MaxResults.
   * - The list of bindings is returned in lexicographical order starting from the NextToken value.
   * - Leave this parameter empty when you call this operation for the first time.
   * 
   * @example
   * immtest:dataset001:examplebucket01
   */
  nextToken?: string;
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
   * The URI of the source OSS bucket, which is used to filter the bindings associated with the bucket.
   * 
   * @example
   * oss://example-bucket
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

