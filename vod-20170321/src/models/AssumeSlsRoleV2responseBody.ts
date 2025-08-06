// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeSlsRoleV2ResponseBody extends $dara.Model {
  requestId?: string;
  slsAuthResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsAuthResult: 'SlsAuthResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsAuthResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

