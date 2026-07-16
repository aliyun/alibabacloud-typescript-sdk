// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheReserveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cache reserve instance ID.
   * 
   * @example
   * cr_hk_123456789
   */
  cacheReserveInstanceId?: string;
  /**
   * @remarks
   * The switch status. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheReserveInstanceId: 'CacheReserveInstanceId',
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveInstanceId: 'string',
      enable: 'string',
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

