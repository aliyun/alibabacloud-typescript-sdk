// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate ID. Only server certificates are supported.
   * 
   * @example
   * 12315790343_166f8204689_1714763408_70998****
   */
  certificateId?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * Indicates whether the certificate is the default certificate of the listener. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the certificate is associated with the listener. Valid values:
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Diassociating**
   * 
   * @example
   * Associating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateType: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

