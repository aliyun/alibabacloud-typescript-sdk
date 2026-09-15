// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The common scenario of the theme. Valid values: report, infographic, and others.
   * 
   * @example
   * report
   */
  category?: string;
  /**
   * @remarks
   * **[Not currently supported]** The maximum number of entries per page. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * **[Not currently supported]** The pagination token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** has a return value, the value is the token for the next query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the theme. Valid values:
   * 
   * - system
   * - custom
   * - derived
   * 
   * @example
   * custom
   */
  themeFrom?: string;
  /**
   * @remarks
   * The theme stage. Valid values:
   * 
   * - design: The theme contains only design.md.
   * - template: The theme is complete and renderable.
   * 
   * @example
   * template
   */
  themeType?: string;
  /**
   * @remarks
   * The workspace context. If this parameter is left empty or set to personal, the personal workspace is used. To query themes in a collaborative workspace, specify the workspace ID.
   * 
   * @example
   * 99fad*******6c0l4nlacu
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      themeFrom: 'ThemeFrom',
      themeType: 'ThemeType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      themeFrom: 'string',
      themeType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

