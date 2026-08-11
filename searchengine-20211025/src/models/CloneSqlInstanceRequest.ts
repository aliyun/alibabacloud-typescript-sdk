// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneSqlInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the target folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetFolderId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      targetFolderId: 'targetFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      targetFolderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

