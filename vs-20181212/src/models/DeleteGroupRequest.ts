// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33763950751395843
   */
  id?: string;
  /**
   * @example
   * 123456
   */
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

