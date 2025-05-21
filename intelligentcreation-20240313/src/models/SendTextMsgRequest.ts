// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTextMsgRequest extends $dara.Model {
  /**
   * @example
   * 126000030
   */
  projectId?: string;
  /**
   * @example
   * 52775239-1575-5C07-A4AE-1835D120E4A6
   */
  requestId?: string;
  /**
   * @example
   * tcm9xac9dsfbfgm8hf5k94l3cqybwh9o3mn0iuyytdgd9qoejxf1crxsdvuvr8fu0zudk5px4vsa3e3fgcclplkiuo7kyy3sqgscvhejmooblaiv64ww8cvlxvin2urzyhooqj33y7gvodef0sxn22n9q58o7xlupabiknxsv46qe7kof8nuc4be8kyhi01
   */
  sessionId?: string;
  text?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
      sessionId: 'string',
      text: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

