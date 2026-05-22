// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpsApplicationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * ConfigId of the configuration, which can be obtained by calling the [listHttpsApplicationConfigurations](https://help.aliyun.com/document_detail/2869087.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
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

