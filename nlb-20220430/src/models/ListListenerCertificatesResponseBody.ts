// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only one server certificate is supported.
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
   * The server certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The certificates.
   */
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  /**
   * @remarks
   * The number of entries returned per page. Valid values: **1** to **50**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
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
   * 2198BD6D-9EBB-5E1C-9C48-E0ABB79CF831
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

