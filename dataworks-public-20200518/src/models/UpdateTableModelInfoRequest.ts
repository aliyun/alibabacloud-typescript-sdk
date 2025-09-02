// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableModelInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the first-level table folder.
   * 
   * @example
   * 101
   */
  firstLevelThemeId?: number;
  /**
   * @remarks
   * The table level ID.
   * 
   * @example
   * 101
   */
  levelId?: number;
  /**
   * @remarks
   * The type of the table level. Valid values: 1 and 2. The value 1 indicates the logical level. The value 2 indicates the physical level.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The ID of the second-level table folder.
   * 
   * @example
   * 101
   */
  secondLevelThemeId?: number;
  /**
   * @remarks
   * The GUID of the table. Specify the GUID in the odps.{projectName}.{tableName} format.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.test.table1
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      firstLevelThemeId: 'FirstLevelThemeId',
      levelId: 'LevelId',
      levelType: 'LevelType',
      secondLevelThemeId: 'SecondLevelThemeId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstLevelThemeId: 'number',
      levelId: 'number',
      levelType: 'number',
      secondLevelThemeId: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

