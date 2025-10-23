// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailResponseBody extends $dara.Model {
  /**
   * @example
   * yyy.com
   */
  domainPart?: string;
  /**
   * @example
   * true
   */
  isFreeMail?: boolean;
  /**
   * @example
   * xxx
   */
  localPart?: string;
  /**
   * @example
   * Gmail
   */
  provider?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNSPECIFIED
   */
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      domainPart: 'DomainPart',
      isFreeMail: 'IsFreeMail',
      localPart: 'LocalPart',
      provider: 'Provider',
      requestId: 'RequestId',
      status: 'Status',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainPart: 'string',
      isFreeMail: 'boolean',
      localPart: 'string',
      provider: 'string',
      requestId: 'string',
      status: 'string',
      subStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

