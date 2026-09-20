// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableModelInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The first-level topic ID.
   * 
   * @example
   * 101
   */
  firstLevelThemeId?: number;
  /**
   * @remarks
   * The level ID.
   * 
   * @example
   * 101
   */
  levelId?: number;
  /**
   * @remarks
   * The level type. Valid values:
   * - 1: logical level.
   * - 2: physical level.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The second-level topic ID.
   * 
   * @example
   * 101
   */
  secondLevelThemeId?: number;
  /**
   * @remarks
   * The unique identifier of the table, in the format of odps.{projectName}.{tableName}.
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

