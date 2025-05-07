// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecretsResponseBodyDataSecrets } from "./ListSecretsResponseBodyDataSecrets";


export class ListSecretsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Secrets.
   */
  secrets?: ListSecretsResponseBodyDataSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

