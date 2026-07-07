// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return certificate details.
   * 
   * @example
   * true
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to return only valid certificates.
   * 
   * @example
   * true
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

