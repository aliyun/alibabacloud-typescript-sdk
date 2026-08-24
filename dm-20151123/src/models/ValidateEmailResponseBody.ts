// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain part of the email address parsed from syntax validation (converted to lowercase).
   * 
   * @example
   * yyy.com
   */
  domainPart?: string;
  /**
   * @remarks
   * Indicates whether the address is a free mailbox.
   * 
   * @example
   * true
   */
  isFreeMail?: boolean;
  /**
   * @remarks
   * The local part of the email address parsed from syntax validation (converted to lowercase with the plus-sign portion removed).
   * 
   * @example
   * xxx
   */
  localPart?: string;
  /**
   * @remarks
   * The email provider classification of the address.
   * 
   * @example
   * Gmail
   */
  provider?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The email address status obtained from validation.
   * 
   * This parameter is required.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The email address sub-status obtained from validation, which provides a detailed description of the status.
   * 
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

