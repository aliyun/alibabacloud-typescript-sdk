// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDigitalTemplateLastRangeNewResponseBodyListSmsTemplate } from "./QueryDigitalTemplateLastRangeNewResponseBodyListSmsTemplate";


export class QueryDigitalTemplateLastRangeNewResponseBodyList extends $dara.Model {
  smsTemplate?: QueryDigitalTemplateLastRangeNewResponseBodyListSmsTemplate[];
  static names(): { [key: string]: string } {
    return {
      smsTemplate: 'SmsTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsTemplate: { 'type': 'array', 'itemType': QueryDigitalTemplateLastRangeNewResponseBodyListSmsTemplate },
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

