// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyResultDCV extends $dara.Model {
  /**
   * @remarks
   * The DCV ID.
   * 
   * @example
   * bababf7cdd1546a2ad04c0def1f4****
   */
  id?: string;
  /**
   * @remarks
   * The DCV name. It is a TXT record name if Type is DNS or URL if Type is HTTP.
   * 
   * @example
   * http://www.example.com/.well-known/acme-challenge/pH20CqwS5L3ZnvkhI436DCzadKFuG7QcUcvB_4KsAow
   */
  key?: string;
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The DCV type. Valid values: DNS and HTTP.
   * 
   * @example
   * HTTP
   */
  type?: string;
  /**
   * @remarks
   * The DCV content.
   * 
   * @example
   * pH20CqwS5L3ZnvkhI436DCzadKFuG7QcUcvB_4KsAow.KfzYo4LH3EgOt7a73G-RqZkbR0eYtLfEUmtmqGmr4FQ
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      status: 'Status',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      status: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

