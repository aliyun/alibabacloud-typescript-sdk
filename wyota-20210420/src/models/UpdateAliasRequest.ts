// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAliasRequest extends $dara.Model {
  alias?: string;
  serialNo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      serialNo: 'SerialNo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      serialNo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

