// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceSpecResponseBody extends $dara.Model {
  requestId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

