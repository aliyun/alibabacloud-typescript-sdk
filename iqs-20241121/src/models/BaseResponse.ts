// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BaseResponse extends $dara.Model {
  data?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

