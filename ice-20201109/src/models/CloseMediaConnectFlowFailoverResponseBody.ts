// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseMediaConnectFlowFailoverResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  content?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * 391DDF25-705C-5B38-9DB9-7A6B00D6065A
   */
  requestId?: string;
  /**
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
      content: 'string',
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

