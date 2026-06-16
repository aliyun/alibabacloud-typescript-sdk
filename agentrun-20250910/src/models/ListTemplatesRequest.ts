// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the template. Use this parameter to filter templates.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The name of the template. Use this parameter to filter templates.
   * 
   * @example
   * temp-abc
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Use this parameter to filter templates.
   * 
   * @example
   * Browser
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the template belongs.
   * 
   * @example
   * aaa
   */
  workspaceId?: string;
  /**
   * @remarks
   * The IDs of the workspaces. You can use this parameter to query templates from multiple workspaces.
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      templateName: 'templateName',
      templateType: 'templateType',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      templateName: 'string',
      templateType: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

