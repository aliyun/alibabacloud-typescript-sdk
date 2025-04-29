// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

