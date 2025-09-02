// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the table level.
   * 
   * @example
   * The HTTP status code returned.
   */
  description?: string;
  /**
   * @remarks
   * The type of the table level. Valid values: 1 and 2. The value 1 indicates the logical level. The value 2 indicates the physical level.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The name of the table level.
   * 
   * This parameter is required.
   * 
   * @example
   * The description of the table level.
   */
  name?: string;
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
      description: 'Description',
      levelType: 'LevelType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

