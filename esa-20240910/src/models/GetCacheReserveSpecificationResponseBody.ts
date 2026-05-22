// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheReserveSpecificationResponseBody extends $dara.Model {
  cacheReserveCapacity?: string[];
  cacheReserveRegion?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheReserveCapacity: 'CacheReserveCapacity',
      cacheReserveRegion: 'CacheReserveRegion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveCapacity: { 'type': 'array', 'itemType': 'string' },
      cacheReserveRegion: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cacheReserveCapacity)) {
      $dara.Model.validateArray(this.cacheReserveCapacity);
    }
    if(Array.isArray(this.cacheReserveRegion)) {
      $dara.Model.validateArray(this.cacheReserveRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

