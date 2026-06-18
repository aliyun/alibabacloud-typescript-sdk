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
   * The total quota available in a 30-day period. A value of 0 indicates that this quota is not configured.
   * 
   * @example
   * 200000
   */
  quota30Day?: string;
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
   * The used quota.
   * 
   * @example
   * 10
   */
  usage?: string;
  /**
   * @remarks
   * The quota used within the 30-day period.
   * 
   * @example
   * 20
   */
  usage30Day?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quota30Day: 'Quota30Day',
      requestId: 'RequestId',
      usage: 'Usage',
      usage30Day: 'Usage30Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      quota30Day: 'string',
      requestId: 'string',
      usage: 'string',
      usage30Day: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

