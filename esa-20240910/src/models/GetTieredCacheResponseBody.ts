// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTieredCacheResponseBody extends $dara.Model {
  cacheArchitectureMode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheArchitectureMode: 'CacheArchitectureMode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheArchitectureMode: 'string',
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

