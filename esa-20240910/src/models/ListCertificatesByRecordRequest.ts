// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the certificate details. 0 indicates that the certificate details are not returned. 1 indicates that the certificate details are returned.
   * 
   * @example
   * 1
   */
  detail?: boolean;
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to return only valid certificates. 0 indicates that all matched certificates are returned. 1 indicates that only valid certificates are returned.
   * 
   * @example
   * 1
   */
  validOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      recordName: 'RecordName',
      siteId: 'SiteId',
      validOnly: 'ValidOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      recordName: 'string',
      siteId: 'number',
      validOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

