// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordRequest extends $dara.Model {
  detail?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
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

