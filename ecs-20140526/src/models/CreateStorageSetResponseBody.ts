// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageSetResponseBody extends $dara.Model {
  requestId?: string;
  storageSetId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageSetId: 'StorageSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageSetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

