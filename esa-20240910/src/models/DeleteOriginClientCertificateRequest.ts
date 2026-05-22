// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOriginClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

