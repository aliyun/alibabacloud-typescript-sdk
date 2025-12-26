// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseJobResponseBody extends $dara.Model {
  /**
   * @example
   * kbjob-9mn******1z54
   */
  knowledgeBaseJobId?: string;
  /**
   * @example
   * 963BD7F9-0C02-5594-9550-BCC6DD43E3C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseJobId: 'KnowledgeBaseJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseJobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

