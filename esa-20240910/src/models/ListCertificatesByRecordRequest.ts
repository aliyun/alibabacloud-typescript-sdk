// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return certificate details. A value of `1` includes certificate details, whereas a value of `0` excludes them.
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
   * The site ID. To obtain this ID, call the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to return only valid certificates. A value of `1` returns only valid certificates, whereas `0` returns all matching certificates.
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

