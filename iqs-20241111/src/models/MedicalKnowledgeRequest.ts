// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MedicalKnowInput } from "./MedicalKnowInput";


export class MedicalKnowledgeRequest extends $dara.Model {
  body?: MedicalKnowInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MedicalKnowInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

