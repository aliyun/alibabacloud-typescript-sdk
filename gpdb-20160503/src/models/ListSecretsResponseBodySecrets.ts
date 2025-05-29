// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecretsResponseBodySecretsSecrets } from "./ListSecretsResponseBodySecretsSecrets";


export class ListSecretsResponseBodySecrets extends $dara.Model {
  secrets?: ListSecretsResponseBodySecretsSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretsSecrets },
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

