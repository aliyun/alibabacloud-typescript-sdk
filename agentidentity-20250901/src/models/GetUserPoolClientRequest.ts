// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolClientRequest extends $dara.Model {
  clientName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientName: 'ClientName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientName: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

