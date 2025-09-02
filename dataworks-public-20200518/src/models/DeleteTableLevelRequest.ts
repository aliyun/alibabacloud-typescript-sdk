// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the table level that you want to delete. You can call the ListTableLevel operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  levelId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      levelId: 'LevelId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelId: 'number',
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

