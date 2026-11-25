// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceBelongIdentifiersResponseBody extends $dara.Model {
  identifierIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identifierIds: 'IdentifierIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifierIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identifierIds)) {
      $dara.Model.validateArray(this.identifierIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

