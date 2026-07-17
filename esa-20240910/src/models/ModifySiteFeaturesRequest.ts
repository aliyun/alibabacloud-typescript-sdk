// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySiteFeaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-bl39ryjtineo
   */
  newInstanceId?: string;
  /**
   * @remarks
   * The site feature information to be cleared.
   * 
   * This parameter is required.
   * 
   * @example
   * network_optimization|smart_routing,loadbalance
   */
  siteFeatures?: string;
  /**
   * @remarks
   * The site ID. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1067072706415168
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      newInstanceId: 'NewInstanceId',
      siteFeatures: 'SiteFeatures',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceId: 'string',
      siteFeatures: 'string',
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

