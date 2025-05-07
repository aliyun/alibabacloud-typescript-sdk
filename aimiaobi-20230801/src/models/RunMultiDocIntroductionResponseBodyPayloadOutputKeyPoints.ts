// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints extends $dara.Model {
  keyPoint?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoint: 'KeyPoint',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoint: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

