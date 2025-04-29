// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyAddRequestApplyUser extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * userId1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
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

