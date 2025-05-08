// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816**********
   */
  configId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

