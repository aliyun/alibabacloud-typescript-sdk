// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTemplateAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert template. You must specify at least one of the `Name` and `TemplateId` parameters.
   * 
   * For information about how to obtain the name of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * @example
   * ECS_Template1
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert template. You must specify at least one of the `Name` and `TemplateId` parameters.
   * 
   * For information about how to obtain the ID of an alert template, see [DescribeMetricRuleTemplateList](https://help.aliyun.com/document_detail/114982.html).
   * 
   * @example
   * 70****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

