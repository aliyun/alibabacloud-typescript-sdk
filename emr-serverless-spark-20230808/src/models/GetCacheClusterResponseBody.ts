// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CacheCluster } from "./CacheCluster";


export class GetCacheClusterResponseBody extends $dara.Model {
  cacheClusters?: CacheCluster;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheClusters: 'cacheClusters',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheClusters: CacheCluster,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cacheClusters && typeof (this.cacheClusters as any).validate === 'function') {
      (this.cacheClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

