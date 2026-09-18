// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrusteeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID. You must specify either CertificateId or OrderId. Both cannot be empty at the same time.
   * 
   * @example
   * 23787679
   */
  certificateId?: number;
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results are available.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The order ID. You must specify either CertificateId or OrderId. Both cannot be empty at the same time.
   * 
   * @example
   * 14933279
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      maxResults: 'number',
      nextToken: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

