// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableThemeRequest extends $dara.Model {
  /**
   * @remarks
   * The level of the table theme. Valid values: 1 and 2. The value 1 indicates the first level. The value 2 indicates the second level.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The name of the table theme.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the level of the parent table theme.
   * 
   * @example
   * 122
   */
  parentId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      name: 'string',
      parentId: 'number',
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

