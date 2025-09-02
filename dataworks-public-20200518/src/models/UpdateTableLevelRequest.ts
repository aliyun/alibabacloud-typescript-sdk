// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the table level.
   * 
   * @example
   * level description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the table level. You can call the ListTableLevel operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  levelId?: number;
  /**
   * @remarks
   * The table level type. Valid values: 1 and 2. The value 1 indicates the logical level. The value 2 indicates the physical level.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The name of the table level.
   * 
   * @example
   * level name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      levelId: 'LevelId',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      levelId: 'number',
      levelType: 'number',
      name: 'string',
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

