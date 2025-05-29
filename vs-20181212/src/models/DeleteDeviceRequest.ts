// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3238848****092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

