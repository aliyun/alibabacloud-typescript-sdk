// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMultiAccountSQLQueryRequest extends $dara.Model {
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
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 1000.
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
   * The search scope. The value of this parameter can be one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * *   ID of a folder: Resources within all members in the folder are searched.
   * *   ID of a member: Resources within the member are searched.
   * *   ID of a member/ID of a Resource group: Resources within the member in the resource group are searched.
   * 
   * For more information about how to obtain the ID of a resource directory, the Root folder, a folder, a member, or a resource group, see [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), [ListAccounts](https://help.aliyun.com/document_detail/160016.html), or [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
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

