// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The table level type. Valid values: 1 and 2. The value 1 indicates the logical level. The value 2 indicates the physical level.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      levelType: 'LevelType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelType: 'number',
      pageNum: 'number',
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

