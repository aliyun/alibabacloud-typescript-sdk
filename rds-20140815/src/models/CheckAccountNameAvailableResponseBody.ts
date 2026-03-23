// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccountNameAvailableResponseBody extends $dara.Model {
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

