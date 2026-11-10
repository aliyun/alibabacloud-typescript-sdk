// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically enable the latest list of back-to-origin IP addresses.
   * 
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * Specifies whether to enable back-to-origin convergence. Valid values:
   * 
   * - on: Enables back-to-origin convergence.
   * - off: Disables back-to-origin convergence.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  originConverge?: string;
  /**
   * @remarks
   * The site ID. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

