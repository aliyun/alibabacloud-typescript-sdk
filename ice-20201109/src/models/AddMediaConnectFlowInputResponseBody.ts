// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConnectFlowInputResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The internal stream pushing IP address. This parameter is valid only when you connect to the cloud through an Express Connect circuit.
   * 
   * @example
   * ""
   */
  innerInputUrl?: string;
  /**
   * @remarks
   * The input URL.
   * 
   * @example
   * rtmp://1.2.3.4:1935/live/AliTestInput_8666ec062190f00e263012666319a5be
   */
  inputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      innerInputUrl: 'InnerInputUrl',
      inputUrl: 'InputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerInputUrl: 'string',
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

export class AddMediaConnectFlowInputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: AddMediaConnectFlowInputResponseBodyContent;
  /**
   * @remarks
   * The description of the API call.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11357BE8-4C54-58EA-890A-5AB646EDE4B2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned error code. A value of 0 indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: AddMediaConnectFlowInputResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

