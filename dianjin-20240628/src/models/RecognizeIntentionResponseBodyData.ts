// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIntentionResponseBodyData extends $dara.Model {
  analysisProcess?: string;
  /**
   * @example
   * 1
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  recommendIntention?: string;
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      recommendIntention: 'string',
      recommendScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

