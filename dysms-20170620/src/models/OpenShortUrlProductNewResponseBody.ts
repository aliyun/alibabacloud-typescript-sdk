// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenShortUrlProductNewResponseBody extends $dara.Model {
  requestId?: string;
  rusult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rusult: 'Rusult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rusult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

