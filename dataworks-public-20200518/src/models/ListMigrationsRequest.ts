// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The migration task type. Valid values: IMPORT and EXPORT.
   * 
   * This parameter is required.
   * 
   * @example
   * IMPORT
   * 
   * **if can be null:**
   * false
   */
  migrationType?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Maximum value: 100.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationType: 'MigrationType',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationType: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

