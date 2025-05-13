// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTaskRequestSendSmsPlan extends $dara.Model {
  /**
   * @remarks
   * 意向标签
   */
  intentTags?: string[];
  /**
   * @remarks
   * 短信模板ID
   * 
   * @example
   * 71
   */
  smsTemplateId?: number;
  static names(): { [key: string]: string } {
    return {
      intentTags: 'IntentTags',
      smsTemplateId: 'SmsTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentTags: { 'type': 'array', 'itemType': 'string' },
      smsTemplateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intentTags)) {
      $dara.Model.validateArray(this.intentTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

