// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceFeaturesShrinkRequest extends $dara.Model {
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
  siteFeaturesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      siteFeaturesShrink: 'SiteFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      siteFeaturesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

