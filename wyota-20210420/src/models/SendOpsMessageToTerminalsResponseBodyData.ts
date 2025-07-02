// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendOpsMessageToTerminalsResponseBodyData extends $dara.Model {
  failReason?: string;
  result?: string;
  serialNumber?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      result: 'Result',
      serialNumber: 'SerialNumber',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      result: 'string',
      serialNumber: 'string',
      success: 'boolean',
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

