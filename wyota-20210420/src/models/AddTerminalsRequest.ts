// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddTerminalsRequestAddTerminalParams extends $dara.Model {
  alias?: string;
  clientType?: number;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      clientType: 'ClientType',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      clientType: 'number',
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

export class AddTerminalsRequest extends $dara.Model {
  addTerminalParams?: AddTerminalsRequestAddTerminalParams[];
  mainBizType?: string;
  static names(): { [key: string]: string } {
    return {
      addTerminalParams: 'AddTerminalParams',
      mainBizType: 'MainBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTerminalParams: { 'type': 'array', 'itemType': AddTerminalsRequestAddTerminalParams },
      mainBizType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addTerminalParams)) {
      $dara.Model.validateArray(this.addTerminalParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

