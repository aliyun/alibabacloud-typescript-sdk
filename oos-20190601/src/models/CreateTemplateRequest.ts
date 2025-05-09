// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the template. The content must be in the JSON or YAML format, and its maximum size is 64 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * {"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag keys and tag values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the version of the template.
   * 
   * @example
   * v2
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

