// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential extends $dara.Model {
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

