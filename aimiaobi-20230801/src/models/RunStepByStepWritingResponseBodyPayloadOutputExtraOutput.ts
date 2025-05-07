// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingResponseBodyPayloadOutputExtraOutput extends $dara.Model {
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      summarization: 'summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

