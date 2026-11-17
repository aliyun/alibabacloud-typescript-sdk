// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceFeaturesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the plan instance. You can obtain instance ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-b6ga97vfo64g
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of site feature information.
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

