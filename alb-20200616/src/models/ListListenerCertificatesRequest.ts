// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The type of the certificate. Valid values: **Ca** and **Server**.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * The listener ID. You must specify the ID of an HTTPS listener or a QUIC listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The number of entries to return in each call. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      certificateType: 'CertificateType',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      certificateType: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

