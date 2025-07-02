// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTerminalsResponseBodyData extends $dara.Model {
  errorCode?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

