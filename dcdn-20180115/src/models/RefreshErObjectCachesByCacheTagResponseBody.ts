// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshErObjectCachesByCacheTagResponseBody extends $dara.Model {
  /**
   * @example
   * 17410889914
   */
  refreshTaskId?: string;
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
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

