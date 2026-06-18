// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIPv6Request extends $dara.Model {
  /**
   * @remarks
   * Whether to enable IPv6. Valid values:
   * 
   * - **on**: Enables IPv6.
   * 
   * - **off**: Disables IPv6.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The region in which to enable IPv6. The default value is x.x.
   * 
   * - x.x: global
   * 
   * - cn.cn: Chinese mainland
   * 
   * @example
   * x.x
   */
  region?: string;
  /**
   * @remarks
   * The site ID. You can get this ID by calling [ListSites](https://help.aliyun.com/document_detail/2850189.html).
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

