// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CacheService } from "./CacheService";


export class ListDataCacheServicesResponseBody extends $dara.Model {
  cacheServices?: CacheService[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cacheServices: 'CacheServices',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheServices: { 'type': 'array', 'itemType': CacheService },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cacheServices)) {
      $dara.Model.validateArray(this.cacheServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

