// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccountInfoManageRequest } from "./AccountInfoManageRequest";


export class ManageSearchAccountInfoRequest extends $dara.Model {
  body?: AccountInfoManageRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AccountInfoManageRequest,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

