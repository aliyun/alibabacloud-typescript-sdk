// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeTypeListInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the node type. You can log on to the DataWorks console, go to the DataStudio page, and then view the name of a specific node type on the left side of the page. You can view the English or Chinese name of a specific node type, but the language specified to present the name must be the same as the language specified by the Locale parameter. Fuzzy match is supported. If this parameter is not configured, the names of all node types are returned.
   * 
   * @example
   * ODPS SQ
   */
  keyword?: string;
  /**
   * @remarks
   * The language that you use for the query. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can click the Workspace Manage icon in the upper-right corner of the DataStudio page to go to the Workspace page and query the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace. You can view the identifier in the upper part of the DataStudio page. You can also select another identifier to switch to another workspace. You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      locale: 'Locale',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      locale: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

