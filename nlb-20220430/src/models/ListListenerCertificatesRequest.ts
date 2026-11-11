// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - **Ca**: CA certificate.
   * - **Server**: Server certificate.
   * 
   * @example
   * Ca
   */
  certType?: string;
  /**
   * @remarks
   * The server certificates. You can add only one server certificate.
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   * 
   * **if can be null:**
   * true
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The listener ID. This parameter is valid only for TCPSSL listeners.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-j49ht1jxxqyg45****@80
   */
  listenerId?: string;
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
   * The region ID of the Network Load Balancer (NLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
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

