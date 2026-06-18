// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically enable the latest back-to-origin IP addresses list. Valid values:
   * - off: Do not automatically enable.
   * - on: Automatically enable.
   * 
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation. The plan associated with the site must support the origin protection feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfirmIPList: 'AutoConfirmIPList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirmIPList: 'string',
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

