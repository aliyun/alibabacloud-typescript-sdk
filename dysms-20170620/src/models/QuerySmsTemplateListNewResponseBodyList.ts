// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateListNewResponseBodyListSmsTemplate } from "./QuerySmsTemplateListNewResponseBodyListSmsTemplate";


export class QuerySmsTemplateListNewResponseBodyList extends $dara.Model {
  smsTemplate?: QuerySmsTemplateListNewResponseBodyListSmsTemplate[];
  static names(): { [key: string]: string } {
    return {
      smsTemplate: 'SmsTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsTemplate: { 'type': 'array', 'itemType': QuerySmsTemplateListNewResponseBodyListSmsTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.smsTemplate)) {
      $dara.Model.validateArray(this.smsTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

