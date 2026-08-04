// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContacterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contacterId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      contacterId: 'ContacterId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacterId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

