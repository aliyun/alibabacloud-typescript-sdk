// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrossBorderOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable Chinese mainland network access optimization. By default, it is disabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

