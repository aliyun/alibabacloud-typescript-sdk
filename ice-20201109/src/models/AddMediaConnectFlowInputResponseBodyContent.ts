// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowInputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The source URL.
   * 
   * @example
   * rtmp://1.2.3.4:1935/live/AliTestInput_8666ec062190f00e263012666319a5be
   */
  inputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

