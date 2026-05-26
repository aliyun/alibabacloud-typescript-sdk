// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PersonReferenceConfig } from "./PersonReferenceConfig";


export class VideoInsightsCaptionConfig extends $dara.Model {
  personReference?: PersonReferenceConfig;
  static names(): { [key: string]: string } {
    return {
      personReference: 'PersonReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personReference: PersonReferenceConfig,
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

