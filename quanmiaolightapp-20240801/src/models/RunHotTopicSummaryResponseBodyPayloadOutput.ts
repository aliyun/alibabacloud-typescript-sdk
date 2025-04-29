// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicSummaryResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      topicId: 'topicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      topicId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

