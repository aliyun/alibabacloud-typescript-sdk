// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset name. For information about how to obtain the dataset name, see [CreateDataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * - The maximum number of bindings to return. Valid values: 0 to 200.
   * - If this parameter is not set or is set to 0, the default value 100 is used.
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
   * - The pagination token that is used when the total number of bindings exceeds the MaxResults value.
   * - Binding information is returned in alphabetical order starting from the NextToken value.
   * - Leave this parameter empty for the first request.
   * 
   * @example
   * immtest:dataset001:examplebucket01
   */
  nextToken?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

