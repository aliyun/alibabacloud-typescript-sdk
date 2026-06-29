// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteCoverageRequest extends $dara.Model {
  /**
   * @remarks
   * The target acceleration region to change to. Valid values:
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * <props="china">If the value is set to domestic or global, the site corresponding to SiteId must have a valid ICP filing..
   * 
   * This parameter is required.
   * 
   * @example
   * overseas
   */
  coverage?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
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

