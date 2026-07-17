// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceFeaturesRequestSiteFeatures extends $dara.Model {
  /**
   * @remarks
   * The site feature configurations to modify.
   * 
   * @example
   * network_optimization|smart_routing,loadbalance
   */
  features?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * 151097616427232
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
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

export class ModifyInstanceFeaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The plan instance ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-b6ga97vfo64g
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of site feature configurations.
   * 
   * This parameter is required.
   */
  siteFeatures?: ModifyInstanceFeaturesRequestSiteFeatures[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      siteFeatures: 'SiteFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      siteFeatures: { 'type': 'array', 'itemType': ModifyInstanceFeaturesRequestSiteFeatures },
    };
  }

  validate() {
    if(Array.isArray(this.siteFeatures)) {
      $dara.Model.validateArray(this.siteFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

