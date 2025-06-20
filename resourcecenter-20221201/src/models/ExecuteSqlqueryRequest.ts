// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSQLQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL statement to be executed.
   * 
   * The number of characters in the SQL statement must be less than 2,000.
   * 
   * For more information about the SQL syntax, see [Basic SQL syntax](https://help.aliyun.com/document_detail/2539395.html).
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM resources LIMIT 100;
   */
  expression?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 1000.
   * *   Default value: 1000.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search scope.
   * 
   * Set this parameter to the ID of a resource group.
   * 
   * For information about how to obtain the ID of a resource group, see [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

