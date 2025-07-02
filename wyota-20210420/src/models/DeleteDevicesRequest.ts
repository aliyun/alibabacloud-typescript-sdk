// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  force?: string;
  serialNos?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      serialNos: 'SerialNos',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
      serialNos: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

