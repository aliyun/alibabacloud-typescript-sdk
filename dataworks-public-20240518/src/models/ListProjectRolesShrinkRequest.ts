// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of workspace role codes.
   */
  codesShrink?: string;
  /**
   * @remarks
   * The list of workspace role names.
   */
  namesShrink?: string;
  /**
   * @remarks
   * The requested page number. Used for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace to use for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The role type of the workspace. Valid values:
   * - UserCustom: user-defined role
   * - System: system role
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

