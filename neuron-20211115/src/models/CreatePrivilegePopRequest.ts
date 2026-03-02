// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePrivilegePopCmd } from "./CreatePrivilegePopCmd";


export class CreatePrivilegePopRequest extends $dara.Model {
  body?: CreatePrivilegePopCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreatePrivilegePopCmd,
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

