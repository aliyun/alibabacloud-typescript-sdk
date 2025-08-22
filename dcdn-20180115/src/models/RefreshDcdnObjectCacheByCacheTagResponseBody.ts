// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshDcdnObjectCacheByCacheTagResponseBody extends $dara.Model {
  /**
   * @example
   * 17410889914
   */
  refreshTaskId?: string;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
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

