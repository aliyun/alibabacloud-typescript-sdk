// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageInsightsCaptionConfig extends $dara.Model {
  enable?: boolean;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

