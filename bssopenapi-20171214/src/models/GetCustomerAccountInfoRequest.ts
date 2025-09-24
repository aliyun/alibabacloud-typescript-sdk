// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

