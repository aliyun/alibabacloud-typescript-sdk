// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessAliMeCallbackOfStagingRequest extends $dara.Model {
  data?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

