// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDigitalTemplatePageListNewResponseBodyListSmsTemplate } from "./QueryDigitalTemplatePageListNewResponseBodyListSmsTemplate";


export class QueryDigitalTemplatePageListNewResponseBodyList extends $dara.Model {
  smsTemplate?: QueryDigitalTemplatePageListNewResponseBodyListSmsTemplate[];
  static names(): { [key: string]: string } {
    return {
      smsTemplate: 'SmsTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsTemplate: { 'type': 'array', 'itemType': QueryDigitalTemplatePageListNewResponseBodyListSmsTemplate },
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

