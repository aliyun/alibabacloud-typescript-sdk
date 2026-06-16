// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDisposalToolServiceRequest extends $dara.Model {
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

