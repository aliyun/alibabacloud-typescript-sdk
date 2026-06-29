// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrossBorderOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable China mainland network access optimization. This feature is disabled by default. Valid values:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

