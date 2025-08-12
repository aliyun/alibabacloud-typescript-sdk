// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **Ca**: CA certificate.
   * *   **Server**: server certificate
   * 
   * @example
   * Ca
   */
  certType?: string;
  /**
   * @remarks
   * The server certificate. Only one server certificate is supported.
   * 
   * >  This parameter takes effect only for TCP/SSL listeners.
   * 
   * **if can be null:**
   * true
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The ID of the listener. Specify the ID of a listener that uses SSL over TCP.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-j49ht1jxxqyg45****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
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
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      certificateIds: 'CertificateIds',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
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

