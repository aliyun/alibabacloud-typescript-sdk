// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowSlowestItem extends $dara.Model {
  /**
   * @remarks
   * The UID of the sample.
   * 
   * @example
   * 321fa56f-e1e5-4eb3-8047-db7a230c9a75
   */
  promptUid?: string;
  /**
   * @remarks
   * The ordinal number of the event trace.
   * 
   * @example
   * 2
   */
  sampleIndex?: string;
  /**
   * @remarks
   * The execution duration of the stage, in seconds.
   * 
   * @example
   * 9.2
   */
  sec?: number;
  static names(): { [key: string]: string } {
    return {
      promptUid: 'PromptUid',
      sampleIndex: 'SampleIndex',
      sec: 'Sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptUid: 'string',
      sampleIndex: 'string',
      sec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

