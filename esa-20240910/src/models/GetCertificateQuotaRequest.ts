// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Certificate Quota type.
   * 
   * This parameter is required.
   * 
   * @example
   * free
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

