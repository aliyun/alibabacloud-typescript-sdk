// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionResponseBody extends $dara.Model {
  physicalConnectionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionId: 'PhysicalConnectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionId: 'string',
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

