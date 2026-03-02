// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MobiInfo } from "./MobiInfo";
import { AppPluginInfo } from "./AppPluginInfo";


export class NeuronAppClientInfo extends $dara.Model {
  /**
   * @example
   * module_58mkf3jj::page_gbnxyuh5
   */
  appEntry?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appId?: number;
  mobiInfo?: MobiInfo;
  pluginList?: AppPluginInfo[];
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * {}
   */
  sidebar?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appEntry: 'appEntry',
      appId: 'appId',
      mobiInfo: 'mobiInfo',
      pluginList: 'pluginList',
      productId: 'productId',
      sidebar: 'sidebar',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntry: 'string',
      appId: 'number',
      mobiInfo: MobiInfo,
      pluginList: { 'type': 'array', 'itemType': AppPluginInfo },
      productId: 'number',
      sidebar: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.mobiInfo && typeof (this.mobiInfo as any).validate === 'function') {
      (this.mobiInfo as any).validate();
    }
    if(Array.isArray(this.pluginList)) {
      $dara.Model.validateArray(this.pluginList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

