// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteCoverageRequest extends $dara.Model {
  /**
   * @remarks
   * The target acceleration area to modify. Valid values:
   * 
   * - **domestic**: Only the Chinese mainland.
   * 
   * - **global**: Global.
   * 
   * - **overseas**: Global (excluding the Chinese mainland).
   * 
   * This parameter is required.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The site ID. Get this by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
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

