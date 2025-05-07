// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints } from "./RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints";


export class RunMultiDocIntroductionResponseBodyPayloadOutput extends $dara.Model {
  keyPoints?: RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints[];
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints },
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyPoints)) {
      $dara.Model.validateArray(this.keyPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

