// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Enterprise } from "./Enterprise";


export class GetDeveloperEnterpriseResponseBody extends $dara.Model {
  enterprise?: Enterprise;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enterprise: 'enterprise',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterprise: Enterprise,
      requestId: 'string',
    };
  }

  validate() {
    if(this.enterprise && typeof (this.enterprise as any).validate === 'function') {
      (this.enterprise as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

