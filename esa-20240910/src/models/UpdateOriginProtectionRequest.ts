// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginProtectionRequest extends $dara.Model {
  /**
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * The origin fetch convergence switch.
   * 
   * - on: Enable origin fetch convergence.
   * 
   * - off: Disable origin fetch convergence.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  originConverge?: string;
  /**
   * @remarks
   * The site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API to get it.
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
      originConverge: 'OriginConverge',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirmIPList: 'string',
      originConverge: 'string',
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

