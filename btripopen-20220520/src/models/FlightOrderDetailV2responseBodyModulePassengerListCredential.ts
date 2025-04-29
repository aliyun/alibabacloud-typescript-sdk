// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailV2ResponseBodyModulePassengerListCredential extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthDate?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  certIssueDate?: string;
  certIssuePlace?: string;
  credentialNo?: string;
  driveLicenceFirst?: string;
  driveLicenceType?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  expireDate?: string;
  holderNationality?: string;
  /**
   * @example
   * 131332
   */
  id?: number;
  idCheckCode?: string;
  issueCountry?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certIssueDate: 'cert_issue_date',
      certIssuePlace: 'cert_issue_place',
      credentialNo: 'credential_no',
      driveLicenceFirst: 'drive_licence_first',
      driveLicenceType: 'drive_licence_type',
      expireDate: 'expire_date',
      holderNationality: 'holder_nationality',
      id: 'id',
      idCheckCode: 'id_check_code',
      issueCountry: 'issue_country',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certIssueDate: 'string',
      certIssuePlace: 'string',
      credentialNo: 'string',
      driveLicenceFirst: 'string',
      driveLicenceType: 'string',
      expireDate: 'string',
      holderNationality: 'string',
      id: 'number',
      idCheckCode: 'string',
      issueCountry: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

