// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationWritingResponseBodyPayloadOutput extends $dara.Model {
  reasonContent?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      reasonContent: 'reasonContent',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonContent: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

