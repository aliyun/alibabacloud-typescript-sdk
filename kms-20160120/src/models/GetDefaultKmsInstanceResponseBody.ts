// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultKmsInstanceResponseBody extends $dara.Model {
  defaultKmsInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultKmsInstanceId: 'DefaultKmsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultKmsInstanceId: 'string',
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

