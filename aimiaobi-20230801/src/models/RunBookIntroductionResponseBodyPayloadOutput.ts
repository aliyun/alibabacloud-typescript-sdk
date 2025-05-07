// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookIntroductionResponseBodyPayloadOutput extends $dara.Model {
  keyPoint?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoint: 'KeyPoint',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoint: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

