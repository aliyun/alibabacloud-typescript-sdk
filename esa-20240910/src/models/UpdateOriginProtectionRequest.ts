// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The IP convergence status.
   * 
   * *   on
   * *   off
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  originConverge?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      originConverge: 'OriginConverge',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

