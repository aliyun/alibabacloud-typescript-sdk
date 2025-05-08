// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurgeQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 100000
   */
  quota?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 10
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      requestId: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

