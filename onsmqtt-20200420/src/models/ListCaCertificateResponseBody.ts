// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCaCertificateResponseBodyDataCaCertificateVOS extends $dara.Model {
  /**
   * @remarks
   * Content of the CA certificate. 
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * Name of the CA certificate
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * Registration code of the CA certificate
   * 
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registrationCode?: string;
  /**
   * @remarks
   * SN serial number of the CA certificate
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  /**
   * @remarks
   * The status of the CA certificate. The values are as follows:
   * - **0**: Indicates that the certificate is in an inactive state. - **1**: Indicates that the certificate is in an active state.
   * > After the CA certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  /**
   * @remarks
   * Verify the content of the certificate. 
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      registrationCode: 'RegistrationCode',
      sn: 'Sn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      registrationCode: 'string',
      sn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
      verificationContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of the CA certificate
   */
  caCertificateVOS?: ListCaCertificateResponseBodyDataCaCertificateVOS[];
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Maximum number of pages in the query result.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      caCertificateVOS: 'CaCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificateVOS: { 'type': 'array', 'itemType': ListCaCertificateResponseBodyDataCaCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.caCertificateVOS)) {
      $dara.Model.validateArray(this.caCertificateVOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Query result.
   */
  data?: ListCaCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCaCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

