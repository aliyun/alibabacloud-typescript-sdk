// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreUserFromRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

