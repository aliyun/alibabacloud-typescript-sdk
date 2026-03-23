// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain part of the email address parsed from the syntax check. The domain part is converted to lowercase.
   * 
   * @example
   * yyy.com
   */
  domainPart?: string;
  /**
   * @remarks
   * Indicates whether the address is from a free email service.
   * 
   * @example
   * true
   */
  isFreeMail?: boolean;
  /**
   * @remarks
   * The local part of the email address parsed from the syntax check. The local part is converted to lowercase and the content after the plus sign (+) is removed.
   * 
   * @example
   * xxx
   */
  localPart?: string;
  /**
   * @remarks
   * The email service provider of the address.
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
   * The validation status of the email address.
   * 
   * This parameter is required.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The detailed validation status of the email address. This provides more information about the Status.
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

