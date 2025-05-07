// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindBatchAxgResponseBodySecretBindListSecretBind } from "./BindBatchAxgResponseBodySecretBindListSecretBind";


export class BindBatchAxgResponseBodySecretBindList extends $dara.Model {
  secretBind?: BindBatchAxgResponseBodySecretBindListSecretBind[];
  static names(): { [key: string]: string } {
    return {
      secretBind: 'SecretBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBind: { 'type': 'array', 'itemType': BindBatchAxgResponseBodySecretBindListSecretBind },
    };
  }

  validate() {
    if(Array.isArray(this.secretBind)) {
      $dara.Model.validateArray(this.secretBind);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

