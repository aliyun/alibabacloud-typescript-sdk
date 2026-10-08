// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of datasets to return. Valid values: 0 to 200. If you do not specify this parameter or set it to 0, the default value 100 is used.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * If the total number of datasets exceeds the value of MaxResults, this token is used for pagination. The list of dataset information is returned in lexicographical order starting from NextToken.
   * 
   * > When you call this operation for the first time in a query, leave this parameter empty.
   * 
   * @example
   * 12345678:immtest:dataset002
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the dataset name.
   * 
   * @example
   * dataset
   */
  prefix?: string;
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

