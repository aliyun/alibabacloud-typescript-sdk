// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An array of workspace role codes.
   */
  codesShrink?: string;
  /**
   * @remarks
   * An array of workspace role names.
   */
  namesShrink?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can find the ID on the Workspace Management page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * This parameter specifies the DataWorks workspace for which you want to list roles.
   * 
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the workspace role.
   * 
   * - `UserCustom`: Custom Role
   * 
   * - `System`: System Role
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
      namesShrink: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
      namesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

