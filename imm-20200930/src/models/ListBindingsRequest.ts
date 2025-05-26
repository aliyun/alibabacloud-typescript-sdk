// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindingsRequest extends $dara.Model {
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
   * *   The maximum number of bindings to return. Valid values: 0 to 200.
   * *   If you do not specify this parameter or set the parameter to 0, the default value of 100 is used.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * *   The pagination token that is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter.
   * *   The next call to the operation returns results lexicographically after the NextToken parameter value.
   * *   You do not need to specify this parameter in your initial request.
   * 
   * @example
   * immtest:dataset001:examplebucket01
   */
  nextToken?: string;
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
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
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

