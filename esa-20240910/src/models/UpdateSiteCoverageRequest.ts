// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteCoverageRequest extends $dara.Model {
  /**
   * @remarks
   * The desired service location. Valid values:
   * 
   * *   **domestic**: the Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
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

