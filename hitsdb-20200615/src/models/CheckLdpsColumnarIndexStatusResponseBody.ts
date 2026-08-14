// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLdpsColumnarIndexStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Columnar index mode. Valid values: LAKE and OLAP.
   */
  mode?: string;
  opened?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      mode: 'Mode',
      opened: 'Opened',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      mode: 'string',
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

