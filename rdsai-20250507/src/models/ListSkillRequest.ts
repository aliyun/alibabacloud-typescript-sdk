// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The supported languages. Valid values:
   * 
   * * zh-CN: Simplified Chinese
   * * zh-TW: Traditional Chinese
   * * en-US: English
   * * ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The search parameter for skill name or description. This filter is not currently enabled in the ContextDB management console.
   * 
   * @example
   * example
   */
  query?: string;
  /**
   * @remarks
   * The ContextDB query scope. Valid values: all (default), private, and system.
   * 
   * @example
   * all
   */
  scope?: string;
  /**
   * @remarks
   * The sort parameter for skills. This sorting is not currently enabled in the ContextDB management console.
   * 
   * @example
   * updated_at_desc
   */
  sort?: string;
  /**
   * @remarks
   * The filter parameter for skill source. This filter is not currently enabled in the ContextDB management console.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The ContextDB workspace ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      scope: 'Scope',
      sort: 'Sort',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      scope: 'string',
      sort: 'string',
      source: 'string',
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

