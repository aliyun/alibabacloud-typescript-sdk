// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domains?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: 'string',
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

