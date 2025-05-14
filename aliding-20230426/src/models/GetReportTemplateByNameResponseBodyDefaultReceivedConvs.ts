// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameResponseBodyDefaultReceivedConvs extends $dara.Model {
  /**
   * @example
   * cid12334##2341
   */
  conversationId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

