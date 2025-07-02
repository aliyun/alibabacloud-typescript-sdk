// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTerminalRequest extends $dara.Model {
  alias?: string;
  clientType?: string;
  mainBizType?: string;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      clientType: 'ClientType',
      mainBizType: 'MainBizType',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      clientType: 'string',
      mainBizType: 'string',
      serialNumber: 'string',
      terminalGroupId: 'string',
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

