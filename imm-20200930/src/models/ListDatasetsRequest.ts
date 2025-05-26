// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of datasets to return. Valid values: 0 to 200.
   * 
   * If this parameter is left empty or set to 0, 100 datasets are returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * If the total number of datasets is greater than the value of MaxResults, you must specify this parameter. The list is returned in lexicographic order starting from the value of NextToken.
   * 
   * >  The first time you call this operation in a query, set this parameter to null.
   * 
   * @example
   * 12345678:immtest:dataset002
   */
  nextToken?: string;
  /**
   * @remarks
   * The dataset prefix.
   * 
   * @example
   * dataset
   */
  prefix?: string;
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefix: 'Prefix',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefix: 'string',
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

