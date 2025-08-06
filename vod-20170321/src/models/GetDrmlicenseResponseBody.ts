// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMLicenseResponseBody extends $dara.Model {
  license?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: 'string',
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

