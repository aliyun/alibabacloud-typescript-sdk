// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachEndUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: 'string',
      serialNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

