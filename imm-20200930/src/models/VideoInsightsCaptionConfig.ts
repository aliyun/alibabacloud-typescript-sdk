// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PersonReferenceConfig } from "./PersonReferenceConfig";


export class VideoInsightsCaptionConfig extends $dara.Model {
  enable?: boolean;
  personReference?: PersonReferenceConfig;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      personReference: 'PersonReference',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      personReference: PersonReferenceConfig,
      prompt: 'string',
    };
  }

  validate() {
    if(this.personReference && typeof (this.personReference as any).validate === 'function') {
      (this.personReference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

