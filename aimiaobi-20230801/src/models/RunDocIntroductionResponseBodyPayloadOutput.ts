// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocIntroductionResponseBodyPayloadOutputIntroductions } from "./RunDocIntroductionResponseBodyPayloadOutputIntroductions";


export class RunDocIntroductionResponseBodyPayloadOutput extends $dara.Model {
  introductions?: RunDocIntroductionResponseBodyPayloadOutputIntroductions[];
  keyPoint?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      introductions: 'Introductions',
      keyPoint: 'KeyPoint',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introductions: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductions },
      keyPoint: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.introductions)) {
      $dara.Model.validateArray(this.introductions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

