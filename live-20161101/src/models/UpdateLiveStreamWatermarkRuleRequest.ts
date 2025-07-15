// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom rule.
   * 
   * @example
   * my rule
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom rule.
   * 
   * @example
   * WatermarkRule****
   */
  name?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the watermark rule.
   * 
   * >  You can obtain the rule ID by checking the value of the RuleId parameter that is returned by the [AddLiveStreamWatermarkRule](https://help.aliyun.com/document_detail/2848100.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  ruleId?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * >  You can obtain the template ID by checking the value of the TemplateId parameter that is returned by the [AddLiveStreamWatermark](https://help.aliyun.com/document_detail/2848096.html) operation.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9 ****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      ruleId: 'string',
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

