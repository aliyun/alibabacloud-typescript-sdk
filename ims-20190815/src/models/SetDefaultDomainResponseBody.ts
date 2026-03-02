// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultDomainResponseBody extends $dara.Model {
  defaultDomainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

