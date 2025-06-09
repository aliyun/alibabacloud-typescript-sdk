// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAppRequestAuthenticationBasicAuth } from "./UpdateAppRequestAuthenticationBasicAuth";


export class UpdateAppRequestAuthentication extends $dara.Model {
  basicAuth?: UpdateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': UpdateAppRequestAuthenticationBasicAuth },
    };
  }

  validate() {
    if(Array.isArray(this.basicAuth)) {
      $dara.Model.validateArray(this.basicAuth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

