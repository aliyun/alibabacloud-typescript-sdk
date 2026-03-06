// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServersRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the API MCP server was created.
   * 
   * @example
   * 2024-10-30T02:10:13Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API MCP service.
   * 
   * @example
   * 这是一个API MCP服务器。
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API MCP service.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by API name and exact search by API ID.
   * 
   * @example
   * oss
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the API reference for the API MCP service. The language of the prompt can affect the response from the AI. Valid values: \\`ZH_CN\\`, \\`EN_US\\`.
   * 
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. Set this parameter to the \\`nextToken\\` value that was returned from the previous API call.
   * 
   * > This parameter is not required for the first query. If a query does not return all results, pass the \\`nextToken\\` value from the previous query to continue.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of data entries to skip.
   * 
   * @example
   * 5
   */
  skip?: number;
  /**
   * @remarks
   * The type of the API MCP service.
   * 
   * - custom: a custom service
   * 
   * - system: a system service
   * 
   * @example
   * system
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the API MCP server was last updated.
   * 
   * @example
   * 2024-06-05T02:27:39Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      keyword: 'keyword',
      language: 'language',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
      sourceType: 'sourceType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      keyword: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      sourceType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

