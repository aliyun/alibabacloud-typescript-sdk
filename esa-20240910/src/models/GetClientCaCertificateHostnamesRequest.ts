// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCaCertificateHostnamesRequest extends $dara.Model {
  /**
   * @example
   * babaded901474b9693acf530e0fb****
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
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

