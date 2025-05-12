// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WritingStyleTemplateFieldStyle extends $dara.Model {
  description?: string;
  format?: string;
  placeholder?: string;
  showTime?: boolean;
  suffix?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      format: 'Format',
      placeholder: 'Placeholder',
      showTime: 'ShowTime',
      suffix: 'Suffix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      format: 'string',
      placeholder: 'string',
      showTime: 'boolean',
      suffix: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

