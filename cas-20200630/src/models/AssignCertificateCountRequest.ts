// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignCertificateCountRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the CA certificate.
   * 
   * @example
   * 1f0167b4-ee84-XXX-49bc4d39fa68
   */
  caIdentifier?: string;
  /**
   * @remarks
   * The total number of certificate records.
   * 
   * @example
   * 5
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The ID of the data source to which the certificate belongs.
   * 
   * @example
   * 33285
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      caIdentifier: 'CaIdentifier',
      certTotalCount: 'CertTotalCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caIdentifier: 'string',
      certTotalCount: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

