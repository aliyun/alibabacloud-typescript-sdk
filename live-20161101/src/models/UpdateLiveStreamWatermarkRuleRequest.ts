// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The custom description of the rule.
   * 
   * @example
   * my rule
   */
  description?: string;
  /**
   * @remarks
   * The custom name of the rule.
   * 
   * @example
   * WatermarkRule****
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the watermark rule.
   * 
   * > Get the rule ID from the response of the [AddLiveStreamWatermarkRule](https://help.aliyun.com/document_detail/2848100.html) operation.
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
   * > Get the template ID from the response of the [AddLiveStreamWatermark](https://help.aliyun.com/document_detail/2848096.html) operation.
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

