// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLdpsColumnarIndexStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  opened?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      opened: 'Opened',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      opened: 'boolean',
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

