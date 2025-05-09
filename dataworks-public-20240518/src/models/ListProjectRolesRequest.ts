// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The codes of roles in the DataWorks workspace.
   */
  codes?: string[];
  /**
   * @remarks
   * The names of roles in the DataWorks workspace.
   */
  names?: string[];
  /**
   * @remarks
   * The page number.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * *   UserCustom: user-defined role
   * *   System: system role
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codes)) {
      $dara.Model.validateArray(this.codes);
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

