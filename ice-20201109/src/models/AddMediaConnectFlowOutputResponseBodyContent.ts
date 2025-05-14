// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowOutputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The output URL.
   * 
   * @example
   * srt://1.2.3.4:1025
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

