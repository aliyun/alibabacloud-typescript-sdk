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
   * The certificate type.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * Specifies whether the certificate is the default certificate for the listener. Valid values:
   * 
   * - **true**: The certificate is the default certificate.
   * 
   * - **false**: The certificate is an additional certificate.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The association status between the certificate and the listener. Valid values:
   * 
   * - **Associating**: The certificate is being associated.
   * 
   * - **Associated**: The certificate is associated.
   * 
   * - **Diassociating**: The certificate is being dissociated.
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
   * The number of entries to return per page. Valid values: **1** to **50**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * - Leave this parameter empty for the first query or when no subsequent query is required.
   * - For subsequent queries, set this parameter to the NextToken value returned by the previous API call.
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
   * The total number of entries.
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

