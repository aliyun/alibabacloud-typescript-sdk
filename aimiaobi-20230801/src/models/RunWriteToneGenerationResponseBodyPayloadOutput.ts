// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWriteToneGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

