// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTieredCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * Multi-level cache architecture mode. Possible values:
   * - edge: Edge cache layer.
   * - edge_smart: Edge cache layer + intelligent cache layer.
   * - edge_regional: Edge cache layer + regional cache layer.
   * - edge_regional_smart: Edge cache layer + regional cache layer + intelligent cache layer.
   * 
   * @example
   * edge
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
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

