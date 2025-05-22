// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The one or more features that you want to query. Valid values:
   * 
   * *   Terraform: the Terraform hosting feature.
   * *   ResourceCleaner: the resource cleaner feature. You can use ALIYUN::ROS::ResourceCleaner to create a resource cleaner.
   * *   TemplateScratch: the scenario feature.
   * *   All: all features that are supported by ROS.
   * 
   * This parameter is required.
   * 
   * @example
   * Terraform
   */
  feature?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

