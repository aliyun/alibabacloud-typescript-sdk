// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MedicalAnswerMetaData } from "./MedicalAnswerMetaData";


export class MedicalAnswerMessage extends $dara.Model {
  content?: string;
  metaData?: MedicalAnswerMetaData;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      metaData: 'metaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      metaData: MedicalAnswerMetaData,
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

