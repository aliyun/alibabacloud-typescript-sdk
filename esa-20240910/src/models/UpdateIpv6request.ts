// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIPv6Request extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  region?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      region: 'Region',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      region: 'string',
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

