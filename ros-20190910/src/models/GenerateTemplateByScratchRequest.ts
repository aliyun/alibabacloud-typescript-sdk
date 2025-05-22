// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplateByScratchRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the new node.
   * 
   * @example
   * cn-hangzhou
   */
  provisionRegionId?: string;
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * For more information about how to query the IDs of resource scenarios, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the template that Resource Orchestration Service (ROS) generates. ROS can generate templates of the ROS and Terraform types. Default value: ROS.
   * 
   * @example
   * ROS
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      provisionRegionId: 'ProvisionRegionId',
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionRegionId: 'string',
      regionId: 'string',
      templateScratchId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

