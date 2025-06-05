// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the used amounts and upper limits of privileges and quotas that you have in the specified region. The information contains the following items:
   * 
   * *   UsedCpu: the number of existing vCPUs.
   * *   MaxCpu: the upper limit of vCPUs.
   * *   MaxImageCacheCount: the upper limit of manually created image caches.
   * *   UsedImageCacheCount: the number of existing image caches that are manually created.
   * *   MaxAutoImageCacheCount: the upper limit of automatically created image caches.
   * *   UsedAutoImageCacheCount: the number of existing image caches that are automatically created.
   * *   MaxDataCacheCount: the upper limit of DataCaches.
   * *   UsedDataCacheCount: the number of existing DataCaches.
   * 
   * @example
   * {"UsedCpu": 11,"MaxCpu": 1000,"MaxImageCacheCount": 50,"UsedImageCacheCount": 0}
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89164E78-FC82-4684-BE97-DCDD85D26546
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

