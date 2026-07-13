// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The backup cycle.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * FD552816-FCC8-4832-B4A2-2DA0C2BA1688
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      periodType: 'PeriodType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      periodType: 'string',
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

