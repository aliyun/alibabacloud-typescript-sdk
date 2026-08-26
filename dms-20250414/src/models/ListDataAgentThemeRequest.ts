// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The common scenarios. Valid values: report, infographic, and others.
   * 
   * @example
   * report
   */
  category?: string;
  /**
   * @remarks
   * **[Not supported]** The page size. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * **[Not supported]** The pagination token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** has a return value, the value indicates the token for the next query.
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
   * The current page size.
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
   * - design: contains only design.md.
   * - template: complete and renderable.
   * 
   * @example
   * template
   */
  themeType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      themeFrom: 'ThemeFrom',
      themeType: 'ThemeType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

